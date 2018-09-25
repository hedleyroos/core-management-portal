import React, { Component } from 'react';
import { Button, CardActions } from '@material-ui/core';
import PurgeIcon from '@material-ui/icons/Whatshot';
import { CreateButton } from 'react-admin';

import { styles } from '../theme';
import { successNotificationAnt, errorNotificationAnt, apiErrorHandler } from '../utils';
import { httpClient } from '../dataProvider';
import PermissionsStore from '../auth/PermissionsStore';
import { PERMISSIONS } from '../constants';

class InvitationListActions extends Component {
    purgeExpiredInvitations() {
        httpClient(`${process.env.REACT_APP_MANAGEMENT_LAYER}/invitations/purge/expired`)
            .then(response => {
                successNotificationAnt(
                    'Expired Invitations are being purged. Refresh to see any changes that have occured.'
                );
            })
            .catch(error => {
                errorNotificationAnt('Purging of invites was not initialized.');
                apiErrorHandler(error);
            });
    }

    render() {
        const {
            resource,
            filters,
            displayedFilters,
            filterValues,
            basePath,
            showFilter
        } = this.props;
        return (
            <CardActions style={styles.cardAction}>
                {filters &&
                    React.cloneElement(filters, {
                        resource,
                        showFilter,
                        displayedFilters,
                        filterValues,
                        context: 'button'
                    })}
                {PermissionsStore.getResourcePermission('invitations', 'create') && (
                    <CreateButton basePath={basePath} />
                )}
                {PermissionsStore.manyResourcePermissions(PERMISSIONS.purgeexpiredinvitations) && (
                    <Button size="small" color="primary" onClick={this.purgeExpiredInvitations}>
                        <PurgeIcon />
                        Purge Expired Invites
                    </Button>
                )}
            </CardActions>
        );
    }
}

export default InvitationListActions;
