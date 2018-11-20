/**
 * Generated Credentials.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    ReferenceInput,
    SimpleShowLayout,
    TextInput,
    DateField,
    NumberField,
    ReferenceField,
    Show,
    Datagrid,
    TextField,
    SelectInput,
    Edit,
    List,
    SimpleForm,
    Create,
    EditButton,
    ShowButton,
    DeleteButton,
    minLength,
    maxLength
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';

import CredentialsEditToolbar from '../customActions/CredentialsEditToolbar';
import CredentialsListActions from '../customActions/CredentialsListActions';

import CredentialsFilter from '../filters/CredentialsFilter';

const validationCreateCredentials = values => {
    const errors = {};
    if (!values.site_id) {
        errors.site_id = ['site_id is required'];
    }
    if (!values.account_id) {
        errors.account_id = ['account_id is required'];
    }
    if (!values.account_secret) {
        errors.account_secret = ['account_secret is required'];
    }
    if (!values.description) {
        errors.description = ['description is required'];
    }
    return errors;
};

const validationEditCredentials = values => {
    const errors = {};
    return errors;
};

export const CredentialsList = props => (
    <List
        {...props}
        title="Credentials List"
        filters={<CredentialsFilter />}
        actions={<CredentialsListActions />}
        bulkActionButtons={false}
    >
        <Datagrid>
            <NumberField source="id" sortable={false} />
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
            <TextField source="account_id" sortable={false} />
            <TextField source="account_secret" sortable={false} />
            <TextField source="description" sortable={false} />
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
            {PermissionsStore.getResourcePermission('credentials', 'edit') ? <EditButton /> : null}
            <ShowButton />
            {PermissionsStore.getResourcePermission('credentials', 'remove') ? (
                <DeleteButton />
            ) : null}
        </Datagrid>
    </List>
);

const lengthValidators = [minLength(32), maxLength(256)]

export const CredentialsCreate = props => (
    <Create {...props} title="Credentials Create">
        <SimpleForm validate={validationCreateCredentials} redirect="show">
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
            <TextInput source="account_id" validate={lengthValidators} />
            <TextInput source="account_secret" validate={lengthValidators} />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const CredentialsShow = props => (
    <Show {...props} title="Credentials Show">
        <SimpleShowLayout>
            <NumberField source="id" />
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
            <TextField source="account_id" />
            <TextField source="account_secret" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const CredentialsEdit = props => (
    <Edit {...props} title="Credentials Edit">
        <SimpleForm validate={validationEditCredentials} toolbar={<CredentialsEditToolbar />}>
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
            <TextInput source="account_id" validate={lengthValidators} />
            <TextInput source="account_secret" validate={lengthValidators} />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
