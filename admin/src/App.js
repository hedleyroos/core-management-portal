/**
 * Generated App.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';
import authClient from './auth/authClient';
import AuthLoginPage from './auth/authLogin';
import catchAll from './catchAll';
import customRoutes from './customRoutes';
import Menu from './Menu';
import permissionsStore from './auth/PermissionsStore';
import restClient from './swaggerRestServer';
import { muiTheme } from './Theme';

import {
    DomainList,
    DomainCreate,
    DomainShow,
    DomainEdit,
} from './resources/Domain';

import {
    DomainRoleList,
    DomainRoleCreate,
    DomainRoleShow,
    DomainRoleEdit,
} from './resources/DomainRole';

import {
    InvitationList,
    InvitationCreate,
    InvitationShow,
    InvitationEdit,
} from './resources/Invitation';

import {
    InvitationDomainRoleList,
    InvitationDomainRoleCreate,
    InvitationDomainRoleShow,
} from './resources/InvitationDomainRole';

import {
    InvitationSiteRoleList,
    InvitationSiteRoleCreate,
    InvitationSiteRoleShow,
} from './resources/InvitationSiteRole';

import {
    PermissionList,
    PermissionCreate,
    PermissionShow,
    PermissionEdit,
} from './resources/Permission';

import {
    ResourceList,
    ResourceCreate,
    ResourceShow,
    ResourceEdit,
} from './resources/Resource';

import {
    RoleList,
    RoleCreate,
    RoleShow,
    RoleEdit,
} from './resources/Role';

import {
    RoleResourcePermissionList,
    RoleResourcePermissionCreate,
    RoleResourcePermissionShow,
} from './resources/RoleResourcePermission';

import {
    SiteList,
    SiteCreate,
    SiteShow,
    SiteEdit,
} from './resources/Site';

import {
    SiteRoleList,
    SiteRoleCreate,
    SiteRoleShow,
    SiteRoleEdit,
} from './resources/SiteRole';

import {
    UserDomainRoleList,
    UserDomainRoleCreate,
    UserDomainRoleShow,
} from './resources/UserDomainRole';

import {
    UserSiteRoleList,
    UserSiteRoleCreate,
    UserSiteRoleShow,
} from './resources/UserSiteRole';

import {
    UserSiteDataList,
    UserSiteDataCreate,
    UserSiteDataShow,
    UserSiteDataEdit,
} from './resources/UserSiteData';

import {
    AdminNoteList,
    AdminNoteCreate,
    AdminNoteShow,
    AdminNoteEdit,
} from './resources/AdminNote';

import {
    SiteDataSchemaList,
    SiteDataSchemaCreate,
    SiteDataSchemaShow,
    SiteDataSchemaEdit,
} from './resources/SiteDataSchema';

import {
    ClientList,
    ClientShow,
} from './resources/Client';

import {
    CountryList,
    CountryShow,
} from './resources/Country';

import {
    OrganisationalunitList,
    OrganisationalunitShow,
} from './resources/Organisationalunit';

import {
    UserList,
    UserShow,
    UserEdit,
} from './resources/User';


const App = () => (
    <Admin
        title="Girl Effect Management Portal"
        menu={Menu}
        theme={muiTheme}
        restClient={restClient}
        authClient={authClient}
        catchAll={catchAll}
	    loginPage={AuthLoginPage}
        customRoutes={customRoutes}
    >
        {permissions => [
            permissionsStore.getResourcePermission('domains', 'list')
                ? <Resource
                      name="domains"
                      list={ DomainList }
                      create={permissionsStore.getResourcePermission('domains', 'create') ? DomainCreate : null}
                      remove={permissionsStore.getResourcePermission('domains', 'remove') ? Delete : null}
                      show={ DomainShow }
                      edit={permissionsStore.getResourcePermission('domains', 'edit') ? DomainEdit : null}
 
                /> : null,
            permissionsStore.getResourcePermission('domainroles', 'list')
                ? <Resource
                      name="domainroles"
                      list={ DomainRoleList }
                      create={permissionsStore.getResourcePermission('domainroles', 'create') ? DomainRoleCreate : null}
                      remove={permissionsStore.getResourcePermission('domainroles', 'remove') ? Delete : null}
                      show={ DomainRoleShow }
                      edit={permissionsStore.getResourcePermission('domainroles', 'edit') ? DomainRoleEdit : null}
 
                /> : null,
            permissionsStore.getResourcePermission('invitations', 'list')
                ? <Resource
                      name="invitations"
                      list={ InvitationList }
                      create={permissionsStore.getResourcePermission('invitations', 'create') ? InvitationCreate : null}
                      remove={permissionsStore.getResourcePermission('invitations', 'remove') ? Delete : null}
                      show={ InvitationShow }
                      edit={permissionsStore.getResourcePermission('invitations', 'edit') ? InvitationEdit : null}
 
                /> : null,
            permissionsStore.getResourcePermission('invitationdomainroles', 'list')
                ? <Resource
                      name="invitationdomainroles"
                      list={ InvitationDomainRoleList }
                      create={permissionsStore.getResourcePermission('invitationdomainroles', 'create') ? InvitationDomainRoleCreate : null}
                      remove={permissionsStore.getResourcePermission('invitationdomainroles', 'remove') ? Delete : null}
                      show={ InvitationDomainRoleShow }
 
                /> : null,
            permissionsStore.getResourcePermission('invitationsiteroles', 'list')
                ? <Resource
                      name="invitationsiteroles"
                      list={ InvitationSiteRoleList }
                      create={permissionsStore.getResourcePermission('invitationsiteroles', 'create') ? InvitationSiteRoleCreate : null}
                      remove={permissionsStore.getResourcePermission('invitationsiteroles', 'remove') ? Delete : null}
                      show={ InvitationSiteRoleShow }
 
                /> : null,
            permissionsStore.getResourcePermission('permissions', 'list')
                ? <Resource
                      name="permissions"
                      list={ PermissionList }
                      create={permissionsStore.getResourcePermission('permissions', 'create') ? PermissionCreate : null}
                      remove={permissionsStore.getResourcePermission('permissions', 'remove') ? Delete : null}
                      show={ PermissionShow }
                      edit={permissionsStore.getResourcePermission('permissions', 'edit') ? PermissionEdit : null}
 
                /> : null,
            permissionsStore.getResourcePermission('resources', 'list')
                ? <Resource
                      name="resources"
                      list={ ResourceList }
                      create={permissionsStore.getResourcePermission('resources', 'create') ? ResourceCreate : null}
                      remove={permissionsStore.getResourcePermission('resources', 'remove') ? Delete : null}
                      show={ ResourceShow }
                      edit={permissionsStore.getResourcePermission('resources', 'edit') ? ResourceEdit : null}
 
                /> : null,
            permissionsStore.getResourcePermission('roles', 'list')
                ? <Resource
                      name="roles"
                      list={ RoleList }
                      create={permissionsStore.getResourcePermission('roles', 'create') ? RoleCreate : null}
                      remove={permissionsStore.getResourcePermission('roles', 'remove') ? Delete : null}
                      show={ RoleShow }
                      edit={permissionsStore.getResourcePermission('roles', 'edit') ? RoleEdit : null}
 
                /> : null,
            permissionsStore.getResourcePermission('roleresourcepermissions', 'list')
                ? <Resource
                      name="roleresourcepermissions"
                      list={ RoleResourcePermissionList }
                      create={permissionsStore.getResourcePermission('roleresourcepermissions', 'create') ? RoleResourcePermissionCreate : null}
                      remove={permissionsStore.getResourcePermission('roleresourcepermissions', 'remove') ? Delete : null}
                      show={ RoleResourcePermissionShow }
 
                /> : null,
            permissionsStore.getResourcePermission('sites', 'list')
                ? <Resource
                      name="sites"
                      list={ SiteList }
                      create={permissionsStore.getResourcePermission('sites', 'create') ? SiteCreate : null}
                      remove={permissionsStore.getResourcePermission('sites', 'remove') ? Delete : null}
                      show={ SiteShow }
                      edit={permissionsStore.getResourcePermission('sites', 'edit') ? SiteEdit : null}
 
                /> : null,
            permissionsStore.getResourcePermission('siteroles', 'list')
                ? <Resource
                      name="siteroles"
                      list={ SiteRoleList }
                      create={permissionsStore.getResourcePermission('siteroles', 'create') ? SiteRoleCreate : null}
                      remove={permissionsStore.getResourcePermission('siteroles', 'remove') ? Delete : null}
                      show={ SiteRoleShow }
                      edit={permissionsStore.getResourcePermission('siteroles', 'edit') ? SiteRoleEdit : null}
 
                /> : null,
            permissionsStore.getResourcePermission('userdomainroles', 'list')
                ? <Resource
                      name="userdomainroles"
                      list={ UserDomainRoleList }
                      create={permissionsStore.getResourcePermission('userdomainroles', 'create') ? UserDomainRoleCreate : null}
                      remove={permissionsStore.getResourcePermission('userdomainroles', 'remove') ? Delete : null}
                      show={ UserDomainRoleShow }
 
                /> : null,
            permissionsStore.getResourcePermission('usersiteroles', 'list')
                ? <Resource
                      name="usersiteroles"
                      list={ UserSiteRoleList }
                      create={permissionsStore.getResourcePermission('usersiteroles', 'create') ? UserSiteRoleCreate : null}
                      remove={permissionsStore.getResourcePermission('usersiteroles', 'remove') ? Delete : null}
                      show={ UserSiteRoleShow }
 
                /> : null,
            permissionsStore.getResourcePermission('usersitedata', 'list')
                ? <Resource
                      name="usersitedata"
                      list={ UserSiteDataList }
                      create={permissionsStore.getResourcePermission('usersitedata', 'create') ? UserSiteDataCreate : null}
                      remove={permissionsStore.getResourcePermission('usersitedata', 'remove') ? Delete : null}
                      show={ UserSiteDataShow }
                      edit={permissionsStore.getResourcePermission('usersitedata', 'edit') ? UserSiteDataEdit : null}
 
                /> : null,
            permissionsStore.getResourcePermission('adminnotes', 'list')
                ? <Resource
                      name="adminnotes"
                      list={ AdminNoteList }
                      create={permissionsStore.getResourcePermission('adminnotes', 'create') ? AdminNoteCreate : null}
                      remove={permissionsStore.getResourcePermission('adminnotes', 'remove') ? Delete : null}
                      show={ AdminNoteShow }
                      edit={permissionsStore.getResourcePermission('adminnotes', 'edit') ? AdminNoteEdit : null}
 
                /> : null,
            permissionsStore.getResourcePermission('sitedataschemas', 'list')
                ? <Resource
                      name="sitedataschemas"
                      list={ SiteDataSchemaList }
                      create={permissionsStore.getResourcePermission('sitedataschemas', 'create') ? SiteDataSchemaCreate : null}
                      remove={permissionsStore.getResourcePermission('sitedataschemas', 'remove') ? Delete : null}
                      show={ SiteDataSchemaShow }
                      edit={permissionsStore.getResourcePermission('sitedataschemas', 'edit') ? SiteDataSchemaEdit : null}
 
                /> : null,
            permissionsStore.getResourcePermission('clients', 'list')
                ? <Resource
                      name="clients"
                      list={ ClientList }
                      show={ ClientShow }
 
                /> : null,
            permissionsStore.getResourcePermission('countries', 'list')
                ? <Resource
                      name="countries"
                      list={ CountryList }
                      show={ CountryShow }
 
                /> : null,
            permissionsStore.getResourcePermission('organisationalunits', 'list')
                ? <Resource
                      name="organisationalunits"
                      list={ OrganisationalunitList }
                      show={ OrganisationalunitShow }
 
                /> : null,
            permissionsStore.getResourcePermission('users', 'list')
                ? <Resource
                      name="users"
                      list={ UserList }
                      remove={permissionsStore.getResourcePermission('users', 'remove') ? Delete : null}
                      show={ UserShow }
                      edit={permissionsStore.getResourcePermission('users', 'edit') ? UserEdit : null}
 
                /> : null,
        ]}
    </Admin>
)

export default App;
/** End of Generated Code **/
