/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { TextInput, Filter } from 'react-admin';

const parseInvitationIds = value => value.replace(/[^\w]/gi, ',');

const InvitationFilter = props => (
    <Filter {...props}>
        <TextInput label="Invitor Id" source="invitor_id" />
        <TextInput label="Invitation Ids" source="invitation_ids" parse={parseInvitationIds} />
    </Filter>
);

export default InvitationFilter;
/** End of Generated Code **/
