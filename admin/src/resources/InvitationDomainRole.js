/**
 * Generated InvitationDomainRole.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    Datagrid,
    Show,
    List,
    TextField,
    DateField,
    ReferenceField,
    SimpleShowLayout,
    NumberField,
    ReferenceInput,
    SelectInput,
    Create,
    SimpleForm
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';

import InvitationDomainRoleListActions from '../customActions/InvitationDomainRoleListActions';
import InvitationDomainRoleShowActions from '../customActions/InvitationDomainRoleShowActions';

import InvitationDomainRoleFilter from '../filters/InvitationDomainRoleFilter';

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
    <List
        {...props}
        title="InvitationDomainRole List"
        actions={<InvitationDomainRoleListActions />}
        filters={<InvitationDomainRoleFilter />}
    >
        <Datagrid>
            {PermissionsStore.getResourcePermission('invitations', 'list') ? (
                <ReferenceField
                    label="Invitation"
                    source="invitation_id"
                    reference="invitations"
                    sortable={false}
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
        </Datagrid>
    </List>
);

export const InvitationDomainRoleCreate = props => (
    <Create {...props} title="InvitationDomainRole Create">
        <SimpleForm validate={validationCreateInvitationDomainRole} redirect="show">
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
        </SimpleForm>
    </Create>
);

export const InvitationDomainRoleShow = props => (
    <Show
        {...props}
        title="InvitationDomainRole Show"
        actions={<InvitationDomainRoleShowActions />}
    >
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
