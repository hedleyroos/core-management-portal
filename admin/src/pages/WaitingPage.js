import React from 'react';
import { green500 } from 'material-ui/styles/colors';
import WaitIcon from 'material-ui/svg-icons/action/update';
import LinearProgress from 'material-ui/LinearProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { muiTheme, styles } from '../Theme';

const WaitingPage = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{ ...styles.main, backgroundColor: green500 }}>
            <WaitIcon style={styles.waitIcon} />
            <LinearProgress mode="indeterminate" style={styles.linearProgress} />
        </div>
    </MuiThemeProvider>
);

export default WaitingPage;
