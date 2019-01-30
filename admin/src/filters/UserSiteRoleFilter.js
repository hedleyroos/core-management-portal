/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { SelectInput, ReferenceInput, Filter } from 'react-admin';

import UnlimitedDropdownInput from '../inputs/UnlimitedDropdownInput';

const HasOrganisationFilter = { has_organisation: true, order_by: "username" }

const UserSiteRoleFilter = props => (
    <Filter {...props}>
        <UnlimitedDropdownInput label="User" source="user_id" reference="users" optionText="username"
                                filter={HasOrganisationFilter}/>
        <UnlimitedDropdownInput label="Site" source="site_id" reference="sites" optionText="name" />
        <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
            <SelectInput optionText="label" />
        </ReferenceInput>
    </Filter>
);

export default UserSiteRoleFilter;
/** End of Generated Code **/
