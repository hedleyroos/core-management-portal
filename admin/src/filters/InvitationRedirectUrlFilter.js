/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { TextInput, Filter } from 'react-admin';

const parseInvitationredirecturlIds = value => value.replace(/[^\w]/gi, ',');

const validateInvitationredirecturlIds = value => {
    if (value) {
        const valid = value
            .replace(/[^\w]/gi, ',')
            .split(',')
            .every(item => !isNaN(item));
        if (!valid) {
            return 'Invitationredirecturl Ids are not all numbers.';
        }
    }
};

const InvitationRedirectUrlFilter = props => (
    <Filter {...props}>
        <TextInput
            label="Invitationredirecturl Ids"
            source="invitationredirecturl_ids"
            parse={parseInvitationredirecturlIds}
            validate={validateInvitationredirecturlIds}
        />
    </Filter>
);

export default InvitationRedirectUrlFilter;
/** End of Generated Code **/
