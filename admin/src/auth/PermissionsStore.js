/**
 * Generated authPermissions.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import restClient, { OPERATIONAL } from '../swaggerRestServer';

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
                organisationalunits: {
                    list: []
                },
                users: {
                    list: ['urn:ge:identity_provider:user:read'],
                    remove: ['urn:ge:identity_provider:user:delete'],
                    edit: ['urn:ge:identity_provider:user:update']
                }
            };
            this.permissionFlags = null;
            this.getAndLoadPermissions = this.getAndLoadPermissions.bind(this);
            this.loadPermissions = this.loadPermissions.bind(this);
            this.getResourcePermission = this.getResourcePermission.bind(this);
            this.manyResourcePermissions = this.manyResourcePermissions.bind(this);
            this.getPermissionFlags = this.getPermissionFlags.bind(this);
            PermissionsStore.instance = this;
        }
        return PermissionsStore.instance;
    }
    async getAndLoadPermissions(userID) {
        const response = await restClient(OPERATIONAL, 'all_user_roles', {
            pathParameters: [userID]
        });
        const contexts = Object.entries(response.data.roles_map).reduce(
            (result, [key, value]) => {
                if (value.length > 0) {
                    result[key] = value;
                }
                return result;
            },
            {}
        );
        const currentContext = Object.keys(contexts)[0]
        const splitName = currentContext.split(':');
        const permissions = await restClient(
            OPERATIONAL,
            splitName[0].indexOf('d') >= 0 ? 'user_domain_permissions' : 'user_site_permissions',
            {
                pathParameters: [userID, splitName[1]]
            }
        );
        this.loadPermissions(permissions.data, contexts, currentContext);
        return Promise.resolve({ contexts, currentContext });
    }
    loadPermissions(userPermissions, contexts, currentContext) {
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
            currentContext
        };
        localStorage.setItem('permissions', JSON.stringify(this.permissionFlags));
    }
    getResourcePermission(resource, permission) {
        if (this.permissionFlags) {
            return this.permissionFlags[resource][permission];
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
}

const storeInstance = new PermissionsStore();
Object.freeze(PermissionsStore);

export default storeInstance;

/** End of Generated Code **/
