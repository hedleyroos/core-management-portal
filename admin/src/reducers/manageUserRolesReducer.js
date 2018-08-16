import {
    MANAGE_USER_ROLES_SET_USER,
    MANAGE_USER_ROLES_CHECK_ROLE_FOR_DELETE,
    MANAGE_USER_ROLES_DELETE_ROLE,
    MANAGE_USER_ROLES_SET_ASSIGNMENT_LOCATION,
    MANAGE_USER_ROLES_CHECK_ROLE_FOR_ASSIGN,
    MANAGE_USER_ROLES_ASSIGNING,
    MANAGE_USER_ROLES_ALL_ASSIGNED,
    MANAGE_USER_ROLES_ASSIGN_ROLE,
    MANAGE_USER_ROLES_RESET
} from '../actionTypes';

export default (state = {}, { type, payload }) => {
    switch (type) {
        case MANAGE_USER_ROLES_SET_USER:
            return {
                ...state,
                selectedUser: payload.selectedUser,
                userRoles: payload.userRoles,
                amountSelectedToDelete: 0
            };
        case MANAGE_USER_ROLES_CHECK_ROLE_FOR_DELETE:
            return {
                ...state,
                userRoles: {
                    ...state.userRoles,
                    [payload]: {
                        ...state.userRoles[payload],
                        checked: !state.userRoles[payload].checked
                    }
                },
                amountSelectedToDelete: !state.userRoles[payload].checked
                    ? state.amountSelectedToDelete + 1
                    : state.amountSelectedToDelete - 1
            };
        case MANAGE_USER_ROLES_DELETE_ROLE:
            const { [payload]: value, ...userRoles } = state.userRoles;
            return {
                ...state,
                userRoles,
                amountSelectedToDelete: state.amountSelectedToDelete - 1
            };
        case MANAGE_USER_ROLES_SET_ASSIGNMENT_LOCATION:
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
        case MANAGE_USER_ROLES_CHECK_ROLE_FOR_ASSIGN:
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
        case MANAGE_USER_ROLES_ASSIGNING:
            return {
                ...state,
                assigning: payload
            };
        case MANAGE_USER_ROLES_ASSIGN_ROLE:
            return {
                ...state,
                userRoles: {
                    ...state.userRoles,
                    [payload.key]: payload.userRole
                },
                rolesToAssign: {
                    ...state.rolesToAssign,
                    [payload.userRole.role.id]: {
                        ...state.rolesToAssign[payload.userRole.role.id],
                        checked: false
                    }
                },
                amountSelectedToAssign: state.amountSelectedToAssign - 1
            };
        case MANAGE_USER_ROLES_ALL_ASSIGNED:
            const {
                assignmentLocation,
                rolesToAssign,
                amountSelectedToAssign,
                ...nextState
            } = state;
            return nextState;
        case MANAGE_USER_ROLES_RESET:
            return {};
        default:
            return state;
    }
};
