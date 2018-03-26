import React from 'react';
import {
    List,
    Show,
    Edit,
    Create,
    Datagrid,
    SimpleShowLayout,
    SimpleForm,
    BooleanField,
    TextField,
    DateField,
    BooleanInput,
    TextInput,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';

const validationEditUser = values => {
    const errors = {};
    return errors;
}

export const UserShow = props => (
    <Show {...props} title="User Show">
        <SimpleShowLayout>
            <BooleanField source="email_verified" />
            <TextField source="last_name" />
            <TextField source="birth_date" />
            <DateField source="last_login" />
            <TextField source="id" />
            <TextField source="avatar" />
            <BooleanField source="msisdn_verified" />
            <TextField source="msisdn" />
            <BooleanField source="is_active" />
            <TextField source="date_joined" />
            <TextField source="first_name" />
            <TextField source="username" />
            <TextField source="email" />
            <TextField source="country_code" />
            <DateField source="created_at" />
            <TextField source="gender" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
)

export const UserList = props => (
    <List {...props} title="User List">
        <Datagrid>
            <BooleanField source="email_verified" />
            <TextField source="last_name" />
            <TextField source="birth_date" />
            <DateField source="last_login" />
            <TextField source="id" />
            <TextField source="avatar" />
            <BooleanField source="msisdn_verified" />
            <TextField source="msisdn" />
            <BooleanField source="is_active" />
            <TextField source="date_joined" />
            <TextField source="first_name" />
            <TextField source="username" />
            <TextField source="email" />
            <TextField source="country_code" />
            <DateField source="created_at" />
            <TextField source="gender" />
            <DateField source="updated_at" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const UserEdit = props => (
    <Edit {...props} title="User Edit">
        <SimpleForm validate={validationCreateUser}>
            <BooleanInput source="email_verified" />
            <TextInput source="last_name" />
            <TextInput source="birth_date" />
            <BooleanInput source="is_active" />
            <TextInput source="first_name" />
            <TextInput source="email" />
            <TextInput source="msisdn" />
            <TextInput source="avatar" />
            <BooleanInput source="msisdn_verified" />
            <TextInput source="gender" />
            <TextInput source="country_code" />
        </SimpleForm>
    </Edit>
)

