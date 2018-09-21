import { AUTH_CHECK, AUTH_ERROR } from 'react-admin';
import { apiErrorHandler } from '../utils';

export default (type, params) => {
    if (type === AUTH_ERROR) {
        const invalidToken = apiErrorHandler(params);
        if (invalidToken) {
            localStorage.removeItem('id_token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('id_token') && localStorage.getItem('permissions')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.resolve();
};
