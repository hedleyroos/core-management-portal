/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { SelectInput, NumberInput, ReferenceInput, Filter } from 'react-admin';

const RoleResourcePermissionFilter = props => (
    <Filter {...props}>
        <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
            <SelectInput optionText="label" />
        </ReferenceInput>
        <NumberInput label="Resource Id" source="resource_id" />
        <NumberInput label="Permission Id" source="permission_id" />
    </Filter>
);

export default RoleResourcePermissionFilter;
/** End of Generated Code **/
