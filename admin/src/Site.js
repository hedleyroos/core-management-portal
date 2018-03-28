/**
 * Generated Site.js code. Edit at own risk.
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
    BooleanField,
    DateField,
    TextInput,
    NumberInput,
    BooleanInput,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';
import {
    SiteFilter
} from './Filters';

const validationCreateSite = values => {
    const errors = {};
    if (!values.domain_id) {
        errors.domain_id = ["domain_id is required"];
    }
    if (!values.name) {
        errors.name = ["name is required"];
    }
    return errors;
}

const validationEditSite = values => {
    const errors = {};
    return errors;
}

export const SiteList = props => (
    <List {...props} title="Site List" filters={<SiteFilter />}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="client_id" />
            <NumberField source="domain_id" />
            <TextField source="name" />
            <TextField source="description" />
            <BooleanField source="is_active" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const SiteCreate = props => (
    <Create {...props} title="Site Create">
        <SimpleForm validate={validationCreateSite}>
            <TextInput source="client_id" />
            <NumberInput source="domain_id" />
            <TextInput source="name" />
            <BooleanInput source="is_active" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
)

export const SiteShow = props => (
    <Show {...props} title="Site Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="client_id" />
            <NumberField source="domain_id" />
            <TextField source="name" />
            <TextField source="description" />
            <BooleanField source="is_active" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
)

export const SiteEdit = props => (
    <Edit {...props} title="Site Edit">
        <SimpleForm validate={validationEditSite}>
            <TextInput source="client_id" />
            <NumberInput source="domain_id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Edit>
)

/** End of Generated Code **/