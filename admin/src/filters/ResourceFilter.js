/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { TextInput, Filter } from 'react-admin';

const parseResourceIds = value => value.replace(/[^\w]/gi, ',');

const validateResourceIds = value => {
    if (value) {
        const valid = value
            .replace(/[^\w]/gi, ',')
            .split(',')
            .every(item => !isNaN(item));
        if (!valid) {
            return 'Resource Ids are not all numbers.';
        }
    }
};

const ResourceFilter = props => (
    <Filter {...props}>
        <TextInput label="Prefix" source="prefix" />
        <TextInput
            label="Resource Ids"
            source="resource_ids"
            parse={parseResourceIds}
            validate={validateResourceIds}
        />
    </Filter>
);

export default ResourceFilter;
/** End of Generated Code **/
