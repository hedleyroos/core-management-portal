import React from 'react';
import {
    List,
    Show,
    Edit,
    Create,
    Datagrid,
    SimpleShowLayout,
    SimpleForm,
    TextInput,
    NumberInput,
    TextField,
    NumberField,
    DateField,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';

const validationCreateDomain = values => {
    const errors = {};
    if (!values.name) {
        errors.name = ["name is required"];
    }
    return errors;
}

const validationEditDomain = values => {
    const errors = {};
    return errors;
}

export const DomainShow = props => (
    <Show {...props} title="Domain Show">
        <SimpleShowLayout>
            <TextField source="name" />
            <NumberField source="parent_id" />
            <NumberField source="id" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
)

export const DomainCreate = props => (
    <Create {...props} title="Domain Create">
        <SimpleForm validate={validationCreateDomain}>
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="parent_id" />
        </SimpleForm>
    </Create>
)

export const DomainList = props => (
    <List {...props} title="Domain List">
        <Datagrid>
            <TextField source="name" />
            <NumberField source="parent_id" />
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

export const DomainEdit = props => (
    <Edit {...props} title="Domain Edit">
        <SimpleForm validate={validationCreateDomain}>
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="parent_id" />
        </SimpleForm>
    </Edit>
)

