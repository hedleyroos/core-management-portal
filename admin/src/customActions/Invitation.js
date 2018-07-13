import React from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { DeleteButton, ListButton, RefreshButton, ShowButton } from 'admin-on-rest';

import { styles } from '../Theme';

const InvitationEditActions = ({ basePath, data }) => (
    <CardActions style={styles.cardAction}>
        <ShowButton basePath={basePath} record={data} />
        <ListButton basePath={basePath} />
        <DeleteButton basePath={basePath} record={data} />
        <RefreshButton />
        {/* Custom Actions */}
        <FlatButton primary label="Custom Action" onClick={console.log('here')} />
    </CardActions>
);

export default InvitationEditActions;
