/**
 * Generated DomainRole.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    Datagrid,
    Show,
    BooleanField,
    List,
    DateField,
    ReferenceField,
    BooleanInput,
    SimpleShowLayout,
    NumberField,
    ReferenceInput,
    SelectInput,
    Create,
    SimpleForm,
    Edit
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';

import DomainRoleListActions from '../customActions/DomainRoleListActions';
import DomainRoleShowActions from '../customActions/DomainRoleShowActions';
import DomainRoleEditActions from '../customActions/DomainRoleEditActions';

import DomainRoleFilter from '../filters/DomainRoleFilter';

const validationCreateDomainRole = values => {
    const errors = {};
    if (!values.domain_id) {
        errors.domain_id = ['domain_id is required'];
    }
    if (!values.role_id) {
        errors.role_id = ['role_id is required'];
    }
    return errors;
};

const validationEditDomainRole = values => {
    const errors = {};
    return errors;
};

export const DomainRoleList = props => (
    <List
        {...props}
        title="DomainRole List"
        actions={<DomainRoleListActions />}
        filters={<DomainRoleFilter />}
    >
        <Datagrid>
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
            <BooleanField source="grant_implicitly" sortable={false} />
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
        </Datagrid>
    </List>
);

export const DomainRoleCreate = props => (
    <Create {...props} title="DomainRole Create">
        <SimpleForm validate={validationCreateDomainRole} redirect="show">
            {PermissionsStore.getResourcePermission('domains', 'list') && (
                <ReferenceInput
                    label="Domain"
                    source="domain_id"
                    reference="domains"
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
            <BooleanInput source="grant_implicitly" />
        </SimpleForm>
    </Create>
);

export const DomainRoleShow = props => (
    <Show {...props} title="DomainRole Show" actions={<DomainRoleShowActions />}>
        <SimpleShowLayout>
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
            <BooleanField source="grant_implicitly" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const DomainRoleEdit = props => (
    <Edit {...props} title="DomainRole Edit" actions={<DomainRoleEditActions />}>
        <SimpleForm validate={validationEditDomainRole}>
            <BooleanInput source="grant_implicitly" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
