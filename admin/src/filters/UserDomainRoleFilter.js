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

export const UserDomainRoleFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <NumberInput label="Domain Id" source="domain_id" />
        <NumberInput label="Role Id" source="role_id" />
    </Filter>
);
/** End of Generated Code **/