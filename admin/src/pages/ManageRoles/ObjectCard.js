import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteRoles } from '../../manageUtils';
import { checkRoleForDelete, deleteRole, invalidToken } from '../../actions/manageRoles';
import RoleCard from '../../cards/RoleCard';
import { MANAGE_MAPPING } from '../../constants';
import { titleCase } from '../../utils';

const mapStateToProps = state => ({
    manageRoles: state.manageRoles
});

const mapDispatchToProps = dispatch => ({
    checkRoleForDelete: key => dispatch(checkRoleForDelete(key)),
    deleteRole: key => dispatch(deleteRole(key)),
    invalidToken: () => dispatch(invalidToken())
});

class ObjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleCheck = this.handleCheck.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleCheck(key) {
        this.props.checkRoleForDelete(key);
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose(action) {
        action === 'submit' && deleteRoles(this.props);
        this.setState({ open: false });
    }

    render() {
        const { open } = this.state;
        const {
            amountSelectedToDelete,
            selectedObject,
            objectRoles,
            path
        } = this.props.manageRoles;
        const { resource, label } = MANAGE_MAPPING[path];
        const domainRoles = Object.entries(objectRoles).filter(([key, role]) =>
            key.startsWith('d')
        );
        const siteRoles = Object.entries(objectRoles).filter(([key, role]) => key.startsWith('s'));
        return (
            <RoleCard
                type={resource}
                title={`${titleCase(label)}: ${selectedObject[label]}`}
                object={selectedObject}
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
)(ObjectCard);
