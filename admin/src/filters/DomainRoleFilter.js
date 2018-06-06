/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    NumberInput,
    Filter
} from 'admin-on-rest';
import UnlimitedDropdownInput from '../inputs/UnlimitedDropdownInput';

const DomainRoleFilter = props => (
    <Filter {...props}>
        <UnlimitedDropdownInput label="Domain" source="domain_id" reference="domains" optionText="name" />
        <NumberInput label="Role Id" source="role_id" />
    </Filter>
);

export default DomainRoleFilter;
/** End of Generated Code **/