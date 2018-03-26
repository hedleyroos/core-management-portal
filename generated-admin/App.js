import React from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';
import swaggerRestServer from './swaggerRestServer';

import {
    InvitationShow,
    InvitationCreate,
    InvitationList,
    InvitationEdit,
} from './Invitation';

import {
    AdminNoteShow,
    AdminNoteCreate,
    AdminNoteList,
    AdminNoteEdit,
} from './AdminNote';

import {
    ClientShow,
    ClientList,
} from './Client';

import {
    DomainShow,
    DomainCreate,
    DomainList,
    DomainEdit,
} from './Domain';

import {
    UserDomainRoleShow,
    UserDomainRoleCreate,
    UserDomainRoleList,
} from './UserDomainRole';

import {
    ResourceShow,
    ResourceCreate,
    ResourceList,
    ResourceEdit,
} from './Resource';

import {
    DomainRoleShow,
    DomainRoleCreate,
    DomainRoleList,
    DomainRoleEdit,
} from './DomainRole';

import {
    UserSiteDataShow,
    UserSiteDataCreate,
    UserSiteDataList,
    UserSiteDataEdit,
} from './UserSiteData';

import {
    UserSiteRoleShow,
    UserSiteRoleCreate,
    UserSiteRoleList,
} from './UserSiteRole';

import {
    SiteShow,
    SiteCreate,
    SiteList,
    SiteEdit,
} from './Site';

import {
    RoleShow,
    RoleCreate,
    RoleList,
    RoleEdit,
} from './Role';

import {
    SiteRoleShow,
    SiteRoleCreate,
    SiteRoleList,
    SiteRoleEdit,
} from './SiteRole';

import {
    PermissionShow,
    PermissionCreate,
    PermissionList,
    PermissionEdit,
} from './Permission';

import {
    UserShow,
    UserList,
    UserEdit,
} from './User';

import {
    SiteDataSchemaShow,
    SiteDataSchemaCreate,
    SiteDataSchemaList,
} from './SiteDataSchema';

import {
    InvitationSiteRoleShow,
    InvitationSiteRoleCreate,
    InvitationSiteRoleList,
} from './InvitationSiteRole';

import {
    RoleResourcePermissionShow,
    RoleResourcePermissionCreate,
    RoleResourcePermissionList,
} from './RoleResourcePermission';

import {
    InvitationDomainRoleShow,
    InvitationDomainRoleCreate,
    InvitationDomainRoleList,
} from './InvitationDomainRole';



const App = () => (
    <Admin title={"Girl Effect Management Layer"} restClient={swaggerRestServer('rest-url:port')}>
        <Resource
            name="invitations"
            show={ InvitationShow }
            create={ InvitationCreate }
            list={ InvitationList }
            edit={ InvitationEdit }
            remove={Delete}
        />
        <Resource
            name="adminnotes"
            show={ AdminNoteShow }
            create={ AdminNoteCreate }
            list={ AdminNoteList }
            edit={ AdminNoteEdit }
            remove={Delete}
        />
        <Resource
            name="clients"
            show={ ClientShow }
            list={ ClientList }
            remove={Delete}
        />
        <Resource
            name="domains"
            show={ DomainShow }
            create={ DomainCreate }
            list={ DomainList }
            edit={ DomainEdit }
            remove={Delete}
        />
        <Resource
            name="userdomainroles"
            show={ UserDomainRoleShow }
            create={ UserDomainRoleCreate }
            list={ UserDomainRoleList }
            remove={Delete}
        />
        <Resource
            name="resources"
            show={ ResourceShow }
            create={ ResourceCreate }
            list={ ResourceList }
            edit={ ResourceEdit }
            remove={Delete}
        />
        <Resource
            name="domainroles"
            show={ DomainRoleShow }
            create={ DomainRoleCreate }
            list={ DomainRoleList }
            edit={ DomainRoleEdit }
            remove={Delete}
        />
        <Resource
            name="usersitedata"
            show={ UserSiteDataShow }
            create={ UserSiteDataCreate }
            list={ UserSiteDataList }
            edit={ UserSiteDataEdit }
            remove={Delete}
        />
        <Resource
            name="usersiteroles"
            show={ UserSiteRoleShow }
            create={ UserSiteRoleCreate }
            list={ UserSiteRoleList }
            remove={Delete}
        />
        <Resource
            name="sites"
            show={ SiteShow }
            create={ SiteCreate }
            list={ SiteList }
            edit={ SiteEdit }
            remove={Delete}
        />
        <Resource
            name="roles"
            show={ RoleShow }
            create={ RoleCreate }
            list={ RoleList }
            edit={ RoleEdit }
            remove={Delete}
        />
        <Resource
            name="siteroles"
            show={ SiteRoleShow }
            create={ SiteRoleCreate }
            list={ SiteRoleList }
            edit={ SiteRoleEdit }
            remove={Delete}
        />
        <Resource
            name="permissions"
            show={ PermissionShow }
            create={ PermissionCreate }
            list={ PermissionList }
            edit={ PermissionEdit }
            remove={Delete}
        />
        <Resource
            name="users"
            show={ UserShow }
            list={ UserList }
            edit={ UserEdit }
            remove={Delete}
        />
        <Resource
            name="sitedataschemas"
            show={ SiteDataSchemaShow }
            create={ SiteDataSchemaCreate }
            list={ SiteDataSchemaList }
            remove={Delete}
        />
        <Resource
            name="invitationsiteroles"
            show={ InvitationSiteRoleShow }
            create={ InvitationSiteRoleCreate }
            list={ InvitationSiteRoleList }
            remove={Delete}
        />
        <Resource
            name="roleresourcepermissions"
            show={ RoleResourcePermissionShow }
            create={ RoleResourcePermissionCreate }
            list={ RoleResourcePermissionList }
            remove={Delete}
        />
        <Resource
            name="invitationdomainroles"
            show={ InvitationDomainRoleShow }
            create={ InvitationDomainRoleCreate }
            list={ InvitationDomainRoleList }
            remove={Delete}
        />
    </Admin>
)

export default App;