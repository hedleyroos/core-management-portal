/**
 * Generated ReactAdmin.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import 'antd/dist/antd.css';
import React from 'react';
import { Admin, Resource } from 'react-admin';

import AuthLoginPage from './auth/authLogin';
import AuthLogoutButton from './auth/authLogout';
import authProvider from './auth/authProvider';
import PermissionsStore from './auth/PermissionsStore';
import catchAll from './catchAll';
import customRoutes from './customRoutes';
import dataProvider from './dataProvider';
import MyLayout from './MyLayout';
import { theme } from './theme';
import manageRolesReducer from './reducers/manageRolesReducer';

import { DomainList, DomainCreate, DomainShow, DomainEdit } from './resources/Domain';

import {
    DomainRoleList,
    DomainRoleCreate,
    DomainRoleShow,
    DomainRoleEdit
} from './resources/DomainRole';

import {
    InvitationList,
    InvitationCreate,
    InvitationShow,
    InvitationEdit
} from './resources/Invitation';

import {
    InvitationRedirectUrlList,
    InvitationRedirectUrlCreate,
    InvitationRedirectUrlShow,
    InvitationRedirectUrlEdit
} from './resources/InvitationRedirectUrl';

import {
    InvitationDomainRoleList,
    InvitationDomainRoleCreate,
    InvitationDomainRoleShow
} from './resources/InvitationDomainRole';

import {
    InvitationSiteRoleList,
    InvitationSiteRoleCreate,
    InvitationSiteRoleShow
} from './resources/InvitationSiteRole';

import {
    PermissionList,
    PermissionCreate,
    PermissionShow,
    PermissionEdit
} from './resources/Permission';

import { ResourceList, ResourceCreate, ResourceShow, ResourceEdit } from './resources/Resource';

import { RoleList, RoleCreate, RoleShow, RoleEdit } from './resources/Role';

import {
    RoleResourcePermissionList,
    RoleResourcePermissionCreate,
    RoleResourcePermissionShow
} from './resources/RoleResourcePermission';

import { SiteList, SiteCreate, SiteShow, SiteEdit } from './resources/Site';

import { SiteRoleList, SiteRoleCreate, SiteRoleShow, SiteRoleEdit } from './resources/SiteRole';

import {
    UserDomainRoleList,
    UserDomainRoleCreate,
    UserDomainRoleShow
} from './resources/UserDomainRole';

import { UserSiteRoleList, UserSiteRoleCreate, UserSiteRoleShow } from './resources/UserSiteRole';

import {
    UserSiteDataList,
    UserSiteDataCreate,
    UserSiteDataShow,
    UserSiteDataEdit
} from './resources/UserSiteData';

import {
    DeletedUserList,
    DeletedUserCreate,
    DeletedUserShow,
    DeletedUserEdit
} from './resources/DeletedUser';

import {
    DeletedUserSiteList,
    DeletedUserSiteCreate,
    DeletedUserSiteShow,
    DeletedUserSiteEdit
} from './resources/DeletedUserSite';

import {
    AdminNoteList,
    AdminNoteCreate,
    AdminNoteShow,
    AdminNoteEdit
} from './resources/AdminNote';

import {
    SiteDataSchemaList,
    SiteDataSchemaCreate,
    SiteDataSchemaShow,
    SiteDataSchemaEdit
} from './resources/SiteDataSchema';

import { ClientList, ClientShow } from './resources/Client';

import { CountryList, CountryShow } from './resources/Country';

import {
    OrganisationList,
    OrganisationCreate,
    OrganisationShow,
    OrganisationEdit
} from './resources/Organisation';

import { UserListNoSites, UserList, UserShow, UserEdit } from './resources/User';

const ReactAdmin = () => (
    <Admin
        appLayout={MyLayout}
        authProvider={authProvider}
        catchAll={catchAll}
        customReducers={{ manageRoles: manageRolesReducer }}
        customRoutes={customRoutes}
        dataProvider={dataProvider}
        loginPage={AuthLoginPage}
        logoutButton={AuthLogoutButton}
        title="Girl Effect Management Portal"
        theme={theme}
    >
        {permissions => [
            PermissionsStore.getResourcePermission('domains', 'list') ? (
                <Resource
                    name="domains"
                    list={DomainList}
                    create={
                        PermissionsStore.getResourcePermission('domains', 'create')
                            ? DomainCreate
                            : null
                    }
                    show={DomainShow}
                    edit={
                        PermissionsStore.getResourcePermission('domains', 'edit')
                            ? DomainEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('domainroles', 'list') ? (
                <Resource
                    name="domainroles"
                    list={DomainRoleList}
                    create={
                        PermissionsStore.getResourcePermission('domainroles', 'create')
                            ? DomainRoleCreate
                            : null
                    }
                    show={DomainRoleShow}
                    edit={
                        PermissionsStore.getResourcePermission('domainroles', 'edit')
                            ? DomainRoleEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('invitations', 'list') ? (
                <Resource
                    name="invitations"
                    list={InvitationList}
                    create={
                        PermissionsStore.getResourcePermission('invitations', 'create')
                            ? InvitationCreate
                            : null
                    }
                    show={InvitationShow}
                    edit={
                        PermissionsStore.getResourcePermission('invitations', 'edit')
                            ? InvitationEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('invitationredirecturls', 'list') ? (
                <Resource
                    name="invitationredirecturls"
                    list={InvitationRedirectUrlList}
                    create={
                        PermissionsStore.getResourcePermission('invitationredirecturls', 'create')
                            ? InvitationRedirectUrlCreate
                            : null
                    }
                    show={InvitationRedirectUrlShow}
                    edit={
                        PermissionsStore.getResourcePermission('invitationredirecturls', 'edit')
                            ? InvitationRedirectUrlEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('invitationdomainroles', 'list') ? (
                <Resource
                    name="invitationdomainroles"
                    list={InvitationDomainRoleList}
                    create={
                        PermissionsStore.getResourcePermission('invitationdomainroles', 'create')
                            ? InvitationDomainRoleCreate
                            : null
                    }
                    show={InvitationDomainRoleShow}
                />
            ) : null,
            PermissionsStore.getResourcePermission('invitationsiteroles', 'list') ? (
                <Resource
                    name="invitationsiteroles"
                    list={InvitationSiteRoleList}
                    create={
                        PermissionsStore.getResourcePermission('invitationsiteroles', 'create')
                            ? InvitationSiteRoleCreate
                            : null
                    }
                    show={InvitationSiteRoleShow}
                />
            ) : null,
            PermissionsStore.getResourcePermission('permissions', 'list') ? (
                <Resource
                    name="permissions"
                    list={PermissionList}
                    create={
                        PermissionsStore.getResourcePermission('permissions', 'create')
                            ? PermissionCreate
                            : null
                    }
                    show={PermissionShow}
                    edit={
                        PermissionsStore.getResourcePermission('permissions', 'edit')
                            ? PermissionEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('resources', 'list') ? (
                <Resource
                    name="resources"
                    list={ResourceList}
                    create={
                        PermissionsStore.getResourcePermission('resources', 'create')
                            ? ResourceCreate
                            : null
                    }
                    show={ResourceShow}
                    edit={
                        PermissionsStore.getResourcePermission('resources', 'edit')
                            ? ResourceEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('roles', 'list') ? (
                <Resource
                    name="roles"
                    list={RoleList}
                    create={
                        PermissionsStore.getResourcePermission('roles', 'create')
                            ? RoleCreate
                            : null
                    }
                    show={RoleShow}
                    edit={PermissionsStore.getResourcePermission('roles', 'edit') ? RoleEdit : null}
                />
            ) : null,
            PermissionsStore.getResourcePermission('roleresourcepermissions', 'list') ? (
                <Resource
                    name="roleresourcepermissions"
                    list={RoleResourcePermissionList}
                    create={
                        PermissionsStore.getResourcePermission('roleresourcepermissions', 'create')
                            ? RoleResourcePermissionCreate
                            : null
                    }
                    show={RoleResourcePermissionShow}
                />
            ) : null,
            PermissionsStore.getResourcePermission('sites', 'list') ? (
                <Resource
                    name="sites"
                    list={SiteList}
                    create={
                        PermissionsStore.getResourcePermission('sites', 'create')
                            ? SiteCreate
                            : null
                    }
                    show={SiteShow}
                    edit={PermissionsStore.getResourcePermission('sites', 'edit') ? SiteEdit : null}
                />
            ) : null,
            PermissionsStore.getResourcePermission('siteroles', 'list') ? (
                <Resource
                    name="siteroles"
                    list={SiteRoleList}
                    create={
                        PermissionsStore.getResourcePermission('siteroles', 'create')
                            ? SiteRoleCreate
                            : null
                    }
                    show={SiteRoleShow}
                    edit={
                        PermissionsStore.getResourcePermission('siteroles', 'edit')
                            ? SiteRoleEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('userdomainroles', 'list') ? (
                <Resource
                    name="userdomainroles"
                    list={UserDomainRoleList}
                    create={
                        PermissionsStore.getResourcePermission('userdomainroles', 'create')
                            ? UserDomainRoleCreate
                            : null
                    }
                    show={UserDomainRoleShow}
                />
            ) : null,
            PermissionsStore.getResourcePermission('usersiteroles', 'list') ? (
                <Resource
                    name="usersiteroles"
                    list={UserSiteRoleList}
                    create={
                        PermissionsStore.getResourcePermission('usersiteroles', 'create')
                            ? UserSiteRoleCreate
                            : null
                    }
                    show={UserSiteRoleShow}
                />
            ) : null,
            PermissionsStore.getResourcePermission('usersitedata', 'list') ? (
                <Resource
                    name="usersitedata"
                    list={UserSiteDataList}
                    create={
                        PermissionsStore.getResourcePermission('usersitedata', 'create')
                            ? UserSiteDataCreate
                            : null
                    }
                    show={UserSiteDataShow}
                    edit={
                        PermissionsStore.getResourcePermission('usersitedata', 'edit')
                            ? UserSiteDataEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('deletedusers', 'list') ? (
                <Resource
                    name="deletedusers"
                    list={DeletedUserList}
                    create={
                        PermissionsStore.getResourcePermission('deletedusers', 'create')
                            ? DeletedUserCreate
                            : null
                    }
                    show={DeletedUserShow}
                    edit={
                        PermissionsStore.getResourcePermission('deletedusers', 'edit')
                            ? DeletedUserEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('deletedusersites', 'list') ? (
                <Resource
                    name="deletedusersites"
                    list={DeletedUserSiteList}
                    create={
                        PermissionsStore.getResourcePermission('deletedusersites', 'create')
                            ? DeletedUserSiteCreate
                            : null
                    }
                    show={DeletedUserSiteShow}
                    edit={
                        PermissionsStore.getResourcePermission('deletedusersites', 'edit')
                            ? DeletedUserSiteEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('adminnotes', 'list') ? (
                <Resource
                    name="adminnotes"
                    list={AdminNoteList}
                    create={
                        PermissionsStore.getResourcePermission('adminnotes', 'create')
                            ? AdminNoteCreate
                            : null
                    }
                    show={AdminNoteShow}
                    edit={
                        PermissionsStore.getResourcePermission('adminnotes', 'edit')
                            ? AdminNoteEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('sitedataschemas', 'list') ? (
                <Resource
                    name="sitedataschemas"
                    list={SiteDataSchemaList}
                    create={
                        PermissionsStore.getResourcePermission('sitedataschemas', 'create')
                            ? SiteDataSchemaCreate
                            : null
                    }
                    show={SiteDataSchemaShow}
                    edit={
                        PermissionsStore.getResourcePermission('sitedataschemas', 'edit')
                            ? SiteDataSchemaEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('clients', 'list') ? (
                <Resource name="clients" list={ClientList} show={ClientShow} />
            ) : null,
            PermissionsStore.getResourcePermission('countries', 'list') ? (
                <Resource name="countries" list={CountryList} show={CountryShow} />
            ) : null,
            PermissionsStore.getResourcePermission('organisations', 'list') ? (
                <Resource
                    name="organisations"
                    list={OrganisationList}
                    create={
                        PermissionsStore.getResourcePermission('organisations', 'create')
                            ? OrganisationCreate
                            : null
                    }
                    show={OrganisationShow}
                    edit={
                        PermissionsStore.getResourcePermission('organisations', 'edit')
                            ? OrganisationEdit
                            : null
                    }
                />
            ) : null,
            PermissionsStore.getResourcePermission('users', 'list') ? (
                <Resource
                    name="users"
                    list={UserListNoSites}
                    show={UserShow}
                    edit={PermissionsStore.getResourcePermission('users', 'edit') ? UserEdit : null}
                />
            ) : null,
            <Resource name="catchAll" />
        ]}
    </Admin>
);

export default ReactAdmin;
/** End of Generated Code **/
