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

export const UserFilter = props => (
    <Filter {...props}>
	<TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Birth Date" source="birth_date" />
        <TextInput label="Country" source="country" />
        <TextInput label="Date Joined" source="date_joined" />
        <TextInput label="Email" source="email" />
        <BooleanInput label="Email Verified" source="email_verified" />
        <TextInput label="First Name" source="first_name" />
        <TextInput label="Gender" source="gender" />
        <BooleanInput label="Is Active" source="is_active" />
        <TextInput label="Last Login" source="last_login" />
        <TextInput label="Last Name" source="last_name" />
        <TextInput label="Msisdn" source="msisdn" />
        <BooleanInput label="Msisdn Verified" source="msisdn_verified" />
        <TextInput label="Nickname" source="nickname" />
        <NumberInput label="Organisational Unit Id" source="organisational_unit_id" />
        <TextInput label="Updated At" source="updated_at" />
        <TextInput label="Username" source="username" />
        <TextInput label="Q" source="q" />
        <BooleanInput label="Tfa Enabled" source="tfa_enabled" />
        <BooleanInput label="Has Organisational Unit" source="has_organisational_unit" />
    </Filter>
);
/** End of Generated Code **/