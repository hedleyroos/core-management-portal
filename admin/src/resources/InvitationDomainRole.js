/**
 * Generated InvitationDomainRole.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    List,
    Datagrid,
    ReferenceField,
    TextField,
    NumberField,
    DateField,
    SimpleForm,
    Create,
    ReferenceInput,
    SelectInput,
    Show,
    SimpleShowLayout,
    DeleteButton,
    ShowButton
} from 'admin-on-rest';
import PermissionsStore from '../auth/PermissionsStore';
import EmptyField from '../fields/EmptyField';
import InvitationDomainRoleFilter from '../filters/InvitationDomainRoleFilter';
import DomainTreeInput from '../inputs/DomainTreeInput';

const validationCreateInvitationDomainRole = values => {
    const errors = {};
    if (!values.invitation_id) {
        errors.invitation_id = ['invitation_id is required'];
    }
    if (!values.domain_id) {
        errors.domain_id = ['domain_id is required'];
    }
    if (!values.role_id) {
        errors.role_id = ['role_id is required'];
    }
    return errors;
};

export const InvitationDomainRoleList = props => (
    <List {...props} title="InvitationDomainRole List" filters={<InvitationDomainRoleFilter />}>
        <Datagrid bodyOptions={{ showRowHover: true }}>
            {PermissionsStore.getResourcePermission('invitations', 'list') ? (
                <ReferenceField
                    label="Invitation"
                    source="invitation_id"
                    reference="invitations"
                    linkType="show"
                    allowEmpty
                >
                    <TextField source="email" />
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
            <ShowButton />
            {PermissionsStore.getResourcePermission('invitationdomainroles', 'remove') ? (
                <DeleteButton />
            ) : null}
        </Datagrid>
    </List>
);

export const InvitationDomainRoleCreate = props => (
    <Create {...props} title="InvitationDomainRole Create">
        <SimpleForm validate={validationCreateInvitationDomainRole}>
            {PermissionsStore.getResourcePermission('invitations', 'list') && (
                <ReferenceInput
                    label="Invitation"
                    source="invitation_id"
                    reference="invitations"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="email" />
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

export const InvitationDomainRoleShow = props => (
    <Show {...props} title="InvitationDomainRole Show">
        <SimpleShowLayout>
            {PermissionsStore.getResourcePermission('invitations', 'list') ? (
                <ReferenceField
                    label="Invitation"
                    source="invitation_id"
                    reference="invitations"
                    linkType="show"
                    allowEmpty
                >
                    <TextField source="email" />
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
