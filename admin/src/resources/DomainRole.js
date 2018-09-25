/**
 * Generated DomainRole.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    Show,
    Edit,
    SelectInput,
    ReferenceField,
    BooleanInput,
    NumberField,
    Create,
    DateField,
    ReferenceInput,
    Datagrid,
    BooleanField,
    List,
    SimpleForm,
    SimpleShowLayout,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';
import PermissionsStore from '../auth/PermissionsStore';
import EmptyField from '../fields/EmptyField';

import DomainRoleEditActions from '../customActions/DomainRoleEditActions';

import DomainRoleFilter from '../filters/DomainRoleFilter';

import DomainTreeInput from '../inputs/DomainTreeInput';

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
        filters={<DomainRoleFilter />}
        bulkActionButtons={false}
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
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const DomainRoleCreate = props => (
    <Create {...props} title="DomainRole Create">
        <SimpleForm validate={validationCreateDomainRole} redirect="show">
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
            <BooleanInput source="grant_implicitly" />
        </SimpleForm>
    </Create>
);

export const DomainRoleShow = props => (
    <Show {...props} title="DomainRole Show">
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
