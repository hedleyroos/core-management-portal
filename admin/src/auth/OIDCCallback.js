import jwtDecode from 'jwt-decode';
import LinearProgress from 'material-ui/LinearProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WaitIcon from 'material-ui/svg-icons/action/update';
import { pink500 } from 'material-ui/styles/colors';
import queryString from 'query-string';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { muiTheme, styles } from '../Theme';
import PermissionsStore from '../auth/PermissionsStore';
import { base64urlDecode } from '../utils';
import { contextDomainsAndSitesAdd } from '../actions/context';

const mapDispatchToProps = dispatch => ({
    domainsAndSitesAdd: domainsAndSites => dispatch(contextDomainsAndSitesAdd(domainsAndSites))
});

class OIDCCallback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginComplete: false,
            failure: false
        };
        this.getTokenAndPermissions = this.getTokenAndPermissions.bind(this);
    }
    componentWillMount() {
        this.getTokenAndPermissions();
    }
    async getTokenAndPermissions() {
        const parsedQuery = queryString.parse(this.props.location.search);
        // Quick check if a token is retrieved.
        if (!parsedQuery.id_token) {
            this.setState({ failure: true });
            return null;
        }
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
                    ? `Token contains ${segments.length} segments, but it should have 3.`
                    : incorrectNonce
                        ? `Nonce mismatch: ${authNonce} ${payload.nonce}`
                        : `State mismatch: ${authState} ${parsedQuery.state}`
            );
            this.setState({ failure: true });
        } else {
            // Everything checked out. Store the id token.
            localStorage.setItem('id_token', parsedQuery.id_token);
            const userID = jwtDecode(parsedQuery.id_token).sub;
            try {
                const details = await PermissionsStore.getAndLoadPermissions(userID);
                this.props.domainsAndSitesAdd(details.contexts);
                this.setState({ loginComplete: true });
            } catch (error) {
                console.error(error);
                this.setState({ failure: true });
            }
        }
    }
    render() {
        return !this.state.failure ? (
            this.state.loginComplete ? (
                <Redirect push to="/" />
            ) : (
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div style={{ ...styles.main, backgroundColor: pink500 }}>
                        <WaitIcon style={styles.waitIcon} />
                        <LinearProgress mode="indeterminate" style={styles.linearProgress} />
                    </div>
                </MuiThemeProvider>
            )
        ) : (
            <Redirect push to="/login" />
        );
    }
}

export default connect(null, mapDispatchToProps)(OIDCCallback);
