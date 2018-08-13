import {
    MANAGE_USER_ROLES_SET_USER,
    MANAGE_USER_ROLES_CHECK_ROLE_FOR_DELETE,
    MANAGE_USER_ROLES_DELETE_ROLE,
    MANAGE_USER_ROLES_SET_ASSIGNMENT_LOCATION,
    MANAGE_USER_ROLES_CHECK_ROLE_FOR_ASSIGN,
    MANAGE_USER_ROLES_ASSIGNING,
    MANAGE_USER_ROLES_ASSIGN_ROLE,
    MANAGE_USER_ROLES_ALL_ASSIGNED,
    MANAGE_USER_ROLES_RESET
} from '../actionTypes';

export const setUser = (selectedUser, userRoles) => ({
    type: MANAGE_USER_ROLES_SET_USER,
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

export const setAssignmentLocation = (managerRoles, key) => ({
    type: MANAGE_USER_ROLES_SET_ASSIGNMENT_LOCATION,
    payload: {
        managerRoles,
        key
    }
});

export const checkRoleForAssign = key => ({
    type: MANAGE_USER_ROLES_CHECK_ROLE_FOR_ASSIGN,
    payload: key
});

export const assigningRoles = assigning => ({
    type: MANAGE_USER_ROLES_ASSIGNING,
    payload: assigning
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
