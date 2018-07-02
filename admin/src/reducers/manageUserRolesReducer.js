import {
    MANAGE_USER_ROLES_SET_MANAGER_PLACES,
    MANAGE_USER_ROLES_SET_SEARCH_RESULTS,
    MANAGE_USER_ROLES_SELECT_USER,
    MANAGE_USER_ROLES_CHECK_ROLE_FOR_DELETE,
    MANAGE_USER_ROLES_DELETE_ROLE,
    MANAGE_USER_ROLES_SET_ASSIGNMENT_LOCATION,
    MANAGE_USER_ROLES_CHECK_ROLE_FOR_ASSIGN,
    MANAGE_USER_ROLES_ALL_ASSIGNED,
    MANAGE_USER_ROLES_ASSIGN_ROLE,
    MANAGE_USER_ROLES_RESET,
    MANAGE_USER_ROLES_INVALID_TOKEN,
    MANAGE_USER_ROLES_SET_ROLE_MAPPING,
    MANAGE_USER_ROLES_SET_MANAGER_ROLES
} from '../actions/manageUserRoles';
import { createTreeData } from '../utils';

export default (state = { validToken: true }, { type, payload }) => {
    switch (type) {
        case MANAGE_USER_ROLES_SET_ROLE_MAPPING:
            return {
                roleMapping: payload.roleMapping
            };
        case MANAGE_USER_ROLES_SET_MANAGER_ROLES:
            return {
                managerRoles: payload.managerRoles
            };
        case MANAGE_USER_ROLES_SET_MANAGER_PLACES:
            return {
                managerDomains: payload.managerDomains,
                managerSites: payload.managerSites,
                treeData: createTreeData(
                    { ...payload.managerDomains, ...payload.managerSites },
                    'domain_id',
                    's'
                )
            };
        case MANAGE_USER_ROLES_SET_SEARCH_RESULTS:
            return {
                ...state,
                userResults: payload
            };
        case MANAGE_USER_ROLES_SELECT_USER:
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
            delete state.userRoles[payload];
            return {
                ...state,
                amountSelectedToDelete: state.amountSelectedToDelete - 1
            };
        case MANAGE_USER_ROLES_SET_ASSIGNMENT_LOCATION:
            return {
                ...state,
                assignmentLocation: payload,
                rolesToAssign: state.managerRoles[payload].reduce((accumulator, role) => {
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
            delete state.assignmentLocation;
            delete state.rolesToAssign;
            delete state.amountSelectedToAssign;
            return state;
        case MANAGE_USER_ROLES_RESET:
            return {
                managerDomains: payload.managerDomains,
                managerSites: payload.managerSites,
                managerRoles: payload.managerRoles,
                treeData: payload.treeData,
                roleMapping: payload.roleMapping
            };
        case MANAGE_USER_ROLES_INVALID_TOKEN:
            return {
                ...state,
                validToken: false
            };
        default:
            return state;
    }
};
