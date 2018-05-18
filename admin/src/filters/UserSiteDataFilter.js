/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    TextInput,
    NumberInput,
    Filter
} from 'admin-on-rest';

const UserSiteDataFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <NumberInput label="Site Id" source="site_id" />
    </Filter>
);

export default UserSiteDataFilter;
/** End of Generated Code **/