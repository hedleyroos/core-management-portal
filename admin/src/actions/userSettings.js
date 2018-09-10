import { USER_SETTINGS_LOAD, USER_SETTINGS_HIDDEN_FIELDS_UPDATE } from '../actionTypes';

export const userSettingsLoad = (data, site_id) => ({
    type: USER_SETTINGS_LOAD,
    payload: {
        data,
        site_id
    }
});

export const userSettingsHiddenFieldsUpdate = newSettings => ({
    type: USER_SETTINGS_HIDDEN_FIELDS_UPDATE,
    payload: newSettings
});
