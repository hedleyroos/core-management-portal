/**
 * Generated Role.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    Datagrid,
    Show,
    BooleanField,
    List,
    TextField,
    DateField,
    TextInput,
    ReferenceManyField,
    BooleanInput,
    SimpleShowLayout,
    NumberField,
    Create,
    SimpleForm,
    Edit,
    Responsive
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';

import RoleListActions from '../customActions/RoleListActions';
import RoleShowActions from '../customActions/RoleShowActions';
import RoleEditActions from '../customActions/RoleEditActions';

import RoleFilter from '../filters/RoleFilter';

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
    <List {...props} title="Role List" actions={<RoleListActions />} filters={<RoleFilter />}>
        <Responsive
            small={<SimpleList primaryText={record => `Label: ${record.label}`} />}
            medium={
                <Datagrid>
                    <NumberField source="id" sortable={false} />
                    <TextField source="label" sortable={false} />
                    <BooleanField source="requires_2fa" sortable={false} />
                    <TextField source="description" sortable={false} />
                    <DateField source="created_at" sortable={false} />
                    <DateField source="updated_at" sortable={false} />
                </Datagrid>
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
    <Show {...props} title="Role Show" actions={<RoleShowActions />}>
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
                    <Datagrid bodyOptions={{ showRowHover: true }}>
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
    <Edit {...props} title="Role Edit" actions={<RoleEditActions />}>
        <SimpleForm validate={validationEditRole}>
            <TextInput source="label" />
            <BooleanInput source="requires_2fa" />
            <TextInput source="description" />
            {PermissionsStore.getResourcePermission('roleresourcepermissions', 'list') ? (
                <ReferenceManyField
                    label="Resource Permissions"
                    reference="roleresourcepermissions"
                    target="role_id"
                >
                    <Datagrid bodyOptions={{ showRowHover: true }}>
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
