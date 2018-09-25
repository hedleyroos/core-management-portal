import React, { Component } from 'react';
import { Button, CardActions } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ManageIcon from '@material-ui/icons/Build';
import { DeleteButton, ListButton, RefreshButton, EditButton } from 'react-admin';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { styles } from '../theme';
import { successNotificationAnt, errorNotificationAnt, apiErrorHandler } from '../utils';
import { httpClient } from '../dataProvider';
import PermissionsStore from '../auth/PermissionsStore';
import { PERMISSIONS } from '../constants';

const timezoneOffset = new Date().getTimezoneOffset();

const mapDispatchToProps = dispatch => ({
    push: path => dispatch(push(path))
});

class InvitationShowActions extends Component {
    constructor(props) {
        super(props);
        this.inviteNotExpired = this.inviteNotExpired.bind(this);
        this.sendInvite = this.sendInvite.bind(this);
    }

    inviteNotExpired() {
        if (this.props.data) {
            const expiryDate = new Date(this.props.data.expires_at);
            let now = new Date();
            now = new Date(now.valueOf() - timezoneOffset * 60000);
            return expiryDate > now;
        }
        return false;
    }

    sendInvite() {
        const data = this.props.data;
        httpClient(`${process.env.REACT_APP_MANAGEMENT_LAYER}/invitations/${data.id}/send`)
            .then(response => {
                successNotificationAnt('An invitation email was successfully queued for sending.');
            })
            .catch(error => {
                errorNotificationAnt('Invite not sent.');
                apiErrorHandler(error);
            });
    }

    render() {
        const { basePath, data } = this.props;
        return (
            <CardActions style={styles.cardAction}>
                {PermissionsStore.getResourcePermission('invitations', 'edit') && (
                    <EditButton basePath={basePath} record={data} />
                )}
                <ListButton basePath={basePath} />
                {PermissionsStore.manyResourcePermissions(PERMISSIONS.purgeexpiredinvitations) && (
                    <DeleteButton basePath={basePath} record={data} />
                )}
                <RefreshButton />
                {this.inviteNotExpired() && (
                    <Button size="small" color="primary" onClick={this.sendInvite}>
                        <SendIcon />
                        Send Invite
                    </Button>
                )}
                {PermissionsStore.manyResourcePermissions(PERMISSIONS.manageinvitationroles) && (
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => this.props.push(`/manageinvitationroles/${data.id}`)}
                    >
                        <ManageIcon />
                        Manage Roles
                    </Button>
                )}
            </CardActions>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(InvitationShowActions);
