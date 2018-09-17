import {
    MANAGE_ROLES_SET_OBJECT,
    MANAGE_ROLES_CHECK_ROLE_FOR_DELETE,
    MANAGE_ROLES_DELETE_ROLE,
    MANAGE_ROLES_SET_ASSIGNMENT_LOCATION,
    MANAGE_ROLES_CHECK_ROLE_FOR_ASSIGN,
    MANAGE_ROLES_ASSIGNING,
    MANAGE_ROLES_ALL_ASSIGNED,
    MANAGE_ROLES_ASSIGN_ROLE,
    MANAGE_ROLES_RESET,
    MANAGE_ROLES_SETUP,
    MANAGE_ROLES_INVALID_TOKEN
} from '../actionTypes';

export default (state = { validToken: true }, { type, payload }) => {
    switch (type) {
        case MANAGE_ROLES_SET_OBJECT:
            return {
                ...state,
                path: payload.path,
                selectedObject: payload.selectedObject,
                objectRoles: payload.objectRoles,
                amountSelectedToDelete: 0
            };
        case MANAGE_ROLES_CHECK_ROLE_FOR_DELETE:
            return {
                ...state,
                objectRoles: {
                    ...state.objectRoles,
                    [payload]: {
                        ...state.objectRoles[payload],
                        checked: !state.objectRoles[payload].checked
                    }
                },
                amountSelectedToDelete: !state.objectRoles[payload].checked
                    ? state.amountSelectedToDelete + 1
                    : state.amountSelectedToDelete - 1
            };
        case MANAGE_ROLES_DELETE_ROLE:
            const { [payload]: value, ...objectRoles } = state.objectRoles;
            return {
                ...state,
                objectRoles,
                amountSelectedToDelete: state.amountSelectedToDelete - 1
            };
        case MANAGE_ROLES_SET_ASSIGNMENT_LOCATION:
            const availableRolesSet = new Set(payload.availableRoles);
            return {
                ...state,
                assignmentLocation: payload.key,
                availableRoles: payload.availableRoles,
                rolesToAssign: state.managerRoles[payload.key].reduce((accumulator, role) => {
                    if (availableRolesSet.has(role.id)) {
                        accumulator[role.id] = {
                            ...role,
                            checked: false
                        };
                    }
                    return accumulator;
                }, {}),
                amountSelectedToAssign: 0
            };
        case MANAGE_ROLES_CHECK_ROLE_FOR_ASSIGN:
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
        case MANAGE_ROLES_ASSIGNING:
            return {
                ...state,
                assigning: payload
            };
        case MANAGE_ROLES_ASSIGN_ROLE:
            return {
                ...state,
                objectRoles: {
                    ...state.objectRoles,
                    [payload.key]: payload.objectRole
                },
                rolesToAssign: {
                    ...state.rolesToAssign,
                    [payload.objectRole.role.id]: {
                        ...state.rolesToAssign[payload.objectRole.role.id],
                        checked: false
                    }
                },
                amountSelectedToAssign: state.amountSelectedToAssign - 1
            };
        case MANAGE_ROLES_ALL_ASSIGNED:
            const {
                assignmentLocation,
                availableRoles,
                rolesToAssign,
                amountSelectedToAssign,
                ...nextState
            } = state;
            return nextState;
        case MANAGE_ROLES_RESET:
            return {
                validToken: state.validToken,
                roleMapping: state.roleMapping,
                managerRoles: state.managerRoles,
                managerDomains: state.managerDomains,
                managerSites: state.managerSites
            };
        case MANAGE_ROLES_SETUP:
            return {
                ...state,
                roleMapping: payload.roleMapping,
                managerRoles: payload.managerRoles,
                managerDomains: payload.managerDomains,
                managerSites: payload.managerSites
            };
        case MANAGE_ROLES_INVALID_TOKEN:
            return {
                ...state,
                validToken: false
            };
        default:
            return state;
    }
};
