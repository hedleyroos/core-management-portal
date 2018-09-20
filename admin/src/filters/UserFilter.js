/**
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    BooleanInput,
    ReferenceInput,
    TextInput,
    SelectInput,
    NumberInput,
    Filter
} from 'react-admin';


const parseUserIds = value => value.replace(/[^\w]/gi, ',');

const UserFilter = props => (
    <Filter {...props}>
	<TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Birth Date" source="birth_date" />
        <ReferenceInput label="Country" source="country" reference="countries" allowEmpty>
            <SelectInput optionText="code" />
        </ReferenceInput>
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
        <NumberInput label="Organisation Id" source="organisation_id" />
        <TextInput label="Updated At" source="updated_at" />
        <TextInput label="Username" source="username" />
        <BooleanInput label="Two factor Auth Enabled" source="tfa_enabled" />
        <BooleanInput label="Has Organisation" source="has_organisation" />
        <TextInput label="User Ids" source="user_ids" parse={parseUserIds} />
        <ReferenceInput label="Site" source="site_ids" reference="sites" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export default UserFilter;
/** End of Generated Code **/
