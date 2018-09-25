/**
 * Generated UserSiteRole.js code. Edit at own risk.
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
    TextField,
    SimpleForm,
    List,
    ReferenceInput,
    ShowButton,
    DeleteButton
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';

import UserSiteRoleFilter from '../filters/UserSiteRoleFilter';

const validationCreateUserSiteRole = values => {
    const errors = {};
    if (!values.user_id) {
        errors.user_id = ['user_id is required'];
    }
    if (!values.site_id) {
        errors.site_id = ['site_id is required'];
    }
    if (!values.role_id) {
        errors.role_id = ['role_id is required'];
    }
    return errors;
};

export const UserSiteRoleList = props => (
    <List
        {...props}
        title="UserSiteRole List"
        filters={<UserSiteRoleFilter />}
        bulkActionButtons={false}
    >
        <Datagrid>
            {PermissionsStore.getResourcePermission('users', 'list') ? (
                <ReferenceField
                    label="User"
                    source="user_id"
                    reference="users"
                    sortable={false}
                    linkType="show"
                    allowEmpty
                >
                    <TextField source="username" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('sites', 'list') ? (
                <ReferenceField
                    label="Site"
                    source="site_id"
                    reference="sites"
                    sortable={false}
                    linkType="show"
                    allowEmpty
                >
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
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
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const UserSiteRoleCreate = props => (
    <Create {...props} title="UserSiteRole Create">
        <SimpleForm validate={validationCreateUserSiteRole} redirect="show">
            {PermissionsStore.getResourcePermission('users', 'list') && (
                <ReferenceInput
                    label="User"
                    source="user_id"
                    reference="users"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="username" />
                </ReferenceInput>
            )}
            {PermissionsStore.getResourcePermission('sites', 'list') && (
                <ReferenceInput
                    label="Site"
                    source="site_id"
                    reference="sites"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="name" />
                </ReferenceInput>
            )}
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
        </SimpleForm>
    </Create>
);

export const UserSiteRoleShow = props => (
    <Show {...props} title="UserSiteRole Show">
        <SimpleShowLayout>
            {PermissionsStore.getResourcePermission('users', 'list') ? (
                <ReferenceField
                    label="User"
                    source="user_id"
                    reference="users"
                    linkType="show"
                    allowEmpty
                >
                    <TextField source="username" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('sites', 'list') ? (
                <ReferenceField
                    label="Site"
                    source="site_id"
                    reference="sites"
                    linkType="show"
                    allowEmpty
                >
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
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
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

/** End of Generated Code **/
