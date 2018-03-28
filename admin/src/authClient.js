import { AUTH_LOGIN } from 'admin-on-rest';
import queryString from 'query-string';

const OPENID_PROVIDER_URL = 'http://core-authentication-service:8000/openid/token/';
const GRANT_TYPE = 'password';
const CLIENT_ID = 'management_layer_workaround';
const CLIENT_SECRET = 'management_layer_workaround';
const SCOPE = 'openid roles';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        console.log(queryString);
        const { username, password } = params;

        const request = new Request(OPENID_PROVIDER_URL, {
            method: 'POST',
            body: queryString.stringify({
                username: username,
                password: password,
                grant_type: GRANT_TYPE,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                scope: SCOPE
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
    return Promise.resolve();
}
