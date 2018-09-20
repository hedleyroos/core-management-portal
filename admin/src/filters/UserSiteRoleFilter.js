/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { SelectInput, TextInput, ReferenceInput, Filter } from 'react-admin';

const UserSiteRoleFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <ReferenceInput label="Site" source="site_id" reference="sites" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
            <SelectInput optionText="label" />
        </ReferenceInput>
    </Filter>
);

export default UserSiteRoleFilter;
/** End of Generated Code **/
