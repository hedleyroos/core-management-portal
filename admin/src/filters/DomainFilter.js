/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { TextInput, Filter } from 'react-admin';
import DomainTreeInput from '../inputs/DomainTreeInput';

const parseDomainIds = value => value.replace(/[^\w]/gi, ',');

const validateDomainIds = value => {
    if (value) {
        const valid = value
            .replace(/[^\w]/gi, ',')
            .split(',')
            .every(item => !isNaN(item));
        if (!valid) {
            return 'Domain Ids are not all numbers.';
        }
    }
};

const DomainFilter = props => (
    <Filter {...props}>
        <DomainTreeInput label="Parent Domain" source="parent_id" />
        <TextInput
            label="Domain Ids"
            source="domain_ids"
            parse={parseDomainIds}
            validate={validateDomainIds}
        />
    </Filter>
);

export default DomainFilter;
/** End of Generated Code **/
