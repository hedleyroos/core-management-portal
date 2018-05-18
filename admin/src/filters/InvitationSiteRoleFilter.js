/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    TextInput,
    NumberInput,
    Filter
} from 'admin-on-rest';

const InvitationSiteRoleFilter = props => (
    <Filter {...props}>
        <TextInput label="Invitation Id" source="invitation_id" />
        <NumberInput label="Site Id" source="site_id" />
        <NumberInput label="Role Id" source="role_id" />
    </Filter>
);

export default InvitationSiteRoleFilter;
/** End of Generated Code **/