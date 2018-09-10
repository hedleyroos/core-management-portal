import { USER_SETTINGS_LOAD, USER_SETTINGS_HIDDEN_FIELDS_UPDATE } from '../actionTypes';

export default (state = {}, { type, payload }) => {
    switch (type) {
        case USER_SETTINGS_LOAD:
            return {
                data: payload.data,
                site_id: payload.site_id
            };
		case USER_SETTINGS_HIDDEN_FIELDS_UPDATE:
            return payload;
        default:
            return state;
    }
};
