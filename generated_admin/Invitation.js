/**
 * Generated Invitation.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    List,
    Show,
    Edit,
    Create,
    Datagrid,
    SimpleShowLayout,
    SimpleForm,
    TextField,
    DateField,
    TextInput,
    DateInput,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';
import {
    InvitationFilter
} from './Filters';

const validationCreateInvitation = values => {
    const errors = {};
    if (!values.invitor_id) {
        errors.invitor_id = ["invitor_id is required"];
    }
    if (!values.first_name) {
        errors.first_name = ["first_name is required"];
    }
    if (!values.last_name) {
        errors.last_name = ["last_name is required"];
    }
    if (!values.email) {
        errors.email = ["email is required"];
    }
    return errors;
}

const validationEditInvitation = values => {
    const errors = {};
    return errors;
}

export const InvitationList = props => (
    <List {...props} title="Invitation List" filters={<InvitationFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="invitor_id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="email" />
            <DateField source="expires_at" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const InvitationCreate = props => (
    <Create {...props} title="Invitation Create">
        <SimpleForm validate={validationCreateInvitation}>
            <TextInput source="invitor_id" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="email" />
            <DateInput source="expires_at" />
        </SimpleForm>
    </Create>
)

export const InvitationShow = props => (
    <Show {...props} title="Invitation Show">
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="invitor_id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="email" />
            <DateField source="expires_at" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
)

export const InvitationEdit = props => (
    <Edit {...props} title="Invitation Edit">
        <SimpleForm validate={validationEditInvitation}>
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="email" />
            <DateInput source="expires_at" />
        </SimpleForm>
    </Edit>
)

/** End of Generated Code **/