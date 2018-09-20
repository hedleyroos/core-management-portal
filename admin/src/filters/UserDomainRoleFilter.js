/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { SelectInput, TextInput, ReferenceInput, Filter } from 'react-admin';

const UserDomainRoleFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <ReferenceInput label="Domain" source="domain_id" reference="domains" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
            <SelectInput optionText="label" />
        </ReferenceInput>
    </Filter>
);

export default UserDomainRoleFilter;
/** End of Generated Code **/
