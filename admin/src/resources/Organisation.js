/**
 * Generated Organisation.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    SimpleList,
    Show,
    SimpleForm,
    DateField,
    Create,
    Datagrid,
    Responsive,
    TextInput,
    SimpleShowLayout,
    List,
    TextField,
    Edit,
    NumberField,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';

import OrganisationEditToolbar from '../customActions/OrganisationEditToolbar';

import OrganisationFilter from '../filters/OrganisationFilter';

const validationCreateOrganisation = values => {
    const errors = {};
    if (!values.name) {
        errors.name = ['name is required'];
    }
    return errors;
};

const validationEditOrganisation = values => {
    const errors = {};
    return errors;
};

export const OrganisationList = props => (
    <List
        {...props}
        title="Organisation List"
        filters={<OrganisationFilter />}
        bulkActionButtons={false}
    >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => `Name: ${record.name}`}
                    secondaryText={record => `Description: ${record.description}`}
                />
            }
            medium={
                <Datagrid>
                    <NumberField source="id" sortable={false} />
                    <TextField source="name" sortable={false} />
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

export const OrganisationCreate = props => (
    <Create {...props} title="Organisation Create">
        <SimpleForm validate={validationCreateOrganisation} redirect="show">
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const OrganisationShow = props => (
    <Show {...props} title="Organisation Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const OrganisationEdit = props => (
    <Edit {...props} title="Organisation Edit">
        <SimpleForm validate={validationEditOrganisation} toolbar={<OrganisationEditToolbar />}>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
