/**
 * Generated Site.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    Show,
    BooleanField,
    List,
    TextField,
    DateField,
    TextInput,
    ReferenceManyField,
    Create,
    Edit,
    Responsive,
    Datagrid,
    ReferenceField,
    BooleanInput,
    SimpleShowLayout,
    NumberField,
    ReferenceInput,
    SelectInput,
    SimpleForm
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';

import SiteListActions from '../customActions/SiteListActions';
import SiteShowActions from '../customActions/SiteShowActions';
import SiteEditActions from '../customActions/SiteEditActions';

import SiteFilter from '../filters/SiteFilter';

const validationCreateSite = values => {
    const errors = {};
    if (!values.domain_id) {
        errors.domain_id = ['domain_id is required'];
    }
    if (!values.name) {
        errors.name = ['name is required'];
    }
    return errors;
};

const validationEditSite = values => {
    const errors = {};
    return errors;
};

export const SiteList = props => (
    <List {...props} title="Site List" actions={<SiteListActions />} filters={<SiteFilter />}>
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
                    {PermissionsStore.getResourcePermission('clients', 'list') ? (
                        <ReferenceField
                            label="Client"
                            source="client_id"
                            reference="clients"
                            sortable={false}
                            linkType="show"
                            allowEmpty
                        >
                            <NumberField source="name" />
                        </ReferenceField>
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
                    <TextField source="name" sortable={false} />
                    <TextField source="description" sortable={false} />
                    <BooleanField source="is_active" sortable={false} />
                    <DateField source="created_at" sortable={false} />
                    <DateField source="updated_at" sortable={false} />
                </Datagrid>
            }
        />
    </List>
);

export const SiteCreate = props => (
    <Create {...props} title="Site Create">
        <SimpleForm validate={validationCreateSite} redirect="show">
            {PermissionsStore.getResourcePermission('clients', 'list') && (
                <ReferenceInput
                    label="Client"
                    source="client_id"
                    reference="clients"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="name" />
                </ReferenceInput>
            )}
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
            <TextInput source="name" />
            <BooleanInput source="is_active" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const SiteShow = props => (
    <Show {...props} title="Site Show" actions={<SiteShowActions />}>
        <SimpleShowLayout>
            <NumberField source="id" />
            {PermissionsStore.getResourcePermission('clients', 'list') ? (
                <ReferenceField
                    label="Client"
                    source="client_id"
                    reference="clients"
                    linkType="show"
                    allowEmpty
                >
                    <NumberField source="name" />
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
            <TextField source="name" />
            <TextField source="description" />
            <BooleanField source="is_active" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            {PermissionsStore.getResourcePermission('siteroles', 'list') ? (
                <ReferenceManyField label="Roles" reference="siteroles" target="site_id">
                    <Datagrid bodyOptions={{ showRowHover: true }}>
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
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
        </SimpleShowLayout>
    </Show>
);

export const SiteEdit = props => (
    <Edit {...props} title="Site Edit" actions={<SiteEditActions />}>
        <SimpleForm validate={validationEditSite}>
            {PermissionsStore.getResourcePermission('clients', 'list') && (
                <ReferenceInput
                    label="Client"
                    source="client_id"
                    reference="clients"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="name" />
                </ReferenceInput>
            )}
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
            <TextInput source="name" />
            <TextInput source="description" />
            <BooleanInput source="is_active" />
            {PermissionsStore.getResourcePermission('siteroles', 'list') ? (
                <ReferenceManyField label="Roles" reference="siteroles" target="site_id">
                    <Datagrid bodyOptions={{ showRowHover: true }}>
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
                    </Datagrid>
                </ReferenceManyField>
            ) : null}
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
