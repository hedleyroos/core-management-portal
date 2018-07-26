import React, { Component } from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import PurgeIcon from 'material-ui/svg-icons/social/whatshot';
import { CreateButton, DeleteButton, ListButton, RefreshButton, EditButton } from 'admin-on-rest';

import { styles } from '../Theme';
import { successNotificationAnt, errorNotificationAnt, apiErrorHandler } from '../utils';
import { httpClient } from '../restClient';

const timezoneOffset = new Date().getTimezoneOffset();

export class InvitationListActions extends Component {
    purgeExpiredInvitations() {
        httpClient(
            `${
                process.env.REACT_APP_MANAGEMENT_LAYER
            }/invitations/purge/expired?synchronous_mode=true`
        )
            .then(response => {
                successNotificationAnt(
                    'Expired Invitations are being purged. Refresh to see any changes that have occured.'
                );
            })
            .catch(error => {
                errorNotificationAnt('Purging of invites was not initialized.');
                apiErrorHandler(error);
            });
    }

    render() {
        const {
            resource,
            filters,
            displayedFilters,
            filterValues,
            basePath,
            showFilter
        } = this.props;
        return (
            <CardActions style={styles.cardAction}>
                {filters &&
                    React.cloneElement(filters, {
                        resource,
                        showFilter,
                        displayedFilters,
                        filterValues,
                        context: 'button'
                    })}
                <CreateButton basePath={basePath} />
                <RefreshButton />
                <FlatButton
                    primary
                    icon={<PurgeIcon />}
                    label="Purge Expired Invites"
                    onClick={this.purgeExpiredInvitations}
                />
            </CardActions>
        );
    }
}

export class InvitationShowActions extends Component {
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
                <EditButton basePath={basePath} record={data} />
                <ListButton basePath={basePath} />
                <DeleteButton basePath={basePath} record={data} />
                <RefreshButton />
                {this.inviteNotExpired() && (
                    <FlatButton
                        primary
                        icon={<SendIcon />}
                        label="Send Invite"
                        onClick={this.sendInvite}
                    />
                )}
            </CardActions>
        );
    }
}
