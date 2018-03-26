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
    BooleanInput,
    NumberInput,
    BooleanField,
    TextField,
    NumberField,
    DateField,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';

const validationCreateSite = values => {
    const errors = {};
    if (!values.name) {
        errors.name = ["name is required"];
    }
    if (!values.domain_id) {
        errors.domain_id = ["domain_id is required"];
    }
    return errors;
}

const validationEditSite = values => {
    const errors = {};
    return errors;
}

export const SiteShow = props => (
    <Show {...props} title="Site Show">
        <SimpleShowLayout>
            <BooleanField source="is_active" />
            <TextField source="client_id" />
            <NumberField source="domain_id" />
            <NumberField source="id" />
            <TextField source="description" />
            <DateField source="created_at" />
            <TextField source="name" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
)

export const SiteCreate = props => (
    <Create {...props} title="Site Create">
        <SimpleForm validate={validationCreateSite}>
            <TextInput source="name" />
            <TextInput source="client_id" />
            <BooleanInput source="is_active" />
            <NumberInput source="domain_id" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
)

export const SiteList = props => (
    <List {...props} title="Site List">
        <Datagrid>
            <BooleanField source="is_active" />
            <TextField source="client_id" />
            <NumberField source="domain_id" />
            <NumberField source="id" />
            <TextField source="description" />
            <DateField source="created_at" />
            <TextField source="name" />
            <DateField source="updated_at" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const SiteEdit = props => (
    <Edit {...props} title="Site Edit">
        <SimpleForm validate={validationCreateSite}>
            <TextInput source="name" />
            <TextInput source="client_id" />
            <BooleanInput source="is_active" />
            <NumberInput source="domain_id" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
)

