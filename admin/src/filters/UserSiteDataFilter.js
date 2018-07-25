/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { TextInput, Filter } from 'admin-on-rest';
import UnlimitedDropdownInput from '../inputs/UnlimitedDropdownInput';

const UserSiteDataFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <UnlimitedDropdownInput label="Site" source="site_id" reference="sites" optionText="name" />
    </Filter>
);

export default UserSiteDataFilter;
/** End of Generated Code **/
