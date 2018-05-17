/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    TextInput,
    Filter
} from 'admin-on-rest';

const parseSiteIds = value => value.replace(/[^\w]/gi, ',');

const validateSiteIds = value => {
    if (value) {
        const valid = value.replace(/[^\w]/gi, ',').split(',').every(item => !isNaN(item))
        if (!valid) {
            return "Site Ids are not all numbers.";
        }
    }
};

const SiteDataSchemaFilter = props => (
    <Filter {...props}>
        <TextInput label="Site Ids" source="site_ids" parse={parseSiteIds} validate={validateSiteIds} />
    </Filter>
);

export default SiteDataSchemaFilter;
/** End of Generated Code **/