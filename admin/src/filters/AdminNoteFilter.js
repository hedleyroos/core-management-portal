/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    TextInput,
    Filter
} from 'admin-on-rest';

const parseAdminNoteIds = value => value.replace(/[^\w]/gi, ',');

const validateAdminNoteIds = value => {
    if (value) {
        const valid = value.replace(/[^\w]/gi, ',').split(',').every(item => !isNaN(item))
        if (!valid) {
            return "Admin Note Ids are not all numbers.";
        }
    }
};

const AdminNoteFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <TextInput label="Creator Id" source="creator_id" />
        <TextInput label="Admin Note Ids" source="admin_note_ids" parse={parseAdminNoteIds} validate={validateAdminNoteIds} />
    </Filter>
);

export default AdminNoteFilter;
/** End of Generated Code **/