/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    TextInput,
    Filter
} from 'admin-on-rest';

const parseOrganisationalUnitIds = value => value.replace(/[^\w]/gi, ',');

const validateOrganisationalUnitIds = value => {
    if (value) {
        const valid = value.replace(/[^\w]/gi, ',').split(',').every(item => !isNaN(item))
        if (!valid) {
            return "Organisational Unit Ids are not all numbers.";
        }
    }
};

const OrganisationalunitFilter = props => (
    <Filter {...props}>
        <TextInput label="Organisational Unit Ids" source="organisational_unit_ids" parse={parseOrganisationalUnitIds} validate={validateOrganisationalUnitIds} />
    </Filter>
);

export default OrganisationalunitFilter;
/** End of Generated Code **/