/**
 * Generated App.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import 'antd/dist/antd.css';
import React from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';
import authClient from './auth/authClient';
import AuthLoginPage from './auth/authLogin';
import catchAll from './catchAll';
import customRoutes from './customRoutes';
import Menu from './Menu';
import PermissionsStore from './auth/PermissionsStore';
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
            PermissionsStore.getResourcePermission('domains', 'list')
                ? <Resource
                      name="domains"
                      list={ DomainList }
                      create={PermissionsStore.getResourcePermission('domains', 'create') ? DomainCreate : null}
                      remove={PermissionsStore.getResourcePermission('domains', 'remove') ? Delete : null}
                      show={ DomainShow }
                      edit={PermissionsStore.getResourcePermission('domains', 'edit') ? DomainEdit : null}
                /> : null,
            PermissionsStore.getResourcePermission('domainroles', 'list')
                ? <Resource
                      name="domainroles"
                      list={ DomainRoleList }
                      create={PermissionsStore.getResourcePermission('domainroles', 'create') ? DomainRoleCreate : null}
                      remove={PermissionsStore.getResourcePermission('domainroles', 'remove') ? Delete : null}
                      show={ DomainRoleShow }
                      edit={PermissionsStore.getResourcePermission('domainroles', 'edit') ? DomainRoleEdit : null}
                /> : null,
            PermissionsStore.getResourcePermission('invitations', 'list')
                ? <Resource
                      name="invitations"
                      list={ InvitationList }
                      create={PermissionsStore.getResourcePermission('invitations', 'create') ? InvitationCreate : null}
                      remove={PermissionsStore.getResourcePermission('invitations', 'remove') ? Delete : null}
                      show={ InvitationShow }
                      edit={PermissionsStore.getResourcePermission('invitations', 'edit') ? InvitationEdit : null}
                /> : null,
            PermissionsStore.getResourcePermission('invitationdomainroles', 'list')
                ? <Resource
                      name="invitationdomainroles"
                      list={ InvitationDomainRoleList }
                      create={PermissionsStore.getResourcePermission('invitationdomainroles', 'create') ? InvitationDomainRoleCreate : null}
                      remove={PermissionsStore.getResourcePermission('invitationdomainroles', 'remove') ? Delete : null}
                      show={ InvitationDomainRoleShow }
                /> : null,
            PermissionsStore.getResourcePermission('invitationsiteroles', 'list')
                ? <Resource
                      name="invitationsiteroles"
                      list={ InvitationSiteRoleList }
                      create={PermissionsStore.getResourcePermission('invitationsiteroles', 'create') ? InvitationSiteRoleCreate : null}
                      remove={PermissionsStore.getResourcePermission('invitationsiteroles', 'remove') ? Delete : null}
                      show={ InvitationSiteRoleShow }
                /> : null,
            PermissionsStore.getResourcePermission('permissions', 'list')
                ? <Resource
                      name="permissions"
                      list={ PermissionList }
                      create={PermissionsStore.getResourcePermission('permissions', 'create') ? PermissionCreate : null}
                      remove={PermissionsStore.getResourcePermission('permissions', 'remove') ? Delete : null}
                      show={ PermissionShow }
                      edit={PermissionsStore.getResourcePermission('permissions', 'edit') ? PermissionEdit : null}
                /> : null,
            PermissionsStore.getResourcePermission('resources', 'list')
                ? <Resource
                      name="resources"
                      list={ ResourceList }
                      create={PermissionsStore.getResourcePermission('resources', 'create') ? ResourceCreate : null}
                      remove={PermissionsStore.getResourcePermission('resources', 'remove') ? Delete : null}
                      show={ ResourceShow }
                      edit={PermissionsStore.getResourcePermission('resources', 'edit') ? ResourceEdit : null}
                /> : null,
            PermissionsStore.getResourcePermission('roles', 'list')
                ? <Resource
                      name="roles"
                      list={ RoleList }
                      create={PermissionsStore.getResourcePermission('roles', 'create') ? RoleCreate : null}
                      remove={PermissionsStore.getResourcePermission('roles', 'remove') ? Delete : null}
                      show={ RoleShow }
                      edit={PermissionsStore.getResourcePermission('roles', 'edit') ? RoleEdit : null}
                /> : null,
            PermissionsStore.getResourcePermission('roleresourcepermissions', 'list')
                ? <Resource
                      name="roleresourcepermissions"
                      list={ RoleResourcePermissionList }
                      create={PermissionsStore.getResourcePermission('roleresourcepermissions', 'create') ? RoleResourcePermissionCreate : null}
                      remove={PermissionsStore.getResourcePermission('roleresourcepermissions', 'remove') ? Delete : null}
                      show={ RoleResourcePermissionShow }
                /> : null,
            PermissionsStore.getResourcePermission('sites', 'list')
                ? <Resource
                      name="sites"
                      list={ SiteList }
                      create={PermissionsStore.getResourcePermission('sites', 'create') ? SiteCreate : null}
                      remove={PermissionsStore.getResourcePermission('sites', 'remove') ? Delete : null}
                      show={ SiteShow }
                      edit={PermissionsStore.getResourcePermission('sites', 'edit') ? SiteEdit : null}
                /> : null,
            PermissionsStore.getResourcePermission('siteroles', 'list')
                ? <Resource
                      name="siteroles"
                      list={ SiteRoleList }
                      create={PermissionsStore.getResourcePermission('siteroles', 'create') ? SiteRoleCreate : null}
                      remove={PermissionsStore.getResourcePermission('siteroles', 'remove') ? Delete : null}
                      show={ SiteRoleShow }
                      edit={PermissionsStore.getResourcePermission('siteroles', 'edit') ? SiteRoleEdit : null}
                /> : null,
            PermissionsStore.getResourcePermission('userdomainroles', 'list')
                ? <Resource
                      name="userdomainroles"
                      list={ UserDomainRoleList }
                      create={PermissionsStore.getResourcePermission('userdomainroles', 'create') ? UserDomainRoleCreate : null}
                      remove={PermissionsStore.getResourcePermission('userdomainroles', 'remove') ? Delete : null}
                      show={ UserDomainRoleShow }
                /> : null,
            PermissionsStore.getResourcePermission('usersiteroles', 'list')
                ? <Resource
                      name="usersiteroles"
                      list={ UserSiteRoleList }
                      create={PermissionsStore.getResourcePermission('usersiteroles', 'create') ? UserSiteRoleCreate : null}
                      remove={PermissionsStore.getResourcePermission('usersiteroles', 'remove') ? Delete : null}
                      show={ UserSiteRoleShow }
                /> : null,
            PermissionsStore.getResourcePermission('usersitedata', 'list')
                ? <Resource
                      name="usersitedata"
                      list={ UserSiteDataList }
                      create={PermissionsStore.getResourcePermission('usersitedata', 'create') ? UserSiteDataCreate : null}
                      remove={PermissionsStore.getResourcePermission('usersitedata', 'remove') ? Delete : null}
                      show={ UserSiteDataShow }
                      edit={PermissionsStore.getResourcePermission('usersitedata', 'edit') ? UserSiteDataEdit : null}
                /> : null,
            PermissionsStore.getResourcePermission('adminnotes', 'list')
                ? <Resource
                      name="adminnotes"
                      list={ AdminNoteList }
                      create={PermissionsStore.getResourcePermission('adminnotes', 'create') ? AdminNoteCreate : null}
                      remove={PermissionsStore.getResourcePermission('adminnotes', 'remove') ? Delete : null}
                      show={ AdminNoteShow }
                      edit={PermissionsStore.getResourcePermission('adminnotes', 'edit') ? AdminNoteEdit : null}
                /> : null,
            PermissionsStore.getResourcePermission('sitedataschemas', 'list')
                ? <Resource
                      name="sitedataschemas"
                      list={ SiteDataSchemaList }
                      create={PermissionsStore.getResourcePermission('sitedataschemas', 'create') ? SiteDataSchemaCreate : null}
                      remove={PermissionsStore.getResourcePermission('sitedataschemas', 'remove') ? Delete : null}
                      show={ SiteDataSchemaShow }
                      edit={PermissionsStore.getResourcePermission('sitedataschemas', 'edit') ? SiteDataSchemaEdit : null}
                /> : null,
            PermissionsStore.getResourcePermission('clients', 'list')
                ? <Resource
                      name="clients"
                      list={ ClientList }
                      show={ ClientShow }
                /> : null,
            PermissionsStore.getResourcePermission('countries', 'list')
                ? <Resource
                      name="countries"
                      list={ CountryList }
                      show={ CountryShow }
                /> : null,
            PermissionsStore.getResourcePermission('organisationalunits', 'list')
                ? <Resource
                      name="organisationalunits"
                      list={ OrganisationalunitList }
                      show={ OrganisationalunitShow }
                /> : null,
            PermissionsStore.getResourcePermission('users', 'list')
                ? <Resource
                      name="users"
                      list={ UserList }
                      remove={PermissionsStore.getResourcePermission('users', 'remove') ? Delete : null}
                      show={ UserShow }
                      edit={PermissionsStore.getResourcePermission('users', 'edit') ? UserEdit : null}
                /> : null,
        ]
    }
    </Admin>
)

export default App;
/** End of Generated Code **/