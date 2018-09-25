/**
 * Generated RoleResourcePermission.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    SelectInput,
    DateField,
    Datagrid,
    ReferenceField,
    Create,
    SimpleShowLayout,
    Show,
    NumberField,
    SimpleForm,
    List,
    ReferenceInput,
    ShowButton,
    DeleteButton
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';

import RoleResourcePermissionFilter from '../filters/RoleResourcePermissionFilter';

const validationCreateRoleResourcePermission = values => {
    const errors = {};
    if (!values.role_id) {
        errors.role_id = ['role_id is required'];
    }
    if (!values.resource_id) {
        errors.resource_id = ['resource_id is required'];
    }
    if (!values.permission_id) {
        errors.permission_id = ['permission_id is required'];
    }
    return errors;
};

export const RoleResourcePermissionList = props => (
    <List
        {...props}
        title="RoleResourcePermission List"
        filters={<RoleResourcePermissionFilter />}
        bulkActionButtons={false}
    >
        <Datagrid>
            {PermissionsStore.getResourcePermission('roles', 'list') ? (
                <ReferenceField
                    label="Role"
                    source="role_id"
                    reference="roles"
                    sortable={false}
                    linkType="show"
                    allowEmpty
                >
                    <NumberField source="label" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('resources', 'list') ? (
                <ReferenceField
                    label="Resource"
                    source="resource_id"
                    reference="resources"
                    sortable={false}
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
                    sortable={false}
                    linkType="show"
                    allowEmpty
                >
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RoleResourcePermissionCreate = props => (
    <Create {...props} title="RoleResourcePermission Create">
        <SimpleForm validate={validationCreateRoleResourcePermission} redirect="show">
            {PermissionsStore.getResourcePermission('roles', 'list') && (
                <ReferenceInput
                    label="Role"
                    source="role_id"
                    reference="roles"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="label" />
                </ReferenceInput>
            )}
            {PermissionsStore.getResourcePermission('resources', 'list') && (
                <ReferenceInput
                    label="Resource"
                    source="resource_id"
                    reference="resources"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="urn" />
                </ReferenceInput>
            )}
            {PermissionsStore.getResourcePermission('permissions', 'list') && (
                <ReferenceInput
                    label="Permission"
                    source="permission_id"
                    reference="permissions"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="name" />
                </ReferenceInput>
            )}
        </SimpleForm>
    </Create>
);

export const RoleResourcePermissionShow = props => (
    <Show {...props} title="RoleResourcePermission Show">
        <SimpleShowLayout>
            {PermissionsStore.getResourcePermission('roles', 'list') ? (
                <ReferenceField
                    label="Role"
                    source="role_id"
                    reference="roles"
                    linkType="show"
                    allowEmpty
                >
                    <NumberField source="label" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
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
        </SimpleShowLayout>
    </Show>
);

/** End of Generated Code **/
