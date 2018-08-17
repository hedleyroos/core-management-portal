import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    setAssignmentLocation,
    checkRoleForAssign,
    assigningRoles,
    assignRole,
    allAssigned,
    invalidToken
} from '../../actions/manageRoles';
import PermissionsStore from '../../auth/PermissionsStore';
import AssignRoleCard from '../../cards/AssignRoleCard';
import { assignRoles } from '../../manageUtils';

const mapStateToProps = state => ({
    manageRoles: state.manageRoles
});

const mapDispatchToProps = dispatch => ({
    invalidToken: () => dispatch(invalidToken()),
    setAssignmentLocation: (managerRoles, key) =>
        dispatch(setAssignmentLocation(managerRoles, key)),
    checkRoleForAssign: key => dispatch(checkRoleForAssign(key)),
    assigningRoles: assigning => dispatch(assigningRoles(assigning)),
    assignRole: (key, objectRole) => dispatch(assignRole(key, objectRole)),
    allAssigned: () => dispatch(allAssigned())
});

class AssignUserRoleCard extends Component {
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
        this.props.setAssignmentLocation(this.props.manageRoles.managerRoles, key);
    }

    handleSelect(key) {
        this.props.checkRoleForAssign(key);
    }

    handleAssign() {
        assignRoles(this.props);
    }

    render() {
        const {
            assigning,
            amountSelectedToAssign,
            assignmentLocation,
            rolesToAssign
        } = this.props.manageRoles;
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
)(AssignUserRoleCard);
