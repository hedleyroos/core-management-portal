/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    TextInput,
    Filter
} from 'admin-on-rest';

const parsePermissionIds = value => value.replace(/[^\w]/gi, ',');

const validatePermissionIds = value => {
    if (value) {
        const valid = value.replace(/[^\w]/gi, ',').split(',').every(item => !isNaN(item))
        if (!valid) {
            return "Permission Ids are not all numbers.";
        }
    }
};

const PermissionFilter = props => (
    <Filter {...props}>
        <TextInput label="Permission Ids" source="permission_ids" parse={parsePermissionIds} validate={validatePermissionIds} />
    </Filter>
);

export default PermissionFilter;
/** End of Generated Code **/