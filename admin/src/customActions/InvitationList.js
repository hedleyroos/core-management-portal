import React, { Component } from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PurgeIcon from 'material-ui/svg-icons/social/whatshot';
import { CreateButton, RefreshButton } from 'admin-on-rest';

import { styles } from '../Theme';
import { successNotificationAnt, errorNotificationAnt, apiErrorHandler } from '../utils';
import { httpClient } from '../restClient';
import PermissionsStore from '../auth/PermissionsStore';
import { PERMISSIONS } from '../constants';

class InvitationListActions extends Component {
    purgeExpiredInvitations() {
        httpClient(
            `${
                process.env.REACT_APP_MANAGEMENT_LAYER
            }/invitations/purge/expired`
        )
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
                <RefreshButton />
                {PermissionsStore.manyResourcePermissions(PERMISSIONS.purgeexpiredinvitations) && (
                    <FlatButton
                        primary
                        icon={<PurgeIcon />}
                        label="Purge Expired Invites"
                        onClick={this.purgeExpiredInvitations}
                    />
                )}
            </CardActions>
        );
    }
}

export default InvitationListActions;