import React, { Component } from 'react';
import { Redirect } from 'react-router'
import queryString from 'query-string'

class OIDCCallback extends Component {
    render () {
        const parsed_query = queryString.parse(this.props.location.search);

        // Check that the state returned in the URL matches the one stored.
        const auth_state = localStorage.getItem('auth_state');
        if (auth_state !== parsed_query.state) {
            return (
                <Redirect push to="/login" />
            )
        }

        // Check that the nonce returned in the id token matches the one stored.
        const segments = parsed_query.id_token.split('.');
        if (segments.length !== 3) {
            console.log("Token contains " + segments.length + " segments, but it should have 3.");
            return (
                <Redirect push to="/login" />
            )
        }

        // All segment are base64 encoded
        const payloadSeg = segments[1];
        const payload = JSON.parse(base64urlDecode(payloadSeg));

        const auth_nonce = localStorage.getItem('auth_nonce');
        if (auth_nonce !== payload.nonce) {
            console.log("Nonce mismatch: " + auth_nonce + " " + payload.nonce);
            return (
                <Redirect push to="/login" />
            )
        }

        // Everything checked out. Store the id token.
        localStorage.setItem('id_token', parsed_query.id_token);
        return (
            <Redirect push to="/" />
        )
    }
}

function base64urlDecode(str) {
  return new Buffer(base64urlUnescape(str), 'base64').toString();
};

function base64urlUnescape(str) {
  str += Array(5 - str.length % 4).join('=');
  return str.replace(/-/g, '+').replace(/_/g, '/');
}

export default OIDCCallback;
