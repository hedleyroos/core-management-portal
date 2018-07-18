/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { TextInput, Filter } from 'admin-on-rest';

const parseCountryCodes = value => value.replace(/[^\w]/gi, ',');

const CountryFilter = props => (
    <Filter {...props}>
        <TextInput label="Country Codes" source="country_codes" parse={parseCountryCodes} />
    </Filter>
);

export default CountryFilter;
/** End of Generated Code **/
