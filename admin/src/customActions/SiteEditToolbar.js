/**
 * Generated Edit.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { DeleteButton, SaveButton, Toolbar } from 'react-admin';

import PermissionsStore from '../auth/PermissionsStore';

const SiteEditToolbar = props => (
    <Toolbar {...props}>
        <SaveButton label="Save" submitOnEnter={true} />
        <SaveButton
            label="Save and Continue Editing"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
        {PermissionsStore.getResourcePermission('sites', 'remove') && (
            <DeleteButton resource="sites" record={props.record} />
        )}
    </Toolbar>
);

export default SiteEditToolbar;
/** End of Generated Code **/
