/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { TextInput, Filter } from 'admin-on-rest';

const parseOrganisationIds = value => value.replace(/[^\w]/gi, ',');

const validateOrganisationIds = value => {
    if (value) {
        const valid = value
            .replace(/[^\w]/gi, ',')
            .split(',')
            .every(item => !isNaN(item));
        if (!valid) {
            return 'Organisation Ids are not all numbers.';
        }
    }
};

const OrganisationFilter = props => (
    <Filter {...props}>
        <TextInput
            label="Organisation Ids"
            source="organisation_ids"
            parse={parseOrganisationIds}
            validate={validateOrganisationIds}
        />
    </Filter>
);

export default OrganisationFilter;
/** End of Generated Code **/
