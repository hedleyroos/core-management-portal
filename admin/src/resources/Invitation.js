/**
 * Generated Invitation.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    NumberField,
    DateField,
    SimpleForm,
    Create,
    TextInput,
    ReferenceInput,
    SelectInput,
    Show,
    SimpleShowLayout,
    ReferenceManyField,
    Edit,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';
import PermissionsStore from '../auth/PermissionsStore';
import EmptyField from '../fields/EmptyField';
import DateTimeInput from 'aor-datetime-input';
import InvitationFilter from '../filters/InvitationFilter';
import InvitationShowActions from '../customActions/Invitation';

const timezoneOffset = new Date().getTimezoneOffset();

const dateTimeFormatter = value => {
    // Value received is a date object in the DateTimeInput.
    if (timezoneOffset !== 0 && value) {
        value = new Date(value);
        value = new Date(value.valueOf() + timezoneOffset * 60000);
    }
    return value;
};

const dateTimeParser = value => {
    // Value received is a date object in the DateTimeInput.
    if (timezoneOffset !== 0 && value) {
        value = new Date(value.valueOf() - timezoneOffset * 60000);
    }
    return value;
};

const validationCreateInvitation = values => {
    const errors = {};
    if (!values.first_name) {
        errors.first_name = ['first_name is required'];
    }
    if (!values.last_name) {
        errors.last_name = ['last_name is required'];
    }
    if (!values.email) {
        errors.email = ['email is required'];
    }
    if (!values.organisation_id) {
        errors.organisation_id = ['organisation_id is required'];
    }
    return errors;
};

const validationEditInvitation = values => {
    const errors = {};
    return errors;
};

export const InvitationList = props => (
    <List {...props} title="Invitation List" filters={<InvitationFilter />}>
        <Datagrid bodyOptions={{ showRowHover: true }}>
            <TextField source="id" />
            {PermissionsStore.getResourcePermission('users', 'list') ? (
                <ReferenceField
                    label="User"
                    source="invitor_id"
                    reference="users"
                    linkType="show"
                    allowEmpty
                >
                    <TextField source="username" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="email" />
            {PermissionsStore.getResourcePermission('organisations', 'list') ? (
                <ReferenceField
                    label="Organisation"
                    source="organisation_id"
                    reference="organisations"
                    linkType="show"
                    allowEmpty
                >
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <DateField source="expires_at" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            {PermissionsStore.getResourcePermission('invitations', 'edit') ? <EditButton /> : null}
            <ShowButton />
            {PermissionsStore.getResourcePermission('invitations', 'remove') ? (
                <DeleteButton />
            ) : null}
        </Datagrid>
    </List>
);

export const InvitationCreate = props => (
    <Create {...props} title="Invitation Create">
        <SimpleForm validate={validationCreateInvitation}>
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="email" />
            <ReferenceInput
                label="Organisation"
                source="organisation_id"
                reference="organisations"
                perPage={0}
                allowEmpty
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateTimeInput source="expires_at" format={dateTimeFormatter} parse={dateTimeParser} />
        </SimpleForm>
    </Create>
);

export const InvitationShow = props => (
    <Show {...props} actions={<InvitationShowActions />} title="Invitation Show">
        <SimpleShowLayout>
            <TextField source="id" />
            {PermissionsStore.getResourcePermission('users', 'list') ? (
                <ReferenceField
                    label="User"
                    source="invitor_id"
                    reference="users"
                    linkType="show"
                    allowEmpty
                >
                    <TextField source="username" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="email" />
            {PermissionsStore.getResourcePermission('organisations', 'list') ? (
                <ReferenceField
                    label="Organisation"
                    source="organisation_id"
                    reference="organisations"
                    linkType="show"
                    allowEmpty
                >
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <DateField source="expires_at" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            {PermissionsStore.getResourcePermission('invitationdomainroles', 'list') ? (
                <ReferenceManyField
                    label="Domain Roles"
                    reference="invitationdomainroles"
                    target="invitation_id"
                >
                    <Datagrid bodyOptions={{ showRowHover: true }}>
                        <ReferenceField
                            label="Domain"
                            source="domain_id"
                            reference="domains"
                            linkType="show"
                            allowEmpty
                        >
                            <NumberField source="name" />
                        </ReferenceField>
                        <ReferenceField
                            label="Role"
                            source="role_id"
                            reference="roles"
                            linkType="show"
                            allowEmpty
                        >
                            <NumberField source="label" />
                        </ReferenceField>
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('invitationsiteroles', 'list') ? (
                <ReferenceManyField
                    label="Site Roles"
                    reference="invitationsiteroles"
                    target="invitation_id"
                >
                    <Datagrid bodyOptions={{ showRowHover: true }}>
                        <ReferenceField
                            label="Site"
                            source="site_id"
                            reference="sites"
                            linkType="show"
                            allowEmpty
                        >
                            <NumberField source="name" />
                        </ReferenceField>
                        <ReferenceField
                            label="Role"
                            source="role_id"
                            reference="roles"
                            linkType="show"
                            allowEmpty
                        >
                            <NumberField source="label" />
                        </ReferenceField>
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

export const InvitationEdit = props => (
    <Edit {...props} title="Invitation Edit">
        <SimpleForm validate={validationEditInvitation}>
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="email" />
            <ReferenceInput
                label="Organisation"
                source="organisation_id"
                reference="organisations"
                perPage={0}
                allowEmpty
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateTimeInput source="expires_at" format={dateTimeFormatter} parse={dateTimeParser} />
            {PermissionsStore.getResourcePermission('invitationdomainroles', 'list') ? (
                <ReferenceManyField
                    label="Domain Roles"
                    reference="invitationdomainroles"
                    target="invitation_id"
                >
                    <Datagrid bodyOptions={{ showRowHover: true }}>
                        <ReferenceField
                            label="Domain"
                            source="domain_id"
                            reference="domains"
                            linkType="show"
                            allowEmpty
                        >
                            <NumberField source="name" />
                        </ReferenceField>
                        <ReferenceField
                            label="Role"
                            source="role_id"
                            reference="roles"
                            linkType="show"
                            allowEmpty
                        >
                            <NumberField source="label" />
                        </ReferenceField>
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('invitationsiteroles', 'list') ? (
                <ReferenceManyField
                    label="Site Roles"
                    reference="invitationsiteroles"
                    target="invitation_id"
                >
                    <Datagrid bodyOptions={{ showRowHover: true }}>
                        <ReferenceField
                            label="Site"
                            source="site_id"
                            reference="sites"
                            linkType="show"
                            allowEmpty
                        >
                            <NumberField source="name" />
                        </ReferenceField>
                        <ReferenceField
                            label="Role"
                            source="role_id"
                            reference="roles"
                            linkType="show"
                            allowEmpty
                        >
                            <NumberField source="label" />
                        </ReferenceField>
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
