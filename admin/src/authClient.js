import { AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'admin-on-rest';
import queryString from 'query-string';

const OPENID_PROVIDER_URL = '//core-authentication-service:8000/openid/token/';
const CLIENT_ID = 'management_layer_workaround';
const CLIENT_SECRET = 'management_layer_workaround';

export default (type, params) => {
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('id_token');
        localStorage.removeItem('refresh_token');
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('id_token') ? Promise.resolve() : Promise.reject();
    }

    return Promise.resolve();
}
