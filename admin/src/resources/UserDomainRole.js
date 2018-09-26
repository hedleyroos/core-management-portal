/**
 * Generated UserDomainRole.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    Show,
    SelectInput,
    NumberField,
    TextField,
    Create,
    DateField,
    ReferenceInput,
    Datagrid,
    ReferenceField,
    List,
    SimpleForm,
    SimpleShowLayout,
    ShowButton,
    DeleteButton
} from 'react-admin';
import PermissionsStore from '../auth/PermissionsStore';
import EmptyField from '../fields/EmptyField';

import UserDomainRoleFilter from '../filters/UserDomainRoleFilter';

import DomainTreeInput from '../inputs/DomainTreeInput';
import UnlimitedDropdownInput from '../inputs/UnlimitedDropdownInput';

const validationCreateUserDomainRole = values => {
    const errors = {};
    if (!values.user_id) {
        errors.user_id = ['user_id is required'];
    }
    if (!values.domain_id) {
        errors.domain_id = ['domain_id is required'];
    }
    if (!values.role_id) {
        errors.role_id = ['role_id is required'];
    }
    return errors;
};

export const UserDomainRoleList = props => (
    <List
        {...props}
        title="UserDomainRole List"
        filters={<UserDomainRoleFilter />}
        bulkActionButtons={false}
    >
        <Datagrid>
            {PermissionsStore.getResourcePermission('users', 'list') ? (
                <UnlimitedDropdownInput
                    label="User"
                    source="user_id"
                    reference="users"
                    optionText="username"
                    filter={{ site_ids: '' }}
                />
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('domains', 'list') ? (
                <ReferenceField
                    label="Domain"
                    source="domain_id"
                    reference="domains"
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

export const UserDomainRoleCreate = props => (
    <Create {...props} title="UserDomainRole Create">
        <SimpleForm validate={validationCreateUserDomainRole} redirect="show">
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
            {PermissionsStore.getResourcePermission('domains', 'list') && (
                <DomainTreeInput label="Domain" source="domain_id" />
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

export const UserDomainRoleShow = props => (
    <Show {...props} title="UserDomainRole Show">
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
            {PermissionsStore.getResourcePermission('domains', 'list') ? (
                <ReferenceField
                    label="Domain"
                    source="domain_id"
                    reference="domains"
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
