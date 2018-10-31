import React from 'react';
import teal from '@material-ui/core/colors/teal';
import WaitIcon from '@material-ui/icons/Update';
import LinearProgress from '@material-ui/core/LinearProgress';

import { styles } from '../theme';

const WaitingPage = ({ icon }) => {
    const PageIcon = icon || WaitIcon;
    return (
        <div style={{ ...styles.main, backgroundColor: teal }}>
            <PageIcon style={styles.waitIcon} />
            <LinearProgress mode="indeterminate" style={styles.linearProgress} />
        </div>
    );
};

export default WaitingPage;
