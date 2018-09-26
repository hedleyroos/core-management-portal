/**
 * Generated Edit.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { DeleteButton, SaveButton, Toolbar } from 'react-admin';

import PermissionsStore from '../auth/PermissionsStore';

const InvitationRedirectUrlEditToolbar = props => (
    <Toolbar {...props}>
        <SaveButton label="Save" submitOnEnter={true} />
        <SaveButton
            label="Save and Continue Editing"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
        {PermissionsStore.getResourcePermission('invitationredirecturls', 'remove') && (
            <DeleteButton resource="invitationredirecturls" record={props.record} />
        )}
    </Toolbar>
);

export default InvitationRedirectUrlEditToolbar;
/** End of Generated Code **/
