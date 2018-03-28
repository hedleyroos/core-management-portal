/**
 * Generated AdminNote.js code. Edit at own risk.
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
    NumberField,
    TextField,
    DateField,
    TextInput,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';
import {
    AdminNoteFilter
} from './Filter';

const validationCreateAdminNote = values => {
    const errors = {};
    if (!values.user_id) {
        errors.user_id = ["user_id is required"];
    }
    if (!values.creator_id) {
        errors.creator_id = ["creator_id is required"];
    }
    if (!values.note) {
        errors.note = ["note is required"];
    }
    return errors;
}

const validationEditAdminNote = values => {
    const errors = {};
    return errors;
}

export const AdminNoteList = props => (
    <List {...props} title="AdminNote List" filters={<AdminNoteFilter />}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="user_id" />
            <TextField source="creator_id" />
            <TextField source="note" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const AdminNoteCreate = props => (
    <Create {...props} title="AdminNote Create">
        <SimpleForm validate={validationCreateAdminNote}>
            <TextInput source="user_id" />
            <TextInput source="creator_id" />
            <TextInput source="note" />
        </SimpleForm>
    </Create>
)

export const AdminNoteShow = props => (
    <Show {...props} title="AdminNote Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="user_id" />
            <TextField source="creator_id" />
            <TextField source="note" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
)

export const AdminNoteEdit = props => (
    <Edit {...props} title="AdminNote Edit">
        <SimpleForm validate={validationCreateAdminNote}>
            <TextInput source="note" />
        </SimpleForm>
    </Edit>
)

/** End of Generated Code **/