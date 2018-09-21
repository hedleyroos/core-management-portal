import React from 'react';
import NotAllowed from '@material-ui/icons/NotInterested';

import { styles } from '../theme';

const NoPermissions = () => (
	<div style={styles.main}>
        <div style={styles.permissionMessage}>
            <NotAllowed style={{ width: '9em', height: '9em' }} />
            <h1>Forbidden</h1>
            <div>You do not have any permissions on any site or domain.</div>
        </div>
    </div>
)

export default NoPermissions;
