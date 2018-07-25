/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { SelectInput, ReferenceInput, Filter } from 'admin-on-rest';
import DomainTreeInput from '../inputs/DomainTreeInput';

const DomainRoleFilter = props => (
    <Filter {...props}>
        <DomainTreeInput label="Domain" source="domain_id" />
        <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
            <SelectInput optionText="label" />
        </ReferenceInput>
    </Filter>
);

export default DomainRoleFilter;
/** End of Generated Code **/
