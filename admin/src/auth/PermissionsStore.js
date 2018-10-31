/**
 * Generated authPermissions.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import dataProvider, { OPERATIONAL, GET_ONE } from '../dataProvider';
import { getContextAlphabeticallyFirst, getSitesForContext, notEmptyObject } from '../utils';
import { PLACE_MAPPING } from '../constants';

class PermissionsStore {
    constructor() {
        if (!PermissionsStore.instance) {
            this.requiredPermissions = {
                domains: {
                    list: ['urn:ge:access_control:domain:read'],
                    create: ['urn:ge:access_control:domain:create'],
                    remove: ['urn:ge:access_control:domain:delete'],
                    edit: ['urn:ge:access_control:domain:update']
                },
                domainroles: {
                    list: ['urn:ge:access_control:domainrole:read'],
                    create: ['urn:ge:access_control:domainrole:create'],
                    remove: ['urn:ge:access_control:domainrole:delete'],
                    edit: ['urn:ge:access_control:domainrole:update']
                },
                invitations: {
                    list: ['urn:ge:access_control:invitation:read'],
                    create: ['urn:ge:access_control:invitation:create'],
                    remove: ['urn:ge:access_control:invitation:delete'],
                    edit: ['urn:ge:access_control:invitation:update']
                },
                invitationredirecturls: {
                    list: ['urn:ge:access_control:invitationredirecturl:read'],
                    create: ['urn:ge:access_control:invitationredirecturl:create'],
                    remove: ['urn:ge:access_control:invitationredirecturl:delete'],
                    edit: ['urn:ge:access_control:invitationredirecturl:update']
                },
                invitationdomainroles: {
                    list: ['urn:ge:access_control:invitationdomainrole:read'],
                    create: ['urn:ge:access_control:invitationdomainrole:create'],
                    remove: ['urn:ge:access_control:invitationdomainrole:delete']
                },
                invitationsiteroles: {
                    list: ['urn:ge:access_control:invitationsiterole:read'],
                    create: ['urn:ge:access_control:invitationsiterole:create'],
                    remove: ['urn:ge:access_control:invitationsiterole:delete']
                },
                permissions: {
                    list: ['urn:ge:access_control:permission:read'],
                    create: ['urn:ge:access_control:permission:create'],
                    remove: ['urn:ge:access_control:permission:delete'],
                    edit: ['urn:ge:access_control:permission:update']
                },
                resources: {
                    list: ['urn:ge:access_control:resource:read'],
                    create: ['urn:ge:access_control:resource:create'],
                    remove: ['urn:ge:access_control:resource:delete'],
                    edit: ['urn:ge:access_control:resource:update']
                },
                roles: {
                    list: ['urn:ge:access_control:role:read'],
                    create: ['urn:ge:access_control:role:create'],
                    remove: ['urn:ge:access_control:role:delete'],
                    edit: ['urn:ge:access_control:role:update']
                },
                roleresourcepermissions: {
                    list: ['urn:ge:access_control:roleresourcepermission:read'],
                    create: ['urn:ge:access_control:roleresourcepermission:create'],
                    remove: ['urn:ge:access_control:roleresourcepermission:delete']
                },
                sites: {
                    list: ['urn:ge:access_control:site:read'],
                    create: ['urn:ge:access_control:site:create'],
                    remove: ['urn:ge:access_control:site:delete'],
                    edit: ['urn:ge:access_control:site:update']
                },
                siteroles: {
                    list: ['urn:ge:access_control:siterole:read'],
                    create: ['urn:ge:access_control:siterole:create'],
                    remove: ['urn:ge:access_control:siterole:delete'],
                    edit: ['urn:ge:access_control:siterole:update']
                },
                userdomainroles: {
                    list: ['urn:ge:access_control:userdomainrole:read'],
                    create: ['urn:ge:access_control:userdomainrole:create'],
                    remove: ['urn:ge:access_control:userdomainrole:delete']
                },
                usersiteroles: {
                    list: ['urn:ge:access_control:usersiterole:read'],
                    create: ['urn:ge:access_control:usersiterole:create'],
                    remove: ['urn:ge:access_control:usersiterole:delete']
                },
                usersitedata: {
                    list: ['urn:ge:user_data:usersitedata:read'],
                    create: ['urn:ge:user_data:usersitedata:create'],
                    remove: ['urn:ge:user_data:usersitedata:delete'],
                    edit: ['urn:ge:user_data:usersitedata:update']
                },
                deletedusers: {
                    list: ['urn:ge:user_data:deleteduser:read'],
                    create: ['urn:ge:user_data:deleteduser:create'],
                    remove: ['urn:ge:user_data:deleteduser:delete'],
                    edit: ['urn:ge:user_data:deleteduser:update']
                },
                deletedusersites: {
                    list: ['urn:ge:user_data:deletedusersite:read'],
                    create: ['urn:ge:user_data:deletedusersite:create'],
                    remove: ['urn:ge:user_data:deletedusersite:delete'],
                    edit: ['urn:ge:user_data:deletedusersite:update']
                },
                adminnotes: {
                    list: ['urn:ge:user_data:adminnote:read'],
                    create: ['urn:ge:user_data:adminnote:create'],
                    remove: ['urn:ge:user_data:adminnote:delete'],
                    edit: ['urn:ge:user_data:adminnote:update']
                },
                sitedataschemas: {
                    list: ['urn:ge:user_data:sitedataschema:read'],
                    create: ['urn:ge:user_data:sitedataschema:create'],
                    remove: ['urn:ge:user_data:sitedataschema:delete'],
                    edit: ['urn:ge:user_data:sitedataschema:update']
                },
                clients: {
                    list: ['urn:ge:identity_provider:oidc_provider:client:read']
                },
                countries: {
                    list: []
                },
                organisations: {
                    list: ['urn:ge:identity_provider:organisation:read'],
                    create: ['urn:ge:identity_provider:organisation:create'],
                    remove: ['urn:ge:identity_provider:organisation:delete'],
                    edit: ['urn:ge:identity_provider:organisation:update']
                },
                users: {
                    list: ['urn:ge:identity_provider:user:read'],
                    remove: ['urn:ge:identity_provider:user:delete'],
                    edit: ['urn:ge:identity_provider:user:update']
                }
            };
            this.permissionFlags = null;
            this.getAllUserRoles = this.getAllUserRoles.bind(this);
            this.getAndLoadPermissions = this.getAndLoadPermissions.bind(this);
            this.loadPermissions = this.loadPermissions.bind(this);
            this.getResourcePermission = this.getResourcePermission.bind(this);
            this.manyResourcePermissions = this.manyResourcePermissions.bind(this);
            this.getPermissionFlags = this.getPermissionFlags.bind(this);
            this.getAllContexts = this.getAllContexts.bind(this);
            this.getCurrentContext = this.getCurrentContext.bind(this);
            this.getSiteIDs = this.getSiteIDs.bind(this);
            this.getTreeData = this.getTreeData.bind(this);
            PermissionsStore.instance = this;
        }
        return PermissionsStore.instance;
    }
    getAllUserRoles(userID) {
        return dataProvider(OPERATIONAL, 'all_user_roles', {
            pathParameters: [userID]
        }).then(response => {
            return Object.entries(response.data.roles_map).reduce((result, [key, value]) => {
                if (value.length > 0) {
                    result[key] = value;
                }
                return result;
            }, {});
        });
    }
    getAndLoadPermissions({ userID, currentContext = null, contexts = null, treeData = null }) {
        let contextType = null,
            contextID = null;
        treeData = this.getTreeData() || treeData;
        contexts = !contexts ? this.getAllContexts() : contexts;
        if (notEmptyObject(contexts)) {
            if (!currentContext) {
                currentContext =
                    treeData.length > 1 ? getContextAlphabeticallyFirst(treeData) : treeData[0].key;
            }
            [contextType, contextID] = currentContext.split(':');

            // All calls wrapped in a Promise.all() for all to be done before carrying on.
            return Promise.all([
                dataProvider(OPERATIONAL, `user_${PLACE_MAPPING[contextType]}_permissions`, {
                    pathParameters: [userID, contextID]
                }),
                dataProvider(GET_ONE, `${PLACE_MAPPING[contextType]}s`, { id: contextID }),
                getSitesForContext(currentContext)
            ]).then(([permissions, currentContextObject, siteIDs]) => {
                this.loadPermissions(
                    permissions.data,
                    contexts,
                    {
                        key: currentContext,
                        obj: currentContextObject.data
                    },
                    siteIDs,
                    treeData
                );
            });
        }
        return Promise.resolve();
    }
    loadPermissions(userPermissions, contexts, currentContext, siteIDs, treeData) {
        this.permissionFlags = {};
        const allowAccess = (userPermissions, requiredPermissions) => {
            if (requiredPermissions.length > 0) {
                return requiredPermissions.every(permission => {
                    return userPermissions.has(permission);
                });
            } else {
                return true;
            }
        };
        const permissionSet = new Set(userPermissions);
        Object.entries(this.requiredPermissions).map(([resource, permissions]) => {
            this.permissionFlags[resource] = Object.entries(permissions).reduce(
                (total, [action, required]) => {
                    total[action] = allowAccess(permissionSet, required);
                    return total;
                },
                {}
            );
            return null;
        });
        this.permissionFlags = {
            ...this.permissionFlags,
            contexts,
            currentContext,
            siteIDs,
            treeData
        };
        localStorage.setItem('permissions', JSON.stringify(this.permissionFlags));
    }
    getResourcePermission(resource, permission) {
        if (this.permissionFlags) {
            return this.permissionFlags[resource] && this.permissionFlags[resource][permission];
        } else {
            let userPermissions = localStorage.getItem('permissions');
            if (userPermissions) {
                this.permissionFlags = JSON.parse(userPermissions);
                return this.permissionFlags[resource][permission];
            }
        }
        console.log('Permissions store not loaded yet.');
        return false;
    }
    manyResourcePermissions(resourcePermissions) {
        return resourcePermissions.every(([resource, permission]) =>
            this.getResourcePermission(resource, permission)
        );
    }
    getPermissionFlags() {
        if (!this.permissionFlags) {
            let userPermissions = localStorage.getItem('permissions');
            if (userPermissions) {
                this.permissionFlags = JSON.parse(userPermissions);
            }
        }
        return this.permissionFlags;
    }
    getAllContexts() {
        const permissions = this.getPermissionFlags();
        return permissions ? permissions.contexts : {};
    }
    getCurrentContext() {
        const permissions = this.getPermissionFlags();
        return permissions ? permissions.currentContext : {};
    }
    getSiteIDs() {
        const permissions = this.getPermissionFlags();
        return permissions ? permissions.siteIDs : '';
    }
    getTreeData() {
        const permissions = this.getPermissionFlags();
        return permissions ? permissions.treeData : null;
    }
}

const storeInstance = new PermissionsStore();
Object.freeze(PermissionsStore);

export default storeInstance;

/** End of Generated Code **/
