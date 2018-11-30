/**
 * Generated Site.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    SimpleList,
    SimpleForm,
    Create,
    ReferenceInput,
    ReferenceManyField,
    TextField,
    BooleanField,
    SelectInput,
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
    LongTextInput,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';
import ObjectField from '../fields/ObjectField';

import SiteEditToolbar from '../customActions/SiteEditToolbar';
import SiteListActions from '../customActions/SiteListActions';

import SiteFilter from '../filters/SiteFilter';
import InlineTable from '../fields/InlineTable';

import FieldSelectDatagrid from '../grids/FieldSelectDatagrid';

const validationCreateSite = values => {
    const errors = {};
    if (!values.name) {
        errors.name = ['name is required'];
    }
    if (!values.domain_id) {
        errors.domain_id = ['domain_id is required'];
    }
    if (values.deletion_method_id === null) {
        errors.deletion_method_id = ['deletion_method_id is required'];
    }
    if (!values.deletion_method_data) {
        errors.deletion_method_data = ['deletion_method_data is required'];
    }
    return errors;
};

const validationEditSite = values => {
    const errors = {};
    return errors;
};

export const SiteList = props => (
    <List
        {...props}
        title="Site List"
        filters={<SiteFilter />}
        actions={<SiteListActions />}
        bulkActionButtons={false}
    >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => `Name: ${record.name}`}
                    secondaryText={record => `Description: ${record.description}`}
                />
            }
            medium={
                <FieldSelectDatagrid>
                    <NumberField source="id" sortable={false} />
                    <TextField source="name" sortable={false} />
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
                    <TextField source="description" sortable={false} />
                    <BooleanField source="is_active" sortable={false} />
                    {PermissionsStore.getResourcePermission('deletionmethods', 'list') ? (
                        <ReferenceField
                            label="Deletion Method"
                            source="deletion_method_id"
                            reference="deletionmethods"
                            sortable={false}
                            linkType="show"
                        >
                            <NumberField source="label" />
                        </ReferenceField>
                    ) : (
                        <EmptyField />
                    )}
                    <ObjectField source="deletion_method_data" sortable={false} addLabel />
                    <DateField source="created_at" sortable={false} />
                    <DateField source="updated_at" sortable={false} />
                    {PermissionsStore.getResourcePermission('sites', 'edit') ? (
                        <EditButton />
                    ) : null}
                    <ShowButton />
                    {PermissionsStore.getResourcePermission('sites', 'remove') ? (
                        <DeleteButton />
                    ) : null}
                </FieldSelectDatagrid>
            }
        />
    </List>
);

export const SiteCreate = props => (
    <Create {...props} title="Site Create">
        <SimpleForm validate={validationCreateSite} redirect="show">
            <TextInput source="name" />
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
            <TextInput source="description" />
            <BooleanInput source="is_active" />
            {PermissionsStore.getResourcePermission('deletionmethods', 'list') && (
                <ReferenceInput
                    label="Deletion Method"
                    source="deletion_method_id"
                    reference="deletionmethods"
                    perPage={0}
                >
                    <SelectInput optionText="label" />
                </ReferenceInput>
            )}
            <LongTextInput
                source="deletion_method_data"
                format={value => (value instanceof Object ? JSON.stringify(value) : value)}
                parse={value => {
                    try {
                        return JSON.parse(value);
                    } catch (e) {
                        return value;
                    }
                }}
            />
        </SimpleForm>
    </Create>
);

export const SiteShow = props => (
    <Show {...props} title="Site Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="name" />
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
            <TextField source="description" />
            <BooleanField source="is_active" />
            {PermissionsStore.getResourcePermission('deletionmethods', 'list') ? (
                <ReferenceField
                    label="Deletion Method"
                    source="deletion_method_id"
                    reference="deletionmethods"
                    linkType="show"
                >
                    <NumberField source="label" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <ObjectField source="deletion_method_data" addLabel />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <InlineTable
                label="Users"
                url="users_with_roles_for_site"
                linkField="username"
                linkedResource="users"
                paginate
            />
            {PermissionsStore.getResourcePermission('siteroles', 'list') ? (
                <ReferenceManyField label="Roles" reference="siteroles" target="site_id">
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
                        <DateField source="created_at" sortable={false} />
                        <DateField source="updated_at" sortable={false} />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
        </SimpleShowLayout>
    </Show>
);

export const SiteEdit = props => (
    <Edit {...props} title="Site Edit">
        <SimpleForm validate={validationEditSite} toolbar={<SiteEditToolbar />}>
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
            {PermissionsStore.getResourcePermission('deletionmethods', 'list') && (
                <ReferenceInput
                    label="Deletion Method"
                    source="deletion_method_id"
                    reference="deletionmethods"
                    perPage={0}
                >
                    <SelectInput optionText="label" />
                </ReferenceInput>
            )}
            <LongTextInput
                source="deletion_method_data"
                format={value => (value instanceof Object ? JSON.stringify(value) : value)}
                parse={value => {
                    try {
                        return JSON.parse(value);
                    } catch (e) {
                        return value;
                    }
                }}
            />
            {PermissionsStore.getResourcePermission('siteroles', 'list') ? (
                <ReferenceManyField label="Roles" reference="siteroles" target="site_id">
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
                        <DateField source="created_at" sortable={false} />
                        <DateField source="updated_at" sortable={false} />
                    </Datagrid>
                </ReferenceManyField>
            ) : null}
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
