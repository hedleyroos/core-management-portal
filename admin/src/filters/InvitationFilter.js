/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    TextInput,
    Filter
} from 'admin-on-rest';

const parseInvitationIds = value => value.replace(/[^\w]/gi, ',');

const validateInvitationIds = value => {
    if (value) {
        const valid = value.replace(/[^\w]/gi, ',').split(',').every(item => !isNaN(item))
        if (!valid) {
            return "Invitation Ids are not all numbers.";
        }
    }
};

const InvitationFilter = props => (
    <Filter {...props}>
        <TextInput label="Invitor Id" source="invitor_id" />
        <TextInput label="Invitation Ids" source="invitation_ids" parse={parseInvitationIds} validate={validateInvitationIds} />
    </Filter>
);

export default InvitationFilter;
/** End of Generated Code **/