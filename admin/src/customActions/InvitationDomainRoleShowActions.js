import React, { Component } from 'react';
import { DeleteButton, ListButton, RefreshButton, EditButton } from 'react-admin';
import { CardActions } from 'material-ui/Card';

import PermissionsStore from '../auth/PermissionsStore';

class InvitationDomainRoleShowActions extends Component {
    render() {
        const { basePath, data } = this.props;
        return (
            <CardActions>
                <ListButton basePath={basePath} />
                {PermissionsStore.getResourcePermission('invitationdomainroles', 'remove') && (
                    <DeleteButton basePath={basePath} record={data} />
                )}
                <RefreshButton />
            </CardActions>
        );
    }
}

export default InvitationDomainRoleShowActions;
