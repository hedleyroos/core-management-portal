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
import restClient from './swaggerRestServer';
import { muiTheme } from './Theme';
import contextReducer from './reducers/contextReducer';

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
        customReducers={{ context: contextReducer }}
    >
        {permissions => [
            permissions.getResourcePermission('domains', 'list')
                ? <Resource
                      name="domains"
                      list={ DomainList }
                      create={permissions.getResourcePermission('domains', 'create') ? DomainCreate : null}
                      remove={permissions.getResourcePermission('domains', 'remove') ? Delete : null}
                      show={ DomainShow }
                      edit={permissions.getResourcePermission('domains', 'edit') ? DomainEdit : null}
 
                /> : null,
            permissions.getResourcePermission('domainroles', 'list')
                ? <Resource
                      name="domainroles"
                      list={ DomainRoleList }
                      create={permissions.getResourcePermission('domainroles', 'create') ? DomainRoleCreate : null}
                      remove={permissions.getResourcePermission('domainroles', 'remove') ? Delete : null}
                      show={ DomainRoleShow }
                      edit={permissions.getResourcePermission('domainroles', 'edit') ? DomainRoleEdit : null}
 
                /> : null,
            permissions.getResourcePermission('invitations', 'list')
                ? <Resource
                      name="invitations"
                      list={ InvitationList }
                      create={permissions.getResourcePermission('invitations', 'create') ? InvitationCreate : null}
                      remove={permissions.getResourcePermission('invitations', 'remove') ? Delete : null}
                      show={ InvitationShow }
                      edit={permissions.getResourcePermission('invitations', 'edit') ? InvitationEdit : null}
 
                /> : null,
            permissions.getResourcePermission('invitationdomainroles', 'list')
                ? <Resource
                      name="invitationdomainroles"
                      list={ InvitationDomainRoleList }
                      create={permissions.getResourcePermission('invitationdomainroles', 'create') ? InvitationDomainRoleCreate : null}
                      remove={permissions.getResourcePermission('invitationdomainroles', 'remove') ? Delete : null}
                      show={ InvitationDomainRoleShow }
 
                /> : null,
            permissions.getResourcePermission('invitationsiteroles', 'list')
                ? <Resource
                      name="invitationsiteroles"
                      list={ InvitationSiteRoleList }
                      create={permissions.getResourcePermission('invitationsiteroles', 'create') ? InvitationSiteRoleCreate : null}
                      remove={permissions.getResourcePermission('invitationsiteroles', 'remove') ? Delete : null}
                      show={ InvitationSiteRoleShow }
 
                /> : null,
            permissions.getResourcePermission('permissions', 'list')
                ? <Resource
                      name="permissions"
                      list={ PermissionList }
                      create={permissions.getResourcePermission('permissions', 'create') ? PermissionCreate : null}
                      remove={permissions.getResourcePermission('permissions', 'remove') ? Delete : null}
                      show={ PermissionShow }
                      edit={permissions.getResourcePermission('permissions', 'edit') ? PermissionEdit : null}
 
                /> : null,
            permissions.getResourcePermission('resources', 'list')
                ? <Resource
                      name="resources"
                      list={ ResourceList }
                      create={permissions.getResourcePermission('resources', 'create') ? ResourceCreate : null}
                      remove={permissions.getResourcePermission('resources', 'remove') ? Delete : null}
                      show={ ResourceShow }
                      edit={permissions.getResourcePermission('resources', 'edit') ? ResourceEdit : null}
 
                /> : null,
            permissions.getResourcePermission('roles', 'list')
                ? <Resource
                      name="roles"
                      list={ RoleList }
                      create={permissions.getResourcePermission('roles', 'create') ? RoleCreate : null}
                      remove={permissions.getResourcePermission('roles', 'remove') ? Delete : null}
                      show={ RoleShow }
                      edit={permissions.getResourcePermission('roles', 'edit') ? RoleEdit : null}
 
                /> : null,
            permissions.getResourcePermission('roleresourcepermissions', 'list')
                ? <Resource
                      name="roleresourcepermissions"
                      list={ RoleResourcePermissionList }
                      create={permissions.getResourcePermission('roleresourcepermissions', 'create') ? RoleResourcePermissionCreate : null}
                      remove={permissions.getResourcePermission('roleresourcepermissions', 'remove') ? Delete : null}
                      show={ RoleResourcePermissionShow }
 
                /> : null,
            permissions.getResourcePermission('sites', 'list')
                ? <Resource
                      name="sites"
                      list={ SiteList }
                      create={permissions.getResourcePermission('sites', 'create') ? SiteCreate : null}
                      remove={permissions.getResourcePermission('sites', 'remove') ? Delete : null}
                      show={ SiteShow }
                      edit={permissions.getResourcePermission('sites', 'edit') ? SiteEdit : null}
 
                /> : null,
            permissions.getResourcePermission('siteroles', 'list')
                ? <Resource
                      name="siteroles"
                      list={ SiteRoleList }
                      create={permissions.getResourcePermission('siteroles', 'create') ? SiteRoleCreate : null}
                      remove={permissions.getResourcePermission('siteroles', 'remove') ? Delete : null}
                      show={ SiteRoleShow }
                      edit={permissions.getResourcePermission('siteroles', 'edit') ? SiteRoleEdit : null}
 
                /> : null,
            permissions.getResourcePermission('userdomainroles', 'list')
                ? <Resource
                      name="userdomainroles"
                      list={ UserDomainRoleList }
                      create={permissions.getResourcePermission('userdomainroles', 'create') ? UserDomainRoleCreate : null}
                      remove={permissions.getResourcePermission('userdomainroles', 'remove') ? Delete : null}
                      show={ UserDomainRoleShow }
 
                /> : null,
            permissions.getResourcePermission('usersiteroles', 'list')
                ? <Resource
                      name="usersiteroles"
                      list={ UserSiteRoleList }
                      create={permissions.getResourcePermission('usersiteroles', 'create') ? UserSiteRoleCreate : null}
                      remove={permissions.getResourcePermission('usersiteroles', 'remove') ? Delete : null}
                      show={ UserSiteRoleShow }
 
                /> : null,
            permissions.getResourcePermission('usersitedata', 'list')
                ? <Resource
                      name="usersitedata"
                      list={ UserSiteDataList }
                      create={permissions.getResourcePermission('usersitedata', 'create') ? UserSiteDataCreate : null}
                      remove={permissions.getResourcePermission('usersitedata', 'remove') ? Delete : null}
                      show={ UserSiteDataShow }
                      edit={permissions.getResourcePermission('usersitedata', 'edit') ? UserSiteDataEdit : null}
 
                /> : null,
            permissions.getResourcePermission('adminnotes', 'list')
                ? <Resource
                      name="adminnotes"
                      list={ AdminNoteList }
                      create={permissions.getResourcePermission('adminnotes', 'create') ? AdminNoteCreate : null}
                      remove={permissions.getResourcePermission('adminnotes', 'remove') ? Delete : null}
                      show={ AdminNoteShow }
                      edit={permissions.getResourcePermission('adminnotes', 'edit') ? AdminNoteEdit : null}
 
                /> : null,
            permissions.getResourcePermission('sitedataschemas', 'list')
                ? <Resource
                      name="sitedataschemas"
                      list={ SiteDataSchemaList }
                      create={permissions.getResourcePermission('sitedataschemas', 'create') ? SiteDataSchemaCreate : null}
                      remove={permissions.getResourcePermission('sitedataschemas', 'remove') ? Delete : null}
                      show={ SiteDataSchemaShow }
                      edit={permissions.getResourcePermission('sitedataschemas', 'edit') ? SiteDataSchemaEdit : null}
 
                /> : null,
            permissions.getResourcePermission('clients', 'list')
                ? <Resource
                      name="clients"
                      list={ ClientList }
                      show={ ClientShow }
 
                /> : null,
            permissions.getResourcePermission('countries', 'list')
                ? <Resource
                      name="countries"
                      list={ CountryList }
                      show={ CountryShow }
 
                /> : null,
            permissions.getResourcePermission('organisationalunits', 'list')
                ? <Resource
                      name="organisationalunits"
                      list={ OrganisationalunitList }
                      show={ OrganisationalunitShow }
 
                /> : null,
            permissions.getResourcePermission('users', 'list')
                ? <Resource
                      name="users"
                      list={ UserList }
                      remove={permissions.getResourcePermission('users', 'remove') ? Delete : null}
                      show={ UserShow }
                      edit={permissions.getResourcePermission('users', 'edit') ? UserEdit : null}
 
                /> : null,
        ]
    }
    </Admin>
)

export default App;
/** End of Generated Code **/