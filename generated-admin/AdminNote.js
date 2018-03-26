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
    NumberField,
    DateField,
    TextInput,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';

const validationCreateAdminNote = values => {
    const errors = {};
    if (!values.creator_id) {
        errors.creator_id = ["creator_id is required"];
    }
    if (!values.note) {
        errors.note = ["note is required"];
    }
    if (!values.user_id) {
        errors.user_id = ["user_id is required"];
    }
    return errors;
}

const validationEditAdminNote = values => {
    const errors = {};
    return errors;
}

export const AdminNoteShow = props => (
    <Show {...props} title="AdminNote Show">
        <SimpleShowLayout>
            <TextField source="note" />
            <TextField source="user_id" />
            <NumberField source="id" />
            <TextField source="creator_id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
)

export const AdminNoteCreate = props => (
    <Create {...props} title="AdminNote Create">
        <SimpleForm validate={validationCreateAdminNote}>
            <TextInput source="creator_id" />
            <TextInput source="note" />
            <TextInput source="user_id" />
        </SimpleForm>
    </Create>
)

export const AdminNoteList = props => (
    <List {...props} title="AdminNote List">
        <Datagrid>
            <TextField source="note" />
            <TextField source="user_id" />
            <NumberField source="id" />
            <TextField source="creator_id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const AdminNoteEdit = props => (
    <Edit {...props} title="AdminNote Edit">
        <SimpleForm validate={validationCreateAdminNote}>
            <TextInput source="note" />
        </SimpleForm>
    </Edit>
)

