import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card } from 'material-ui/Card';
import { pink500, pink300 } from 'material-ui/styles/colors';

import { ViewTitle } from 'admin-on-rest';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pink500,
        accent1Color: pink300
    }
});

const Foo = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Card>
            <ViewTitle title="Login" />
        </Card>
    </MuiThemeProvider>
);

export default Foo;
