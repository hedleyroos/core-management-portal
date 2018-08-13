import {
    MANAGE_INVITATION_ROLES_SET_INVITATION,
    MANAGE_INVITATION_ROLES_CHECK_ROLE_FOR_DELETE,
    MANAGE_INVITATION_ROLES_DELETE_ROLE,
    MANAGE_INVITATION_ROLES_SET_ASSIGNMENT_LOCATION,
    MANAGE_INVITATION_ROLES_CHECK_ROLE_FOR_ASSIGN,
    MANAGE_INVITATION_ROLES_ASSIGNING,
    MANAGE_INVITATION_ROLES_ALL_ASSIGNED,
    MANAGE_INVITATION_ROLES_ASSIGN_ROLE,
    MANAGE_INVITATION_ROLES_RESET
} from '../actionTypes';

export default (state = {}, { type, payload }) => {
    switch (type) {
        case MANAGE_INVITATION_ROLES_SET_INVITATION:
            return {
                ...state,
                selectedInvitation: payload.selectedInvitation,
                invitationRoles: payload.invitationRoles,
                amountSelectedToDelete: 0
            };
        case MANAGE_INVITATION_ROLES_CHECK_ROLE_FOR_DELETE:
            return {
                ...state,
                invitationRoles: {
                    ...state.invitationRoles,
                    [payload]: {
                        ...state.invitationRoles[payload],
                        checked: !state.invitationRoles[payload].checked
                    }
                },
                amountSelectedToDelete: !state.invitationRoles[payload].checked
                    ? state.amountSelectedToDelete + 1
                    : state.amountSelectedToDelete - 1
            };
        case MANAGE_INVITATION_ROLES_DELETE_ROLE:
            const { [payload]: value, ...invitationRoles } = state.invitationRoles;
            return {
                ...state,
                invitationRoles,
                amountSelectedToDelete: state.amountSelectedToDelete - 1
            };
        case MANAGE_INVITATION_ROLES_SET_ASSIGNMENT_LOCATION:
            return {
                ...state,
                assignmentLocation: payload.key,
                rolesToAssign: payload.managerRoles[payload.key].reduce((accumulator, role) => {
                    accumulator[role.id] = {
                        ...role,
                        checked: false
                    };
                    return accumulator;
                }, {}),
                amountSelectedToAssign: 0
            };
        case MANAGE_INVITATION_ROLES_CHECK_ROLE_FOR_ASSIGN:
            return {
                ...state,
                rolesToAssign: {
                    ...state.rolesToAssign,
                    [payload]: {
                        ...state.rolesToAssign[payload],
                        checked: !state.rolesToAssign[payload].checked
                    }
                },
                amountSelectedToAssign: !state.rolesToAssign[payload].checked
                    ? state.amountSelectedToAssign + 1
                    : state.amountSelectedToAssign - 1
            };
        case MANAGE_INVITATION_ROLES_ASSIGNING:
            return {
                ...state,
                assigning: payload
            };
        case MANAGE_INVITATION_ROLES_ASSIGN_ROLE:
            return {
                ...state,
                invitationRoles: {
                    ...state.invitationRoles,
                    [payload.key]: payload.invitationRole
                },
                rolesToAssign: {
                    ...state.rolesToAssign,
                    [payload.invitationRole.role.id]: {
                        ...state.rolesToAssign[payload.invitationRole.role.id],
                        checked: false
                    }
                },
                amountSelectedToAssign: state.amountSelectedToAssign - 1
            };
        case MANAGE_INVITATION_ROLES_ALL_ASSIGNED:
            const {
                assignmentLocation,
                rolesToAssign,
                amountSelectedToAssign,
                ...nextState
            } = state;
            return {
                ...nextState,
                assigning: false
            };
        case MANAGE_INVITATION_ROLES_RESET:
            return {};
        default:
            return state;
    }
};
