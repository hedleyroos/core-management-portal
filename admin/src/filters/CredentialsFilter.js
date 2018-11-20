/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { ReferenceInput, SelectInput, TextInput, Filter } from 'react-admin';

const parseCredentialsIds = value => value.replace(/[^\w]/gi, ',');

const validateCredentialsIds = value => {
    if (value) {
        const valid = value
            .replace(/[^\w]/gi, ',')
            .split(',')
            .every(item => !isNaN(item));
        if (!valid) {
            return 'Credentials Ids are not all numbers.';
        }
    }
};

const CredentialsFilter = props => (
    <Filter {...props}>
        <TextInput
            label="Credentials Ids"
            source="credentials_ids"
            parse={parseCredentialsIds}
            validate={validateCredentialsIds}
        />
        <UnlimitedDropdownInput label="Site" source="site_id" reference="sites" optionText="name" />
    </Filter>
);

export default CredentialsFilter;
/** End of Generated Code **/
