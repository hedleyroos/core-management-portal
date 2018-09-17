import {
    MANAGE_ROLES_SET_OBJECT,
    MANAGE_ROLES_CHECK_ROLE_FOR_DELETE,
    MANAGE_ROLES_DELETE_ROLE,
    MANAGE_ROLES_SET_ASSIGNMENT_LOCATION,
    MANAGE_ROLES_CHECK_ROLE_FOR_ASSIGN,
    MANAGE_ROLES_ASSIGNING,
    MANAGE_ROLES_ASSIGN_ROLE,
    MANAGE_ROLES_ALL_ASSIGNED,
    MANAGE_ROLES_RESET,
    MANAGE_ROLES_SETUP,
    MANAGE_ROLES_INVALID_TOKEN
} from '../actionTypes';

export const setObject = (path, selectedObject, objectRoles) => ({
    type: MANAGE_ROLES_SET_OBJECT,
    payload: {
        path,
        selectedObject,
        objectRoles
    }
});

export const checkRoleForDelete = key => ({
    type: MANAGE_ROLES_CHECK_ROLE_FOR_DELETE,
    payload: key
});

export const deleteRole = key => ({
    type: MANAGE_ROLES_DELETE_ROLE,
    payload: key
});

export const setAssignmentLocation = (managerRoles, availableRoles, key) => ({
    type: MANAGE_ROLES_SET_ASSIGNMENT_LOCATION,
    payload: {
        managerRoles,
        availableRoles,
        key
    }
});

export const checkRoleForAssign = key => ({
    type: MANAGE_ROLES_CHECK_ROLE_FOR_ASSIGN,
    payload: key
});

export const assigningRoles = assigning => ({
    type: MANAGE_ROLES_ASSIGNING,
    payload: assigning
});

export const assignRole = (key, objectRole) => ({
    type: MANAGE_ROLES_ASSIGN_ROLE,
    payload: {
        key,
        objectRole
    }
});

export const allAssigned = () => ({
    type: MANAGE_ROLES_ALL_ASSIGNED
});

export const reset = () => ({
    type: MANAGE_ROLES_RESET
});

export const setupResources = setup => ({
    type: MANAGE_ROLES_SETUP,
    payload: setup
});

export const invalidToken = () => ({
    type: MANAGE_ROLES_INVALID_TOKEN
});
