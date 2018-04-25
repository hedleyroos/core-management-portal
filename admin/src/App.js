/**
 * Generated App.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';
import restClient from './swaggerRestServer';
import authClient from './auth/authClient';
import AuthLoginPage from './auth/authLogin';
import customRoutes from './customRoutes';
import Menu from './Menu';
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
    UserList,
    UserShow,
    UserEdit,
} from './resources/User';

const App = () => (
    <Admin title="Girl Effect Management Portal" menu={Menu} theme={muiTheme} restClient={restClient} authClient={authClient} loginPage={AuthLoginPage} customRoutes={customRoutes} >
        <Resource
            name="domains"
            list={ DomainList }
            create={ DomainCreate }
            show={ DomainShow }
            edit={ DomainEdit }
            remove={Delete}
        />
        <Resource
            name="domainroles"
            list={ DomainRoleList }
            create={ DomainRoleCreate }
            show={ DomainRoleShow }
            edit={ DomainRoleEdit }
            remove={Delete}
        />
        <Resource
            name="invitations"
            list={ InvitationList }
            create={ InvitationCreate }
            show={ InvitationShow }
            edit={ InvitationEdit }
            remove={Delete}
        />
        <Resource
            name="invitationdomainroles"
            list={ InvitationDomainRoleList }
            create={ InvitationDomainRoleCreate }
            show={ InvitationDomainRoleShow }
            remove={Delete}
        />
        <Resource
            name="invitationsiteroles"
            list={ InvitationSiteRoleList }
            create={ InvitationSiteRoleCreate }
            show={ InvitationSiteRoleShow }
            remove={Delete}
        />
        <Resource
            name="permissions"
            list={ PermissionList }
            create={ PermissionCreate }
            show={ PermissionShow }
            edit={ PermissionEdit }
            remove={Delete}
        />
        <Resource
            name="resources"
            list={ ResourceList }
            create={ ResourceCreate }
            show={ ResourceShow }
            edit={ ResourceEdit }
            remove={Delete}
        />
        <Resource
            name="roles"
            list={ RoleList }
            create={ RoleCreate }
            show={ RoleShow }
            edit={ RoleEdit }
            remove={Delete}
        />
        <Resource
            name="roleresourcepermissions"
            list={ RoleResourcePermissionList }
            create={ RoleResourcePermissionCreate }
            show={ RoleResourcePermissionShow }
            remove={Delete}
        />
        <Resource
            name="sites"
            list={ SiteList }
            create={ SiteCreate }
            show={ SiteShow }
            edit={ SiteEdit }
            remove={Delete}
        />
        <Resource
            name="siteroles"
            list={ SiteRoleList }
            create={ SiteRoleCreate }
            show={ SiteRoleShow }
            edit={ SiteRoleEdit }
            remove={Delete}
        />
        <Resource
            name="userdomainroles"
            list={ UserDomainRoleList }
            create={ UserDomainRoleCreate }
            show={ UserDomainRoleShow }
            remove={Delete}
        />
        <Resource
            name="usersiteroles"
            list={ UserSiteRoleList }
            create={ UserSiteRoleCreate }
            show={ UserSiteRoleShow }
            remove={Delete}
        />
        <Resource
            name="usersitedata"
            list={ UserSiteDataList }
            create={ UserSiteDataCreate }
            show={ UserSiteDataShow }
            edit={ UserSiteDataEdit }
            remove={Delete}
        />
        <Resource
            name="adminnotes"
            list={ AdminNoteList }
            create={ AdminNoteCreate }
            show={ AdminNoteShow }
            edit={ AdminNoteEdit }
            remove={Delete}
        />
        <Resource
            name="sitedataschemas"
            list={ SiteDataSchemaList }
            create={ SiteDataSchemaCreate }
            show={ SiteDataSchemaShow }
            edit={ SiteDataSchemaEdit }
            remove={Delete}
        />
        <Resource
            name="clients"
            list={ ClientList }
            show={ ClientShow }
            remove={Delete}
        />
        <Resource
            name="users"
            list={ UserList }
            show={ UserShow }
            edit={ UserEdit }
            remove={Delete}
        />
    </Admin>
)

export default App;
/** End of Generated Code **/
