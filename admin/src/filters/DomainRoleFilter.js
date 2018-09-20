/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { SelectInput, ReferenceInput, Filter } from 'react-admin';

const DomainRoleFilter = props => (
    <Filter {...props}>
        <ReferenceInput label="Domain" source="domain_id" reference="domains" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
            <SelectInput optionText="label" />
        </ReferenceInput>
    </Filter>
);

export default DomainRoleFilter;
/** End of Generated Code **/
