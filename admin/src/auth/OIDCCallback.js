import jwtDecode from 'jwt-decode';
import { Card } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import queryString from 'query-string';
import React, { Component } from 'react';
import { Redirect } from 'react-router';

import permissionsStore from './PermissionsStore';
import restClient, { OPERATIONAL } from '../swaggerRestServer';
import { styles } from '../Theme';
import { base64urlDecode } from '../utils';

class OIDCCallback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            failure: false,
            loginComplete: false
        };
        this.getTokenAndPermissions = this.getTokenAndPermissions.bind(this);
    }
    componentWillMount() {
        this.getTokenAndPermissions();
    }
    getTokenAndPermissions() {
        const parsedQuery = queryString.parse(this.props.location.search);

        // Check that the state returned in the URL matches the one stored.
        const authState = localStorage.getItem('auth_state');
        const incorrectState = authState !== parsedQuery.state;
        // Check that the nonce returned in the id token matches the one stored.
        const segments = parsedQuery.id_token.split('.');
        const incorrectSegmentAmount = segments.length !== 3;
        // All segment are base64 encoded
        const payloadSeg = segments[1];
        const payload = JSON.parse(base64urlDecode(payloadSeg));
        // Check that the nonce returned is correct.
        const authNonce = localStorage.getItem('auth_nonce');
        const incorrectNonce = authNonce !== payload.nonce;
        // Check if none of all the above checks failed.
        if (incorrectState || incorrectSegmentAmount || incorrectNonce) {
            console.error(
                incorrectSegmentAmount
                    ? 'Token contains ' +
                      segments.length +
                      ' segments, but it should have 3.'
                    : incorrectNonce
                        ? 'Nonce mismatch: ' + authNonce + ' ' + payload.nonce
                        : 'State mismatch: ' +
                          authState +
                          ' ' +
                          parsedQuery.state
            );
            this.setState({ failure: true });
        } else {
            // Everything checked out. Store the id token.
            localStorage.setItem('id_token', parsedQuery.id_token);

            restClient(OPERATIONAL, 'user_management_portal_permissions', {
                pathParameters: [jwtDecode(parsedQuery.id_token).sub]
            })
                .then(response => {
                    permissionsStore.loadPermissions(response.data);
                    this.setState({ loginComplete: true });
                })
                .catch(error => {
                    console.error(error);
                    this.setState({ failure: true });
                });
        }
    }
    render() {
        // // Reload page after login id_token and permissions are loaded.
        if (this.state.loginComplete) {
            window.location.href = process.env.REACT_APP_PORTAL_URL;
        }
        return !this.state.failure ? (
            <Card style={styles.cardCentered}>
                <CircularProgress style={styles.circularProgress} size={500} thickness={50} />
            </Card>
        ) : (
            <Redirect push to="/login" />
        );
    }
}

export default OIDCCallback;
