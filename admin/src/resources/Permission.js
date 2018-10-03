/**
 * Generated Permission.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    SimpleList,
    Show,
    SimpleForm,
    DateField,
    Create,
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

import PermissionEditToolbar from '../customActions/PermissionEditToolbar';

import PermissionFilter from '../filters/PermissionFilter';

import FieldSelectDatagrid from '../grids/FieldSelectDatagrid';

const validationCreatePermission = values => {
    const errors = {};
    if (!values.name) {
        errors.name = ['name is required'];
    }
    return errors;
};

const validationEditPermission = values => {
    const errors = {};
    return errors;
};

export const PermissionList = props => (
    <List
        {...props}
        title="Permission List"
        filters={<PermissionFilter />}
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
                <FieldSelectDatagrid>
                    <NumberField source="id" sortable={false} />
                    <TextField source="name" sortable={false} />
                    <TextField source="description" sortable={false} />
                    <DateField source="created_at" sortable={false} />
                    <DateField source="updated_at" sortable={false} />
                    {PermissionsStore.getResourcePermission('permissions', 'edit') ? (
                        <EditButton />
                    ) : null}
                    <ShowButton />
                    {PermissionsStore.getResourcePermission('permissions', 'remove') ? (
                        <DeleteButton />
                    ) : null}
                </FieldSelectDatagrid>
            }
        />
    </List>
);

export const PermissionCreate = props => (
    <Create {...props} title="Permission Create">
        <SimpleForm validate={validationCreatePermission} redirect="show">
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const PermissionShow = props => (
    <Show {...props} title="Permission Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const PermissionEdit = props => (
    <Edit {...props} title="Permission Edit">
        <SimpleForm validate={validationEditPermission} toolbar={<PermissionEditToolbar />}>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
