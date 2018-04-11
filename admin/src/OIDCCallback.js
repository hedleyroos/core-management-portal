import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card } from 'material-ui/Card';

import { ViewTitle } from 'admin-on-rest';

import { muiTheme } from './Theme'

class OIDCCallback extends Component {
    render () {
        console.log(this.props.location);
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Card>
                    <ViewTitle title="Login" />
                </Card>
            </MuiThemeProvider>
        )
    }
}

export default OIDCCallback;
