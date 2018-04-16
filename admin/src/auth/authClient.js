import { AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'admin-on-rest';

export default (type, params) => {
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('id_token');
        localStorage.removeItem('auth_state');
    }
    if (type === AUTH_ERROR) {
        if (params.message === 'Token expired') {
            localStorage.removeItem('id_token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('id_token') ? Promise.resolve() : Promise.reject();
    }

    return Promise.resolve();
}
