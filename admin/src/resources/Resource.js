/**
 * Generated Resource.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    DateField,
    Datagrid,
    Create,
    SimpleList,
    Edit,
    SimpleShowLayout,
    Show,
    NumberField,
    UrlField,
    TextInput,
    TextField,
    SimpleForm,
    List,
    Responsive,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';

import ResourceEditToolbar from '../customActions/ResourceEditToolbar';

import ResourceFilter from '../filters/ResourceFilter';

const validationCreateResource = values => {
    const errors = {};
    if (!values.urn) {
        errors.urn = ['urn is required'];
    }
    return errors;
};

const validationEditResource = values => {
    const errors = {};
    return errors;
};

export const ResourceList = props => (
    <List {...props} title="Resource List" filters={<ResourceFilter />} bulkActionButtons={false}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => `Urn: ${record.urn}`}
                    secondaryText={record => `Description: ${record.description}`}
                />
            }
            medium={
                <Datagrid>
                    <NumberField source="id" sortable={false} />
                    <UrlField source="urn" sortable={false} />
                    <TextField source="description" sortable={false} />
                    <DateField source="created_at" sortable={false} />
                    <DateField source="updated_at" sortable={false} />
                    <EditButton />
                    <ShowButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
);

export const ResourceCreate = props => (
    <Create {...props} title="Resource Create">
        <SimpleForm validate={validationCreateResource} redirect="show">
            <TextInput source="urn" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const ResourceShow = props => (
    <Show {...props} title="Resource Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <UrlField source="urn" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const ResourceEdit = props => (
    <Edit {...props} title="Resource Edit">
        <SimpleForm validate={validationEditResource} toolbar={<ResourceEditToolbar />}>
            <TextInput source="urn" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
