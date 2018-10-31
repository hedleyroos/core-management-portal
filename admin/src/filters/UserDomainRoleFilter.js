/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { SelectInput, TextInput, ReferenceInput, Filter } from 'react-admin';
import DomainTreeInput from '../inputs/DomainTreeInput';

const UserDomainRoleFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <DomainTreeInput label="Domain" source="domain_id" />
        <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
            <SelectInput optionText="label" />
        </ReferenceInput>
    </Filter>
);

export default UserDomainRoleFilter;
/** End of Generated Code **/
