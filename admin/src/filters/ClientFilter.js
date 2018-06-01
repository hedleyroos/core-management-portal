/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    TextInput,
    Filter
} from 'admin-on-rest';

const parseClientIds = value => value.replace(/[^\w]/gi, ',');

const validateClientIds = value => {
    if (value) {
        const valid = value.replace(/[^\w]/gi, ',').split(',').every(item => !isNaN(item))
        if (!valid) {
            return "Client Ids are not all numbers.";
        }
    }
};

const ClientFilter = props => (
    <Filter {...props}>
        <TextInput label="Client Ids" source="client_ids" parse={parseClientIds} validate={validateClientIds} />
        <TextInput label="Client Token Id" source="client_token_id" />
    </Filter>
);

export default ClientFilter;
/** End of Generated Code **/