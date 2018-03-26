import React from 'react';
import {
    List,
    Show,
    Edit,
    Create,
    Datagrid,
    SimpleShowLayout,
    SimpleForm,
    DateInput,
    TextInput,
    DateField,
    TextField,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';

const validationCreateInvitation = values => {
    const errors = {};
    if (!values.last_name) {
        errors.last_name = ["last_name is required"];
    }
    if (!values.email) {
        errors.email = ["email is required"];
    }
    if (!values.first_name) {
        errors.first_name = ["first_name is required"];
    }
    if (!values.invitor_id) {
        errors.invitor_id = ["invitor_id is required"];
    }
    return errors;
}

const validationEditInvitation = values => {
    const errors = {};
    return errors;
}

export const InvitationShow = props => (
    <Show {...props} title="Invitation Show">
        <SimpleShowLayout>
            <DateField source="expires_at" />
            <TextField source="last_name" />
            <TextField source="first_name" />
            <TextField source="id" />
            <TextField source="email" />
            <DateField source="updated_at" />
            <DateField source="created_at" />
            <TextField source="invitor_id" />
        </SimpleShowLayout>
    </Show>
)

export const InvitationCreate = props => (
    <Create {...props} title="Invitation Create">
        <SimpleForm validate={validationCreateInvitation}>
            <DateInput source="expires_at" />
            <TextInput source="last_name" />
            <TextInput source="email" />
            <TextInput source="first_name" />
            <TextInput source="invitor_id" />
        </SimpleForm>
    </Create>
)

export const InvitationList = props => (
    <List {...props} title="Invitation List">
        <Datagrid>
            <DateField source="expires_at" />
            <TextField source="last_name" />
            <TextField source="first_name" />
            <TextField source="id" />
            <TextField source="email" />
            <DateField source="updated_at" />
            <DateField source="created_at" />
            <TextField source="invitor_id" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const InvitationEdit = props => (
    <Edit {...props} title="Invitation Edit">
        <SimpleForm validate={validationCreateInvitation}>
            <DateInput source="expires_at" />
            <TextInput source="last_name" />
            <TextInput source="email" />
            <TextInput source="first_name" />
        </SimpleForm>
    </Edit>
)

