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

const UserDomainRoleFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <UnlimitedDropdownInput label="Domain" source="domain_id" reference="domains" optionText="name" />
        <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
            <SelectInput optionText="label" />
        </ReferenceInput>
    </Filter>
);

export default UserDomainRoleFilter;
/** End of Generated Code **/