import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'admin-on-rest';
import queryString from 'query-string';

const OPENID_PROVIDER_URL = '//core-authentication-service:8000/openid/token/';
const GRANT_TYPE = 'password';
const CLIENT_ID = 'management_layer_workaround';
const CLIENT_SECRET = 'management_layer_workaround';
const SCOPE = 'openid roles';

export default (type, params) => {
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('id_token');
        localStorage.removeItem('refresh_token');
    }
    if (type === AUTH_ERROR) {
        const refresh_token = localStorage.getItem('refresh_token');
        const request = new Request(OPENID_PROVIDER_URL, {
            method: 'POST',
            body: queryString.stringify({
                grant_type: 'refresh_token',
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                refresh_token: refresh_token
            }),
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ id_token }) => {
                localStorage.setItem('id_token', id_token);
            });
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('id_token') ? Promise.resolve() : Promise.reject();
    }

    return Promise.resolve();
}
