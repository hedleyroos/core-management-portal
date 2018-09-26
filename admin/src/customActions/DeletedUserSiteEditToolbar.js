/**
 * Generated Edit.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { DeleteButton, SaveButton, Toolbar } from 'react-admin';

import PermissionsStore from '../auth/PermissionsStore';

const DeletedUserSiteEditToolbar = props => (
    <Toolbar {...props}>
        <SaveButton label="Save" submitOnEnter={true} />
        <SaveButton
            label="Save and Continue Editing"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
        {PermissionsStore.getResourcePermission('deletedusersites', 'remove') && (
            <DeleteButton resource="deletedusersites" record={props.record} />
        )}
    </Toolbar>
);

export default DeletedUserSiteEditToolbar;
/** End of Generated Code **/
