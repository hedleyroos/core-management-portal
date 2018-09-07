import { USER_SETTINGS_LOAD, USER_SETTINGS_UPDATE } from '../actionTypes';

export const user_settings_load = settings => ({
    type: USER_SETTINGS_LOAD,
    payload: settings
});

export const user_settings_update = (resource, fields) => ({
    type: USER_SETTINGS_UPDATE,
    payload: {
        resource,
        fields
    }
});
