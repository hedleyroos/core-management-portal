import { SHARED_RESOURCES_SETUP, SHARED_RESOURCES_INVALID_TOKEN } from '../actionTypes';

export default (state = { validToken: true }, { type, payload }) => {
    switch (type) {
        case SHARED_RESOURCES_SETUP:
            return {
                ...state,
                roleMapping: payload.roleMapping,
                managerRoles: payload.managerRoles,
                managerDomains: payload.managerDomains,
                managerSites: payload.managerSites
            };
        case SHARED_RESOURCES_INVALID_TOKEN:
            return {
                ...state,
                validToken: false
            };
        default:
            return state;
    }
};
