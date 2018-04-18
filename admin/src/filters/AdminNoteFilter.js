/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    TextInput,
    Filter
} from 'admin-on-rest';

export const AdminNoteFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <TextInput label="Creator Id" source="creator_id" />
    </Filter>
);
/** End of Generated Code **/