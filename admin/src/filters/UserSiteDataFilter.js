/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { SelectInput, TextInput, ReferenceInput, Filter } from 'react-admin';

const UserSiteDataFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <ReferenceInput label="Site" source="site_id" reference="sites" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export default UserSiteDataFilter;
/** End of Generated Code **/
