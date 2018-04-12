import { AUTH_LOGOUT, AUTH_CHECK } from 'admin-on-rest';

export default (type, params) => {
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('id_token');
        localStorage.removeItem('auth_state');
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('id_token') ? Promise.resolve() : Promise.reject();
    }

    return Promise.resolve();
}
