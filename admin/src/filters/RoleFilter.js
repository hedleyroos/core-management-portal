/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { TextInput, Filter } from 'react-admin';

const parseRoleIds = value => value.replace(/[^\w]/gi, ',');

const validateRoleIds = value => {
    if (value) {
        const valid = value
            .replace(/[^\w]/gi, ',')
            .split(',')
            .every(item => !isNaN(item));
        if (!valid) {
            return 'Role Ids are not all numbers.';
        }
    }
};

const RoleFilter = props => (
    <Filter {...props}>
        <TextInput
            label="Role Ids"
            source="role_ids"
            parse={parseRoleIds}
            validate={validateRoleIds}
        />
    </Filter>
);

export default RoleFilter;
/** End of Generated Code **/
