/**
 * Generated Organisation.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    Datagrid,
    Show,
    List,
    TextField,
    DateField,
    TextInput,
    SimpleShowLayout,
    NumberField,
    Create,
    SimpleForm,
    Edit,
    Responsive
} from 'react-admin';

import OrganisationListActions from '../customActions/OrganisationListActions';
import OrganisationShowActions from '../customActions/OrganisationShowActions';
import OrganisationEditActions from '../customActions/OrganisationEditActions';

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
        actions={<OrganisationListActions />}
        filters={<OrganisationFilter />}
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
    <Show {...props} title="Organisation Show" actions={<OrganisationShowActions />}>
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
    <Edit {...props} title="Organisation Edit" actions={<OrganisationEditActions />}>
        <SimpleForm validate={validationEditOrganisation}>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
