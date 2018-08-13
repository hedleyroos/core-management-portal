import {
    MANAGE_INVITATION_ROLES_SET_INVITATION,
    MANAGE_INVITATION_ROLES_CHECK_ROLE_FOR_DELETE,
    MANAGE_INVITATION_ROLES_DELETE_ROLE,
    MANAGE_INVITATION_ROLES_SET_ASSIGNMENT_LOCATION,
    MANAGE_INVITATION_ROLES_CHECK_ROLE_FOR_ASSIGN,
    MANAGE_INVITATION_ROLES_ASSIGNING,
    MANAGE_INVITATION_ROLES_ASSIGN_ROLE,
    MANAGE_INVITATION_ROLES_ALL_ASSIGNED,
    MANAGE_INVITATION_ROLES_RESET
} from '../actionTypes';

export const setInvitation = (selectedInvitation, invitationRoles) => ({
    type: MANAGE_INVITATION_ROLES_SET_INVITATION,
    payload: {
        selectedInvitation,
        invitationRoles
    }
});

export const checkRoleForDelete = key => ({
    type: MANAGE_INVITATION_ROLES_CHECK_ROLE_FOR_DELETE,
    payload: key
});

export const deleteRole = key => ({
    type: MANAGE_INVITATION_ROLES_DELETE_ROLE,
    payload: key
});

export const setAssignmentLocation = (managerRoles, key) => ({
    type: MANAGE_INVITATION_ROLES_SET_ASSIGNMENT_LOCATION,
    payload: {
        managerRoles,
        key
    }
});

export const checkRoleForAssign = key => ({
    type: MANAGE_INVITATION_ROLES_CHECK_ROLE_FOR_ASSIGN,
    payload: key
});

export const assigningRoles = assigning => ({
    type: MANAGE_INVITATION_ROLES_ASSIGNING,
    payload: assigning
});

export const assignRole = (key, invitationRole) => ({
    type: MANAGE_INVITATION_ROLES_ASSIGN_ROLE,
    payload: {
        key,
        invitationRole
    }
});

export const allAssigned = () => ({
    type: MANAGE_INVITATION_ROLES_ALL_ASSIGNED
});

export const reset = () => ({
    type: MANAGE_INVITATION_ROLES_RESET
});
