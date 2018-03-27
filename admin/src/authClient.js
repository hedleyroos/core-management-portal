import { AUTH_LOGIN } from 'admin-on-rest';
import queryString from 'query-string';


export default (type, params) => {
    if (type === AUTH_LOGIN) {
        console.log(queryString);
        const { username, password } = params;

        const request = new Request('http://core-authentication-service:8000/openid/token/', {
            method: 'POST',
            body: queryString.stringify({
                username: username,
                password: password,
                grant_type: 'password',
                client_id: 'management_layer_workaround',
                client_secret: 'management_layer_workaround',
                scope: 'openid profile email address phone site roles'
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
            .then(({ access_token }) => {
                localStorage.setItem('access_token', access_token);
            });
    }
    return Promise.resolve();
}
