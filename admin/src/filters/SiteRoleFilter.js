/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    NumberInput,
    Filter
} from 'admin-on-rest';

export const SiteRoleFilter = props => (
    <Filter {...props}>
        <NumberInput label="Site Id" source="site_id" />
        <NumberInput label="Role Id" source="role_id" />
    </Filter>
);
/** End of Generated Code **/