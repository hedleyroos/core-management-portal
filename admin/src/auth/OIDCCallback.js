import React, {Component} from 'react';
import {Redirect} from 'react-router'
import queryString from 'query-string'
import {base64urlDecode} from "../utils";

class OIDCCallback extends Component {
    render () {
        const parsedQuery = queryString.parse(this.props.location.search);

        // Check that the state returned in the URL matches the one stored.
        const authState = localStorage.getItem('auth_state');
        if (authState !== parsedQuery.state) {
            return (
                <Redirect push to="/login" />
            )
        }

        // Check that the nonce returned in the id token matches the one stored.
        const segments = parsedQuery.id_token.split('.');
        if (segments.length !== 3) {
            console.error("Token contains " + segments.length + " segments, but it should have 3.");
            return (
                <Redirect push to="/login" />
            )
        }

        // All segment are base64 encoded
        const payloadSeg = segments[1];
        const payload = JSON.parse(base64urlDecode(payloadSeg));

        const authNonce = localStorage.getItem('auth_nonce');
        if (authNonce !== payload.nonce) {
            console.error("Nonce mismatch: " + authNonce + " " + payload.nonce);
            return (
                <Redirect push to="/login" />
            )
        }

        // Everything checked out. Store the id token.
        localStorage.setItem('id_token', parsedQuery.id_token);
        return (
            <Redirect push to="/" />
        )
    }
}

;

export default OIDCCallback;
