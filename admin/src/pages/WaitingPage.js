import React from 'react';
import { teal800 } from 'material-ui/styles/colors';
import WaitIcon from 'material-ui/svg-icons/action/update';
import LinearProgress from 'material-ui/LinearProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { muiTheme, styles } from '../Theme';

const WaitingPage = ({ icon }) => {
    const PageIcon = icon || WaitIcon;
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div style={{ ...styles.main, backgroundColor: teal800 }}>
                <PageIcon style={styles.waitIcon} />
                <LinearProgress mode="indeterminate" style={styles.linearProgress} />
            </div>
        </MuiThemeProvider>
    );
};

export default WaitingPage;
