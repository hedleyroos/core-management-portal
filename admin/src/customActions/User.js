import React, { Component } from 'react';
import { push } from 'react-router-redux';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { connect } from 'react-redux';
import { ListButton, RefreshButton, EditButton } from 'admin-on-rest';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { styles } from '../Theme';
import { successNotificationAnt, errorNotificationAnt, apiErrorHandler } from '../utils';
import { httpClient } from '../restClient';
import PermissionsStore from '../auth/PermissionsStore';
import ConfirmDialog from '../pages/ConfirmDialog';

const mapDispatchToProps = dispatch => ({
    push: path => dispatch(push(path))
});

class UserShowActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleDelete() {
        httpClient(`${process.env.REACT_APP_MANAGEMENT_LAYER}/request_user_deletion`)
            .then(response => {
                this.props.push('/users');
                successNotificationAnt('Request to delete user sent.');
            })
            .catch(error => {
                errorNotificationAnt('Request to delete user not sent.');
                apiErrorHandler(error);
            });
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose(action) {
        action === 'submit' && this.handleDelete();
        this.setState({ open: false });
    }

    render() {
        const { basePath, data } = this.props;
        const { open } = this.state;
        const title = data && `Delete User '${data.username}: ${data.id}'`;
        return (
            <CardActions style={styles.cardAction}>
                {PermissionsStore.getResourcePermission('users', 'edit') && (
                    <EditButton basePath={basePath} record={data} />
                )}
                <ListButton basePath={basePath} />
                <RefreshButton />
                {PermissionsStore.getResourcePermission('users', 'remove') && (
                    <div>
                        <FlatButton
                            primary
                            icon={<DeleteIcon />}
                            label="Delete User"
                            onClick={this.handleOpen}
                        />
                        <ConfirmDialog
                            open={open}
                            handleClose={this.handleClose}
                            cancelLabel="No"
                            submitLabel="Delete"
                            title={title}
                            text="Are you sure you want to permanently delete this user?"
                        />
                    </div>
                )}
            </CardActions>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(UserShowActions);
