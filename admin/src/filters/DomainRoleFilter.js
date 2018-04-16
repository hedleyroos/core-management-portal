/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    NumberInput,
    Filter
} from 'admin-on-rest';

export const DomainRoleFilter = props => (
    <Filter {...props}>
        <NumberInput label="Domain Id" source="domain_id" />
        <NumberInput label="Role Id" source="role_id" />
    </Filter>
);
/** End of Generated Code **/