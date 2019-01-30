/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { TextInput, Filter } from 'react-admin';

import UnlimitedDropdownInput from '../inputs/UnlimitedDropdownInput';

const HasOrganisationFilter = { has_organisation: true, order_by: "username" }

const UserSiteDataFilter = props => (
    <Filter {...props}>
        <UnlimitedDropdownInput label="User" source="user_id" reference="users" optionText="username"
                                filter={HasOrganisationFilter}/>
        <UnlimitedDropdownInput label="Site" source="site_id" reference="sites" optionText="name" />
    </Filter>
);

export default UserSiteDataFilter;
/** End of Generated Code **/
