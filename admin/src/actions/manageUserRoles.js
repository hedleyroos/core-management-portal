export const MANAGE_USER_ROLES_SET_ROLE_MAPPING = 'MANAGE_USER_ROLES_SET_ROLE_MAPPING';
export const MANAGE_USER_ROLES_SET_MANAGER_ROLES = 'MANAGE_USER_ROLES_SET_MANAGER_ROLES';
export const MANAGE_USER_ROLES_SET_MANAGER_PLACES = 'MANAGE_USER_ROLES_SET_MANAGER_PLACES';
export const MANAGE_USER_ROLES_SET_SEARCH_RESULTS = 'MANAGE_USER_ROLES_SET_SEARCH_RESULTS';
export const MANAGE_USER_ROLES_SELECT_USER = 'MANAGE_USER_ROLES_SELECT_USER';
export const MANAGE_USER_ROLES_CHECK_ROLE_FOR_DELETE = 'MANAGE_USER_ROLES_CHECK_ROLE_FOR_DELETE';
export const MANAGE_USER_ROLES_DELETE_ROLE = 'MANAGE_USER_ROLES_DELETE_ROLES';
export const MANAGE_USER_ROLES_SET_ASSIGNMENT_LOCATION =
    'MANAGE_USER_ROLES_SET_ASSIGNMENT_LOCATION';
export const MANAGE_USER_ROLES_CHECK_ROLE_FOR_ASSIGN = 'MANAGE_USER_ROLES_CHECK_ROLE_FOR_ASSIGN';
export const MANAGE_USER_ROLES_ASSIGN_ROLE = 'MANAGE_USER_ROLES_ASSIGN_ROLE';
export const MANAGE_USER_ROLES_ALL_ASSIGNED = 'MANAGE_USER_ROLES_ALL_ASSIGNED';
export const MANAGE_USER_ROLES_RESET = 'MANAGE_USER_ROLES_RESET';
export const MANAGE_USER_ROLES_INVALID_TOKEN = 'MANAGE_USER_ROLES_INVALID_TOKEN';

export const setRoleMapping = roleMapping => ({
    type: MANAGE_USER_ROLES_SET_ROLE_MAPPING,
    payload: roleMapping
});

export const setManagerRoles = managerRoles => ({
    type: MANAGE_USER_ROLES_SET_MANAGER_ROLES,
    payload: managerRoles
});

export const setManagerPlaces = (managerDomains, managerSites) => ({
    type: MANAGE_USER_ROLES_SET_MANAGER_PLACES,
    payload: {
        managerDomains,
        managerSites
    }
});

export const setSearchResults = userResults => ({
    type: MANAGE_USER_ROLES_SET_SEARCH_RESULTS,
    payload: userResults
});

export const selectUser = (selectedUser, userRoles) => ({
    type: MANAGE_USER_ROLES_SELECT_USER,
    payload: {
        selectedUser,
        userRoles
    }
});

export const checkRoleForDelete = key => ({
    type: MANAGE_USER_ROLES_CHECK_ROLE_FOR_DELETE,
    payload: key
});

export const deleteRole = key => ({
    type: MANAGE_USER_ROLES_DELETE_ROLE,
    payload: key
});

export const setAssignmentLocation = key => ({
    type: MANAGE_USER_ROLES_SET_ASSIGNMENT_LOCATION,
    payload: key
});

export const checkRoleForAssign = key => ({
    type: MANAGE_USER_ROLES_CHECK_ROLE_FOR_ASSIGN,
    payload: key
});

export const assignRole = (key, userRole) => ({
    type: MANAGE_USER_ROLES_ASSIGN_ROLE,
    payload: {
        key,
        userRole
    }
});

export const allAssigned = () => ({
    type: MANAGE_USER_ROLES_ALL_ASSIGNED
});

export const reset = () => ({
    type: MANAGE_USER_ROLES_RESET
});

export const invalidToken = () => ({
    type: MANAGE_USER_ROLES_INVALID_TOKEN
});
