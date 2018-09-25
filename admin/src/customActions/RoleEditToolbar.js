/**
 * Generated Edit.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { DeleteButton, SaveButton, Toolbar } from 'react-admin';

import PermissionsStore from '../auth/PermissionsStore';

const RoleEditToolbar = props => (
    <Toolbar {...props}>
        <SaveButton label="Save" redirect="show" submitOnEnter={true} />
        <SaveButton
            label="Save and Continue Editing"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
        {PermissionsStore.getResourcePermission('roles', 'remove') && <DeleteButton />}
    </Toolbar>
);

export default RoleEditToolbar;
/** End of Generated Code **/
