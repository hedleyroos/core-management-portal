import React, { Component } from 'react';
import { DeleteButton, ListButton, RefreshButton, EditButton } from 'react-admin';
import { CardActions } from 'material-ui/Card';

import PermissionsStore from '../auth/PermissionsStore';

class UserShowActions extends Component {
    render() {
        const { basePath, data } = this.props;
        return (
            <CardActions>
                {PermissionsStore.getResourcePermission('users', 'edit') && (
                    <EditButton basePath={basePath} record={data} />
                )}
                <ListButton basePath={basePath} />
                {PermissionsStore.getResourcePermission('users', 'remove') && (
                    <DeleteButton basePath={basePath} record={data} />
                )}
                <RefreshButton />
            </CardActions>
        );
    }
}

export default UserShowActions;
