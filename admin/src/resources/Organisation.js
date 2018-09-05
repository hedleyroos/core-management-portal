/**
 * Generated Organisation.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    List,
    NumberField,
    TextField,
    DateField,
    SimpleForm,
    Create,
    TextInput,
    Show,
    SimpleShowLayout,
    Edit,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';
import PermissionsStore from '../auth/PermissionsStore';
import OrganisationFilter from '../filters/OrganisationFilter';
import EditableDatagrid from '../grids/EditableDatagrid';

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
    <List {...props} title="Organisation List" filters={<OrganisationFilter />}>
        <EditableDatagrid bodyOptions={{ showRowHover: true }}>
            <NumberField source="id" sortable={false} />
            <TextField source="name" sortable={false} />
            <TextField source="description" sortable={false} />
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
            {PermissionsStore.getResourcePermission('organisations', 'edit') ? (
                <EditButton />
            ) : null}
            <ShowButton />
            {PermissionsStore.getResourcePermission('organisations', 'remove') ? (
                <DeleteButton />
            ) : null}
        </EditableDatagrid>
    </List>
);

export const OrganisationCreate = props => (
    <Create {...props} title="Organisation Create">
        <SimpleForm validate={validationCreateOrganisation}>
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
        <SimpleForm validate={validationEditOrganisation}>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
