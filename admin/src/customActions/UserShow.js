import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { ListButton, RefreshButton, EditButton } from 'react-admin';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import DeleteIcon from '@material-ui/icons/Delete';
import ManageIcon from '@material-ui/icons/Build';

import { styles } from '../theme';
import { successNotificationAnt, errorNotificationAnt, apiErrorHandler } from '../utils';
import { httpClient } from '../dataProvider';
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
        this.formIsValid = this.formIsValid.bind(this);
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
        const loggedInUserID = jwtDecode(localStorage.getItem('id_token')).sub;
        if (action === 'submit' && loggedInUserID !== this.props.data.id) {
            this.handleDelete(this.state.inputValues.deletionReason);
        }
        this.setState({ open: false });
    }

    formIsValid(fields) {
        let returnFields = {};
        Object.entries(fields).forEach(([name, value]) => {
            returnFields[name] = value;
        });
        this.setState({ inputValues: returnFields, formIsValid: fields.deletionReason.length > 0 });
    }

    handleInput(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.formIsValid({ [name]: value });
    }

    render() {
        const loggedInUserID = jwtDecode(localStorage.getItem('id_token')).sub;
        const { basePath, data } = this.props;
        const { open } = this.state;
        const title = data && `Delete User '${data.username}: ${data.id}'`;
        const inputValues = [
            {
                floatingLabelText: 'Reason for user deletion*',
                placeholder: 'Reason',
                autoFocus: 'true',
                name: 'deletionReason',
                value: this.state.inputValues.deletionReason
            }
        ];
        return (
            <CardActions style={styles.cardAction}>
                {PermissionsStore.getResourcePermission('users', 'edit') && (
                    <EditButton basePath={basePath} record={data} />
                )}
                <ListButton basePath={basePath} />
                <RefreshButton />
                {PermissionsStore.getResourcePermission('users', 'remove') && (
                    <div>
                        {data &&
                            data.id !== loggedInUserID && (
                                <Button size="small" color="primary" onClick={this.handleOpen}>
                                    <DeleteIcon />
                                    Delete User
                                </Button>
                            )}
                        <ConfirmDialog
                            open={open}
                            handleClose={this.handleClose}
                            inputValues={inputValues}
                            handleInput={this.handleInput}
                            formIsValid={this.state.formIsValid}
                            cancelLabel="No"
                            submitLabel="Delete"
                            title={title}
                            text="Are you sure you want to permanently delete this user?"
                        />
                    </div>
                )}
                {PermissionsStore.manyResourcePermissions(PERMISSIONS.manageuserroles) &&
                    data &&
                    data.organisation_id && (
                        <Button
                            size="small"
                            color="primary"
                            onClick={() => this.props.push(`/manageuserroles/${data.id}`)}
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
)(UserShowActions);
