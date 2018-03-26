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

const validationCreatePermission = values => {
    const errors = {};
    if (!values.name) {
        errors.name = ["name is required"];
    }
    return errors;
}

const validationEditPermission = values => {
    const errors = {};
    return errors;
}

export const PermissionShow = props => (
    <Show {...props} title="Permission Show">
        <SimpleShowLayout>
            <TextField source="name" />
            <NumberField source="id" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
)

export const PermissionCreate = props => (
    <Create {...props} title="Permission Create">
        <SimpleForm validate={validationCreatePermission}>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
)

export const PermissionList = props => (
    <List {...props} title="Permission List">
        <Datagrid>
            <TextField source="name" />
            <NumberField source="id" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const PermissionEdit = props => (
    <Edit {...props} title="Permission Edit">
        <SimpleForm validate={validationCreatePermission}>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
)

