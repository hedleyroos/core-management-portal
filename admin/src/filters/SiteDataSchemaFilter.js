/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { TextInput, Filter } from 'react-admin';

import UnlimitedDropdownInput from '../inputs/UnlimitedDropdownInput';


const SiteDataSchemaFilter = props => (
    <Filter {...props}>
        <UnlimitedDropdownInput label="Site" source="site_id" reference="sites" optionText="name" />
    </Filter>
);

export default SiteDataSchemaFilter;
/** End of Generated Code **/
