import React from 'react';
import {
    List,
    Show,
    Edit,
    Create,
    Datagrid,
    SimpleShowLayout,
    SimpleForm,
    NumberInput,
    DateField,
    NumberField,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';

const validationCreateSiteDataSchema = values => {
    const errors = {};
    if (!values.site_id) {
        errors.site_id = ["site_id is required"];
    }
    return errors;
}

export const SiteDataSchemaShow = props => (
    <Show {...props} title="SiteDataSchema Show">
        <SimpleShowLayout>
            <DateField source="updated_at" />
            <DateField source="created_at" />
            <NumberField source="site_id" />
        </SimpleShowLayout>
    </Show>
)

export const SiteDataSchemaCreate = props => (
    <Create {...props} title="SiteDataSchema Create">
        <SimpleForm validate={validationCreateSiteDataSchema}>
            <NumberInput source="site_id" />
        </SimpleForm>
    </Create>
)

export const SiteDataSchemaList = props => (
    <List {...props} title="SiteDataSchema List">
        <Datagrid>
            <DateField source="updated_at" />
            <DateField source="created_at" />
            <NumberField source="site_id" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

