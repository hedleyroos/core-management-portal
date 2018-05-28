/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    TextInput,
    BooleanInput,
    NumberInput,
    Filter
} from 'admin-on-rest';
import DateRangeInput from '../inputs/DateRangeInput';
import DropdownFilterInput from '../inputs/DropdownFilterInput';

const parseUserIds = value => value.replace(/[^\w]/gi, ',');

const parseSiteIds = value => value.replace(/[^\w]/gi, ',');

const validateSiteIds = value => {
    if (value) {
        const valid = value.replace(/[^\w]/gi, ',').split(',').every(item => !isNaN(item))
        if (!valid) {
            return "Site Ids are not all numbers.";
        }
    }
};

const UserFilter = props => (
    <Filter {...props}>
	<TextInput label="Search" source="q" alwaysOn />
        <DateRangeInput label="Birth Date" source="birth_date" />
        <DropdownFilterInput label="Country" source="country" relation="countries" labelField="code" />
        <DateRangeInput label="Date Joined" source="date_joined" />
        <TextInput label="Email" source="email" />
        <BooleanInput label="Email Verified" source="email_verified" />
        <TextInput label="First Name" source="first_name" />
        <TextInput label="Gender" source="gender" />
        <BooleanInput label="Is Active" source="is_active" />
        <DateRangeInput label="Last Login" source="last_login" />
        <TextInput label="Last Name" source="last_name" />
        <TextInput label="Msisdn" source="msisdn" />
        <BooleanInput label="Msisdn Verified" source="msisdn_verified" />
        <TextInput label="Nickname" source="nickname" />
        <NumberInput label="Organisational Unit ID" source="organisational_unit_id" />
        <DateRangeInput label="Updated At" source="updated_at" time />
        <TextInput label="Username" source="username" />
        <BooleanInput label="Two factor Auth Enabled" source="tfa_enabled" />
        <BooleanInput label="Has Organisational Unit" source="has_organisational_unit" />
        <TextInput label="User Ids" source="user_ids" parse={parseUserIds} />
        <TextInput label="Site Ids" source="site_ids" parse={parseSiteIds} validate={validateSiteIds} />
    </Filter>
);

export default UserFilter;
/** End of Generated Code **/