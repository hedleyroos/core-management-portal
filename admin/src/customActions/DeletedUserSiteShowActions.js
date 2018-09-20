import React, { Component } from 'react';
import { DeleteButton, ListButton, RefreshButton, EditButton } from 'react-admin';
import { CardActions } from 'material-ui/Card';

import PermissionsStore from '../auth/PermissionsStore';

class DeletedUserSiteShowActions extends Component {
    render() {
        const { basePath, data } = this.props;
        return (
            <CardActions>
                {PermissionsStore.getResourcePermission('deletedusersites', 'edit') && (
                    <EditButton basePath={basePath} record={data} />
                )}
                <ListButton basePath={basePath} />
                {PermissionsStore.getResourcePermission('deletedusersites', 'remove') && (
                    <DeleteButton basePath={basePath} record={data} />
                )}
                <RefreshButton />
            </CardActions>
        );
    }
}

export default DeletedUserSiteShowActions;
