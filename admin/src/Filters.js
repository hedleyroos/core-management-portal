/** 
 * Generated Filters.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    Filter,
    TextInput,
    NumberInput,
    BooleanInput
} from 'admin-on-rest';

export const DomainRoleFilter = props => (
    <Filter {...props}>
        <NumberInput label="Domain Id" source="domain_id" />
        <NumberInput label="Role Id" source="role_id" />
    </Filter>
);

export const InvitationFilter = props => (
    <Filter {...props}>
        <TextInput label="Invitor Id" source="invitor_id" />
    </Filter>
);

export const InvitationDomainRoleFilter = props => (
    <Filter {...props}>
        <TextInput label="Invitation Id" source="invitation_id" />
        <NumberInput label="Domain Id" source="domain_id" />
        <NumberInput label="Role Id" source="role_id" />
    </Filter>
);

export const InvitationSiteRoleFilter = props => (
    <Filter {...props}>
        <TextInput label="Invitation Id" source="invitation_id" />
        <NumberInput label="Site Id" source="site_id" />
        <NumberInput label="Role Id" source="role_id" />
    </Filter>
);

export const ResourceFilter = props => (
    <Filter {...props}>
        <TextInput label="Prefix" source="prefix" />
    </Filter>
);

export const RoleResourcePermissionFilter = props => (
    <Filter {...props}>
        <NumberInput label="Role Id" source="role_id" />
        <NumberInput label="Resource Id" source="resource_id" />
        <NumberInput label="Permission Id" source="permission_id" />
    </Filter>
);

export const SiteRoleFilter = props => (
    <Filter {...props}>
        <NumberInput label="Site Id" source="site_id" />
        <NumberInput label="Role Id" source="role_id" />
    </Filter>
);

export const UserDomainRoleFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <NumberInput label="Domain Id" source="domain_id" />
        <NumberInput label="Role Id" source="role_id" />
    </Filter>
);

export const UserSiteRoleFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <NumberInput label="Site Id" source="site_id" />
        <NumberInput label="Role Id" source="role_id" />
    </Filter>
);

export const UserSiteDataFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <NumberInput label="Site Id" source="site_id" />
    </Filter>
);

export const AdminNoteFilter = props => (
    <Filter {...props}>
        <TextInput label="User Id" source="user_id" />
        <TextInput label="Creator Id" source="creator_id" />
    </Filter>
);

export const ClientFilter = props => (
    <Filter {...props}>
        <TextInput label="Client Token Id" source="client_token_id" />
    </Filter>
);

export const UserFilter = props => (
    <Filter {...props}>
        <TextInput label="Email" source="email" />
        <TextInput label="Username Prefix" source="username_prefix" />
    </Filter>
);

/** End of Generated Code **/