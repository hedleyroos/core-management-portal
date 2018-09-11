import { USER_SETTINGS_LOAD, USER_SETTINGS_HIDDEN_FIELDS_UPDATE } from '../actionTypes';

export const userSettingsLoad = data => ({
    type: USER_SETTINGS_LOAD,
    payload: data
});

export const userSettingsHiddenFieldsUpdate = newSettings => ({
    type: USER_SETTINGS_HIDDEN_FIELDS_UPDATE,
    payload: newSettings
});
