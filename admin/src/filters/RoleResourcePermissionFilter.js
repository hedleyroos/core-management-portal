/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    NumberInput,
    Filter
} from 'admin-on-rest';

export const RoleResourcePermissionFilter = props => (
    <Filter {...props}>
        <NumberInput label="Role Id" source="role_id" />
        <NumberInput label="Resource Id" source="resource_id" />
        <NumberInput label="Permission Id" source="permission_id" />
    </Filter>
);
/** End of Generated Code **/