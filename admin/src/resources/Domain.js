/**
 * Generated Domain.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    SelectInput,
    DateField,
    ReferenceField,
    Edit,
    TextField,
    List,
    Responsive,
    Datagrid,
    Create,
    SimpleList,
    SimpleShowLayout,
    Show,
    NumberField,
    TextInput,
    SimpleForm,
    ReferenceInput,
    ReferenceManyField,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';

import DomainEditToolbar from '../customActions/DomainEditToolbar';

import DomainFilter from '../filters/DomainFilter';

const validationCreateDomain = values => {
    const errors = {};
    if (!values.name) {
        errors.name = ['name is required'];
    }
    return errors;
};

const validationEditDomain = values => {
    const errors = {};
    return errors;
};

export const DomainList = props => (
    <List {...props} title="Domain List" filters={<DomainFilter />} bulkActionButtons={false}>
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
                    {PermissionsStore.getResourcePermission('domains', 'list') ? (
                        <ReferenceField
                            label="Parent"
                            source="parent_id"
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

export const DomainCreate = props => (
    <Create {...props} title="Domain Create">
        <SimpleForm validate={validationCreateDomain} redirect="show">
            {PermissionsStore.getResourcePermission('domains', 'list') && (
                <ReferenceInput
                    label="Parent"
                    source="parent_id"
                    reference="domains"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="name" />
                </ReferenceInput>
            )}
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const DomainShow = props => (
    <Show {...props} title="Domain Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            {PermissionsStore.getResourcePermission('domains', 'list') ? (
                <ReferenceField
                    label="Parent"
                    source="parent_id"
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
            <DateField source="created_at" />
            <DateField source="updated_at" />
            {PermissionsStore.getResourcePermission('domains', 'list') ? (
                <ReferenceManyField label="Child Domains" reference="domains" target="parent_id">
                    <Datagrid bodyOptions={{ showRowHover: true }}>
                        <NumberField source="id" />
                        <TextField source="name" />
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('domainroles', 'list') ? (
                <ReferenceManyField label="Roles" reference="domainroles" target="domain_id">
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

export const DomainEdit = props => (
    <Edit {...props} title="Domain Edit">
        <SimpleForm validate={validationEditDomain} toolbar={<DomainEditToolbar />}>
            {PermissionsStore.getResourcePermission('domains', 'list') && (
                <ReferenceInput
                    label="Domain"
                    source="parent_id"
                    reference="domains"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="name" />
                </ReferenceInput>
            )}
            <TextInput source="name" />
            <TextInput source="description" />
            {PermissionsStore.getResourcePermission('domains', 'list') ? (
                <ReferenceManyField label="Child Domains" reference="domains" target="parent_id">
                    <Datagrid bodyOptions={{ showRowHover: true }}>
                        <NumberField source="id" />
                        <TextField source="name" />
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : null}
            {PermissionsStore.getResourcePermission('domainroles', 'list') ? (
                <ReferenceManyField label="Roles" reference="domainroles" target="domain_id">
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
