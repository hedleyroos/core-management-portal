/**
 * Generated Permission.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    Show,
    Edit,
    NumberField,
    SimpleList,
    TextField,
    Create,
    DateField,
    Datagrid,
    TextInput,
    List,
    SimpleForm,
    Responsive,
    SimpleShowLayout,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';

import PermissionEditActions from '../customActions/PermissionEditActions';

import PermissionFilter from '../filters/PermissionFilter';

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
    <Edit {...props} title="Permission Edit" actions={<PermissionEditActions />}>
        <SimpleForm validate={validationEditPermission}>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
