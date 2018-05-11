import React, { Component } from 'react';
import { Redirect } from 'react-router';
import queryString from 'query-string';
import permissionsStore from '../auth/PermissionsStore';

class OIDCCallback extends Component {
    render () {
        const auth_state = localStorage.getItem('auth_state');
        const parsed_query = queryString.parse(this.props.location.search);
        if (auth_state !== parsed_query.state) {
            return (
                <Redirect push to="/login" />
            )
        }
        localStorage.setItem('id_token', parsed_query.id_token);
        let userPermissions = ["admin", "dude"];
        permissionsStore.loadPermissions(userPermissions);
        return (
            <Redirect push to="/" />
        )
    }
}

export default OIDCCallback;
