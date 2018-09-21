import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/LockOutline';
import teal from '@material-ui/core/colors/teal';

import { styles } from '../theme';
import { generateNonce, generateQueryString } from '../utils';

const OIDC_PROVIDER_URL = process.env.REACT_APP_AUTHORIZATION_ENDPOINT;
const OIDC_PROVIDER_SCOPE = 'openid profile roles site';
const OIDC_PROVIDER_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const OIDC_PROVIDER_REDIRECT_URI =
    process.env.REACT_APP_PORTAL_URL + process.env.REACT_APP_PORTAL_LOGIN_CALLBACK;

const OIDC_QUERY_ARGUMENTS = {
    scope: `${OIDC_PROVIDER_SCOPE}`,
    response_type: `id_token token`,
    client_id: `${OIDC_PROVIDER_CLIENT_ID}`,
    redirect_uri: `${OIDC_PROVIDER_REDIRECT_URI}`
};

/* The following link describes the difference between the state and nonce parameters nicely:
https://stackoverflow.com/questions/46844285/difference-between-oauth-2-0-state-and-openid-nonce-parameter-why-state-cou

To summarise:
* the `state` parameter is used to protect against CSRF attacks
* the `nonce` parameter is a token validation parameter, since the nonce will be contained in the token returned

*/

class AuthLoginPage extends Component {
    render() {
        let queryArguments = {};

        Object.keys(OIDC_QUERY_ARGUMENTS).forEach(function(key) {
            queryArguments[key] = OIDC_QUERY_ARGUMENTS[key];
        });
        queryArguments.state = btoa(new Date());
        queryArguments.nonce = generateNonce();

        // Store values so that they can be used for validation in OIDCCallback.js
        localStorage.setItem('auth_state', queryArguments.state);
        localStorage.setItem('auth_nonce', queryArguments.nonce);

        const queryString = generateQueryString(queryArguments);
        const loginUrl = `${OIDC_PROVIDER_URL}?${queryString}`;
        return (
            <div style={styles.main}>
                <Card style={styles.card}>
                    <div style={styles.avatarDiv}>
                        <Avatar style={{ ...styles.avatar, backgroundColor: teal[500] }}>
                            <LockIcon />
                        </Avatar>
                        <p>Login with Girl Effect OIDC Provider</p>
                    </div>
                    <CardActions>
                        <Button variant="contained" href={loginUrl} color="primary" fullWidth>
                            Login
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default AuthLoginPage;
