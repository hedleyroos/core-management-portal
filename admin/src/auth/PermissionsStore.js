/**
 * Generated authPermissions.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
class PermissionsStore {
    constructor() {
        if (!PermissionsStore.instance) {
            this.requiredPermissions = {
                domains: {
                    list: [],
                    create: [],
                    remove: [],
                    edit: [],
                },
                domainroles: {
                    list: [],
                    create: [],
                    remove: [],
                    edit: [],
                },
                invitations: {
                    list: [],
                    create: [],
                    remove: [],
                    edit: [],
                },
                invitationdomainroles: {
                    list: [],
                    create: [],
                    remove: [],
                },
                invitationsiteroles: {
                    list: [],
                    create: [],
                    remove: [],
                },
                permissions: {
                    list: [],
                    create: [],
                    remove: [],
                    edit: [],
                },
                resources: {
                    list: [],
                    create: [],
                    remove: [],
                    edit: [],
                },
                roles: {
                    list: [],
                    create: [],
                    remove: [],
                    edit: [],
                },
                roleresourcepermissions: {
                    list: [],
                    create: [],
                    remove: [],
                },
                sites: {
                    list: [],
                    create: [],
                    remove: [],
                    edit: [],
                },
                siteroles: {
                    list: [],
                    create: [],
                    remove: [],
                    edit: [],
                },
                userdomainroles: {
                    list: [],
                    create: [],
                    remove: [],
                },
                usersiteroles: {
                    list: [],
                    create: [],
                    remove: [],
                },
                usersitedata: {
                    list: [],
                    create: [],
                    remove: [],
                    edit: [],
                },
                adminnotes: {
                    list: [],
                    create: [],
                    remove: [],
                    edit: [],
                },
                sitedataschemas: {
                    list: [],
                    create: [],
                    remove: [],
                    edit: [],
                },
                clients: {
                    list: [],
                },
                users: {
                    list: [],
                    remove: [],
                    edit: [],
                },
            };
            this.permissionFlags = null;
            this.loadPermissions = this.loadPermissions.bind(this);
            this.getResourcePermission = this.getResourcePermission.bind(this);
            PermissionsStore.instance = this;
        }
        return PermissionsStore.instance;
    }
    loadPermissions(userPermissions) {
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
        Object.entries(this.requiredPermissions).map(
            ([resource, permissions]) => {
                this.permissionFlags[resource] = Object.entries(
                    permissions
                ).reduce((total, [action, required]) => {
                    total[action] = allowAccess(permissionSet, required);
                    return total;
                }, {});
                return null;
            }
        );
        localStorage.setItem(
            'permissions',
            JSON.stringify(this.permissionFlags)
        );
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
        console.error(
            'Permissions Store has not been loaded with user permissions! ' +
                'Please run `loadPermissions` with the user permissions.'
        );
    }
}

const storeInstance = new PermissionsStore();
Object.freeze(PermissionsStore);

export default storeInstance;

/** End of Generated Code **/
