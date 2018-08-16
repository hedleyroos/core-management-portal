import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteRoles } from '../../manageUtils';
import { checkRoleForDelete, deleteRole } from '../../actions/manageUserRoles';
import { invalidToken } from '../../actions/sharedResources';
import RoleCard from '../../cards/RoleCard';

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
        const { selectedUser, userRoles } = this.props.manageUserRoles;
        deleteRoles(
            'user',
            userRoles,
            selectedUser,
            this.props.deleteRole,
            this.props.invalidToken
        );
    }

    render() {
        const { open } = this.state;
        const { amountSelectedToDelete, selectedUser, userRoles } = this.props.manageUserRoles;
        const domainRoles = Object.entries(userRoles).filter(([key, userRole]) =>
            key.startsWith('d')
        );
        const siteRoles = Object.entries(userRoles).filter(([key, userRole]) =>
            key.startsWith('s')
        );
        return (
            <RoleCard
                type="User"
                object={selectedUser}
                title={selectedUser.username}
                domainRoles={domainRoles}
                siteRoles={siteRoles}
                handleCheck={this.handleCheck}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                open={open}
                amountSelectedToDelete={amountSelectedToDelete}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCard);
