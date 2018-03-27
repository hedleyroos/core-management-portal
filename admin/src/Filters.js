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

export const DomainFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
    </Filter>
);

export const DomainRoleFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Number label="Domain Id" source="domain_id" />
        <Number label="Role Id" source="role_id" />
    </Filter>
);

export const InvitationFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Text label="Invitor Id" source="invitor_id" />
    </Filter>
);

export const InvitationDomainRoleFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Text label="Invitation Id" source="invitation_id" />
        <Number label="Domain Id" source="domain_id" />
        <Number label="Role Id" source="role_id" />
    </Filter>
);

export const InvitationSiteRoleFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Text label="Invitation Id" source="invitation_id" />
        <Number label="Site Id" source="site_id" />
        <Number label="Role Id" source="role_id" />
    </Filter>
);

export const PermissionFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
    </Filter>
);

export const ResourceFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Text label="Prefix" source="prefix" />
    </Filter>
);

export const RoleFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
    </Filter>
);

export const RoleResourcePermissionFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Number label="Role Id" source="role_id" />
        <Number label="Resource Id" source="resource_id" />
        <Number label="Permission Id" source="permission_id" />
    </Filter>
);

export const SiteFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
    </Filter>
);

export const SiteRoleFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Number label="Site Id" source="site_id" />
        <Number label="Role Id" source="role_id" />
    </Filter>
);

export const UserDomainRoleFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Text label="User Id" source="user_id" />
        <Number label="Domain Id" source="domain_id" />
        <Number label="Role Id" source="role_id" />
    </Filter>
);

export const UserSiteRoleFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Text label="User Id" source="user_id" />
        <Number label="Site Id" source="site_id" />
        <Number label="Role Id" source="role_id" />
    </Filter>
);

export const UserSiteDataFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Text label="User Id" source="user_id" />
        <Number label="Site Id" source="site_id" />
    </Filter>
);

export const AdminNoteFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Text label="User Id" source="user_id" />
        <Text label="Creator Id" source="creator_id" />
    </Filter>
);

export const SiteDataSchemaFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
    </Filter>
);

export const ClientFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Text label="Client Id" source="client_id" />
    </Filter>
);

export const UserFilter = props => (
    <Filter {...props}>
        <Number label="Offset" source="offset" />
        <Number label="Limit" source="limit" />
        <Text label="Email" source="email" />
        <Text label="Username Prefix" source="username_prefix" />
    </Filter>
);

/** End of Generated Code **/