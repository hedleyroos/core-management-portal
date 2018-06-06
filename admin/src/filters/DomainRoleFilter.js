/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    SelectInput,
    ReferenceInput,
    Filter
} from 'admin-on-rest';
import UnlimitedDropdownInput from '../inputs/UnlimitedDropdownInput';

const DomainRoleFilter = props => (
    <Filter {...props}>
        <UnlimitedDropdownInput label="Domain" source="domain_id" reference="domains" optionText="name" />
        <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
            <SelectInput optionText="label" />
        </ReferenceInput>
    </Filter>
);

export default DomainRoleFilter;
/** End of Generated Code **/