import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    setAssignmentLocation,
    checkRoleForAssign,
    assigningRoles,
    assignRole,
    allAssigned
} from '../../actions/manageInvitationRoles';
import { invalidToken } from '../../actions/sharedResources';
import PermissionsStore from '../../auth/PermissionsStore';
import AssignRoleCard from '../../cards/AssignRoleCard';
import { assignRoles } from '../../manageUtils';

const mapStateToProps = state => ({
    manageInvitationRoles: state.manageInvitationRoles,
    sharedResources: state.sharedResources
});

const mapDispatchToProps = dispatch => ({
    invalidToken: () => dispatch(invalidToken()),
    setAssignmentLocation: (managerRoles, key) =>
        dispatch(setAssignmentLocation(managerRoles, key)),
    checkRoleForAssign: key => dispatch(checkRoleForAssign(key)),
    assigningRoles: assigning => dispatch(assigningRoles(assigning)),
    assignRole: (key, invitationRole) => dispatch(assignRole(key, invitationRole)),
    allAssigned: () => dispatch(allAssigned())
});

class AssignInvitationRoleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assigning: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleAssign = this.handleAssign.bind(this);
    }

    handleChange(key) {
        this.props.setAssignmentLocation(this.props.sharedResources.managerRoles, key);
    }

    handleSelect(key) {
        this.props.checkRoleForAssign(key);
    }

    handleAssign() {
        assignRoles(
            this.props.manageInvitationRoles,
            this.props,
            'invitation_id',
            this.props.manageInvitationRoles.selectedInvitation,
            'invitation'
        );
    }

    render() {
        const {
            amountSelectedToAssign,
            assignmentLocation,
            rolesToAssign,
            assigning
        } = this.props.manageInvitationRoles;
        const treeData = PermissionsStore.getTreeData();
        return (
            <AssignRoleCard
                amountSelectedToAssign={amountSelectedToAssign}
                assigning={assigning}
                assignmentLocation={assignmentLocation}
                handleAssign={this.handleAssign}
                handleChange={this.handleChange}
                handleSelect={this.handleSelect}
                rolesToAssign={rolesToAssign}
                treeData={treeData}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssignInvitationRoleCard);
