import React, { Component } from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import LockIcon from 'material-ui/svg-icons/action/lock-outline';
import { teal500, teal800 } from 'material-ui/styles/colors';

import { userLogin } from 'admin-on-rest';

import { muiTheme, styles } from '../Theme';
import { generateNonce, generateQueryString } from '../utils';

const OIDC_PROVIDER_URL = process.env.REACT_APP_AUTHORIZATION_ENDPOINT;
const OIDC_PROVIDER_SCOPE = 'openid profile roles';
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
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={{ ...styles.main, backgroundColor: teal800 }}>
                    <Card style={styles.card}>
                        <div style={styles.avatar}>
                            <Avatar backgroundColor={teal500} icon={<LockIcon />} size={60} />
                        </div>
                        <CardActions>
                            <p style={styles.avatar}>Login with Girl Effect OIDC Provider</p>
                            <RaisedButton
                                type="button"
                                href={loginUrl}
                                primary
                                label="Login"
                                fullWidth
                            />
                        </CardActions>
                    </Card>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(
    undefined,
    { userLogin }
)(AuthLoginPage);
