import React, { Component } from 'react';
import { Redirect } from 'react-router';
import queryString from 'query-string';
import jwtDecode from 'jwt-decode';
import restClient, { OPERATIONAL } from '../swaggerRestServer';
import permissionsStore from '../auth/PermissionsStore';

class OIDCCallback extends Component {
    render() {
        const auth_state = localStorage.getItem('auth_state');
        const parsed_query = queryString.parse(this.props.location.search);
        if (auth_state !== parsed_query.state) {
            return <Redirect push to="/login" />;
        }
        localStorage.setItem('id_token', parsed_query.id_token);
        restClient(OPERATIONAL, 'user_management_portal_permissions', {
            pathParameters: [jwtDecode(parsed_query.id_token).sub]
        })
            .then(response => {
                permissionsStore.loadPermissions(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        return <Redirect push to="/" />;
    }
}

export default OIDCCallback;
