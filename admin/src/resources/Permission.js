/**
 * Generated Permission.js code. Edit at own risk.
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
import PermissionFilter from '../filters/PermissionFilter';
import EditableDatagrid from '../grids/EditableDatagrid';

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
    <List {...props} title="Permission List" filters={<PermissionFilter />}>
        <EditableDatagrid bodyOptions={{ showRowHover: true }}>
            <NumberField source="id" sortable={false} />
            <TextField source="name" sortable={false} />
            <TextField source="description" sortable={false} />
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
            {PermissionsStore.getResourcePermission('permissions', 'edit') ? <EditButton /> : null}
            <ShowButton />
            {PermissionsStore.getResourcePermission('permissions', 'remove') ? (
                <DeleteButton />
            ) : null}
        </EditableDatagrid>
    </List>
);

export const PermissionCreate = props => (
    <Create {...props} title="Permission Create">
        <SimpleForm validate={validationCreatePermission}>
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
        <SimpleForm validate={validationEditPermission}>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
