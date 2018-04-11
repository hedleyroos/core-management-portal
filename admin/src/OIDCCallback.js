import React, { Component } from 'react';
import { Redirect } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card } from 'material-ui/Card';
import queryString from 'query-string'

import { ViewTitle } from 'admin-on-rest';

import { muiTheme } from './Theme'

class OIDCCallback extends Component {
    render () {
        const parsed_query = queryString.parse(this.props.location.search);
        localStorage.setItem('id_token', parsed_query.id_token);
        return (
            <Redirect push to="/" />
        )
    }
}

export default OIDCCallback;
