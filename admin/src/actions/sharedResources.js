import { SHARED_RESOURCES_SETUP, SHARED_RESOURCES_INVALID_TOKEN } from '../actionTypes';

export const setupResources = setup => ({
    type: SHARED_RESOURCES_SETUP,
    payload: setup
});

export const invalidToken = () => ({
    type: SHARED_RESOURCES_INVALID_TOKEN
});
