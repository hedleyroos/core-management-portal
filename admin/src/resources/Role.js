/**
 * Generated Role.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    SimpleList,
    SimpleForm,
    Create,
    ReferenceManyField,
    TextField,
    BooleanField,
    BooleanInput,
    Show,
    List,
    ReferenceField,
    DateField,
    Datagrid,
    Responsive,
    SimpleShowLayout,
    TextInput,
    Edit,
    NumberField,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';

import RoleEditToolbar from '../customActions/RoleEditToolbar';

import RoleFilter from '../filters/RoleFilter';

import FieldSelectDatagrid from '../grids/FieldSelectDatagrid';

const validationCreateRole = values => {
    const errors = {};
    if (!values.label) {
        errors.label = ['label is required'];
    }
    return errors;
};

const validationEditRole = values => {
    const errors = {};
    return errors;
};

export const RoleList = props => (
    <List {...props} title="Role List" filters={<RoleFilter />} bulkActionButtons={false}>
        <Responsive
            small={<SimpleList primaryText={record => `Label: ${record.label}`} />}
            medium={
                <FieldSelectDatagrid>
                    <NumberField source="id" sortable={false} />
                    <TextField source="label" sortable={false} />
                    <BooleanField source="requires_2fa" sortable={false} />
                    <TextField source="description" sortable={false} />
                    <DateField source="created_at" sortable={false} />
                    <DateField source="updated_at" sortable={false} />
                    <EditButton />
                    <ShowButton />
                    <DeleteButton />
                </FieldSelectDatagrid>
            }
        />
    </List>
);

export const RoleCreate = props => (
    <Create {...props} title="Role Create">
        <SimpleForm validate={validationCreateRole} redirect="show">
            <TextInput source="label" />
            <BooleanInput source="requires_2fa" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const RoleShow = props => (
    <Show {...props} title="Role Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="label" />
            <BooleanField source="requires_2fa" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            {PermissionsStore.getResourcePermission('roleresourcepermissions', 'list') ? (
                <ReferenceManyField
                    label="Resource Permissions"
                    reference="roleresourcepermissions"
                    target="role_id"
                >
                    <Datagrid>
                        {PermissionsStore.getResourcePermission('resources', 'list') ? (
                            <ReferenceField
                                label="Resource"
                                source="resource_id"
                                reference="resources"
                                linkType="show"
                                allowEmpty
                            >
                                <NumberField source="urn" />
                            </ReferenceField>
                        ) : (
                            <EmptyField />
                        )}
                        {PermissionsStore.getResourcePermission('permissions', 'list') ? (
                            <ReferenceField
                                label="Permission"
                                source="permission_id"
                                reference="permissions"
                                linkType="show"
                                allowEmpty
                            >
                                <NumberField source="name" />
                            </ReferenceField>
                        ) : (
                            <EmptyField />
                        )}
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
        </SimpleShowLayout>
    </Show>
);

export const RoleEdit = props => (
    <Edit {...props} title="Role Edit">
        <SimpleForm validate={validationEditRole} toolbar={<RoleEditToolbar />}>
            <TextInput source="label" />
            <BooleanInput source="requires_2fa" />
            <TextInput source="description" />
            {PermissionsStore.getResourcePermission('roleresourcepermissions', 'list') ? (
                <ReferenceManyField
                    label="Resource Permissions"
                    reference="roleresourcepermissions"
                    target="role_id"
                >
                    <Datagrid>
                        {PermissionsStore.getResourcePermission('resources', 'list') ? (
                            <ReferenceField
                                label="Resource"
                                source="resource_id"
                                reference="resources"
                                linkType="show"
                                allowEmpty
                            >
                                <NumberField source="urn" />
                            </ReferenceField>
                        ) : (
                            <EmptyField />
                        )}
                        {PermissionsStore.getResourcePermission('permissions', 'list') ? (
                            <ReferenceField
                                label="Permission"
                                source="permission_id"
                                reference="permissions"
                                linkType="show"
                                allowEmpty
                            >
                                <NumberField source="name" />
                            </ReferenceField>
                        ) : (
                            <EmptyField />
                        )}
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : null}
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
