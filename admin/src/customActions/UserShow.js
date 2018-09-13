import React, { Component } from 'react';
import { push } from 'react-router-redux';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import ManageIcon from 'material-ui/svg-icons/action/build';
import { connect } from 'react-redux';
import { ListButton, RefreshButton, EditButton } from 'admin-on-rest';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { styles } from '../Theme';
import { successNotificationAnt, errorNotificationAnt, apiErrorHandler } from '../utils';
import { httpClient } from '../restClient';
import PermissionsStore from '../auth/PermissionsStore';
import ConfirmDialog from '../pages/ConfirmDialog';
import { PERMISSIONS } from '../constants';

const mapDispatchToProps = dispatch => ({
    push: path => dispatch(push(path))
});

class UserShowActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            inputValues: {
                deletionReason: ''
            },
            formIsValid: false
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleDelete(reason) {
        const { data } = this.props;
        httpClient(`${process.env.REACT_APP_MANAGEMENT_LAYER}/request_user_deletion`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({
                user_id: data.id,
                reason: reason || 'Management Portal'
            })
        })
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
        action === 'submit' && this.handleDelete(this.state.inputValues.deletionReason);
        this.setState({ open: false });
    }

    formIsValid(fields) {
        let returnFields = {}
        Object.entries(fields).forEach(([name, value]) => {
            returnFields[name] = value
        });
        this.setState({inputValues:returnFields, formIsValid: fields.deletionReason.length > 0});
    }

    handleInput(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.formIsValid({[event.target.name]: event.target.value});
    }

    render() {
        const { basePath, data } = this.props;
        const { open } = this.state;
        const title = data && `Delete User '${data.username}: ${data.id}'`;
        const inputValues = <TextField
                    required={!this.state.formIsValid}
                    floatingLabelText='Reason for user deletion*'
                    placeholder='Reason'
                    autoFocus='true'
                    name='deletionReason'
                    value={this.state.inputValues.deletionReason}
                    onChange={(event) => this.handleInput(event)}
                />;
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
                            inputValues={inputValues}
                            formIsValid={this.state.formIsValid}
                            cancelLabel="No"
                            submitLabel="Delete"
                            title={title}
                            text="Are you sure you want to permanently delete this user?"
                        />
                    </div>
                )}
                {PermissionsStore.manyResourcePermissions(PERMISSIONS.manageuserroles) &&
                    data.organisation_id && (
                        <FlatButton
                            primary
                            icon={<ManageIcon />}
                            label="Manage Roles"
                            onClick={() => this.props.push(`/manageuserroles/${data.id}`)}
                        />
                    )}
            </CardActions>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(UserShowActions);
