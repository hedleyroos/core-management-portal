import React, { Component } from 'react';
import { connect } from 'react-redux';

import { checkRoleForDelete, deleteRole } from '../../actions/manageInvitationRoles';
import { invalidToken } from '../../actions/sharedResources';
import RoleCard from '../../cards/RoleCard';
import { deleteRoles } from '../../manageUtils';

const mapStateToProps = state => ({
    manageInvitationRoles: state.manageInvitationRoles
});

const mapDispatchToProps = dispatch => ({
    checkRoleForDelete: key => dispatch(checkRoleForDelete(key)),
    deleteRole: key => dispatch(deleteRole(key)),
    invalidToken: () => dispatch(invalidToken())
});

class InvitationCard extends Component {
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
        const { selectedInvitation, invitationRoles } = this.props.manageInvitationRoles;
        deleteRoles(
            'invitation',
            invitationRoles,
            selectedInvitation,
            this.props.deleteRole,
            this.props.invalidToken
        );
    }

    render() {
        const { open } = this.state;
        const {
            amountSelectedToDelete,
            selectedInvitation,
            invitationRoles
        } = this.props.manageInvitationRoles;
        const domainRoles = Object.entries(invitationRoles).filter(([key, role]) =>
            key.startsWith('d')
        );
        const siteRoles = Object.entries(invitationRoles).filter(([key, role]) =>
            key.startsWith('s')
        );
        return (
            <RoleCard
                type="Invitation"
                object={selectedInvitation}
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
)(InvitationCard);
