import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import { styles } from '../../Theme';
import { errorNotificationAnt, successNotificationAnt } from '../../utils';
import { checkRoleForDelete, deleteRole, invalidToken } from '../../actions/manageUserRoles';
import restClient, { DELETE } from '../../restClient';
import ConfirmDialog from './ConfirmDialog';

const mapStateToProps = state => ({
    manageUserRoles: state.manageUserRoles
});

const mapDispatchToProps = dispatch => ({
    checkRoleForDelete: key => dispatch(checkRoleForDelete(key)),
    deleteRole: key => dispatch(deleteRole(key)),
    invalidToken: () => dispatch(invalidToken())
});

class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleCheck = this.handleCheck.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAPIError = this.handleAPIError.bind(this);
    }

    handleCheck(key) {
        this.props.checkRoleForDelete(key);
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose(action) {
        action === 'submit' && this.handleDelete();
        this.setState({ open: false });
    }

    handleDelete() {
        const { selectedUser, userResults, userRoles } = this.props.manageUserRoles;
        const user = userResults[selectedUser];
        if (user) {
            Object.entries(userRoles).map(([key, userRole]) => {
                if (userRole.checked) {
                    const resource = key.startsWith('d') ? 'domain' : 'site';
                    restClient(DELETE, `user${resource}roles`, {
                        id: `${user.id}/${userRole[resource].id}/${userRole.role.id}`
                    })
                        .then(response => {
                            this.props.deleteRole(key);
                            successNotificationAnt(
                                `Removed role '${userRole.role.label}' from '${
                                    userRole[resource].name
                                }'!`
                            );
                        })
                        .catch(error => {
                            let description =
                                error.status === 403
                                    ? `You do not have permission to remove role '${
                                          userRole.role.label
                                      }' from '${userRole[resource].name}'.`
                                    : `Something went wrong. Cannot delete role '${
                                          userRole.role.label
                                      }' from '${userRole[resource].name}' for user`;
                            errorNotificationAnt(description);
                            this.handleAPIError(error);
                        });
                }
                return null;
            });
        }
    }

    handleAPIError(error) {
        if (error.message === 'Token expired') {
            localStorage.clear();
            this.props.invalidToken();
        }
        console.error(error);
    }

    render() {
        const { open } = this.state;
        const {
            amountSelectedToDelete,
            selectedUser,
            userResults,
            userRoles
        } = this.props.manageUserRoles;
        const user = userResults[selectedUser];
        const domainRoles = Object.entries(userRoles).filter(([key, userRole]) =>
            key.startsWith('d')
        );
        const siteRoles = Object.entries(userRoles).filter(([key, userRole]) =>
            key.startsWith('s')
        );
        return (
            <Card>
                <CardTitle title={user.username} subtitle={`ID: ${user.id}`} />
                <Divider />
                <CardHeader title="Domain Roles" />
                <CardText style={styles.wrapper}>
                    {domainRoles.length > 0
                        ? domainRoles.map(([key, domainRole], index) => (
                              <Checkbox
                                  key={key}
                                  label={`${domainRole.domain.name}: ${domainRole.role.label}`}
                                  checked={domainRole.checked}
                                  onCheck={() => this.handleCheck(key)}
                              />
                          ))
                        : 'User currently has no explicit domain roles.'}
                </CardText>
                <Divider />
                <CardHeader title="Site Roles" />
                <CardText style={styles.wrapper}>
                    {siteRoles.length > 0
                        ? siteRoles.map(([key, siteRole], index) => (
                              <Checkbox
                                  key={key}
                                  label={`${siteRole.site.name}: ${siteRole.role.label}`}
                                  checked={siteRole.checked}
                                  onCheck={() => this.handleCheck(key)}
                              />
                          ))
                        : 'User currently has no explicit site roles.'}
                </CardText>
                {amountSelectedToDelete > 0 && (
                    <React.Fragment>
                        <Divider />
                        <CardText>
                            <CardActions>
                                <RaisedButton
                                    label="Remove Roles"
                                    secondary={true}
                                    onClick={this.handleOpen}
                                />
                            </CardActions>
                        </CardText>
                    </React.Fragment>
                )}
                <ConfirmDialog
                    open={open}
                    handleClose={this.handleClose}
                    cancelLabel="No"
                    submitLabel="Delete"
                    text="Are you sure you want to delete the selected roles?"
                />
            </Card>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCard);
