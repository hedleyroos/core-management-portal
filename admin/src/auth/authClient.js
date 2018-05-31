import { AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR, AUTH_GET_PERMISSIONS } from 'admin-on-rest';
import { GenerateQueryString } from '../utils';
import PermissionsStore from './PermissionsStore';

export default (type, params) => {
    if (type === AUTH_LOGOUT) {
        if (localStorage.getItem('id_token')) {
            const logoutQueryString = GenerateQueryString({
                id_token_hint: localStorage.getItem('id_token'),
                post_logout_redirect_uri: process.env.REACT_APP_PORTAL_URL
            })
            localStorage.removeItem('id_token');
            localStorage.removeItem('auth_state');
            localStorage.removeItem('permissions');
            let logoutURL = `${process.env.REACT_APP_LOGOUT_URL}?${logoutQueryString}`;
            window.location.href = logoutURL;
        }
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
    if (type === AUTH_GET_PERMISSIONS) {
        return Promise.resolve(PermissionsStore);
    }
    return Promise.resolve();
}
