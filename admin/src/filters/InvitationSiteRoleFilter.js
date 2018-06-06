/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    TextInput,
    SelectInput,
    ReferenceInput,
    Filter
} from 'admin-on-rest';
import UnlimitedDropdownInput from '../inputs/UnlimitedDropdownInput';

const InvitationSiteRoleFilter = props => (
    <Filter {...props}>
        <TextInput label="Invitation Id" source="invitation_id" />
        <UnlimitedDropdownInput label="Site" source="site_id" reference="sites" optionText="name" />
        <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
            <SelectInput optionText="label" />
        </ReferenceInput>
    </Filter>
);

export default InvitationSiteRoleFilter;
/** End of Generated Code **/