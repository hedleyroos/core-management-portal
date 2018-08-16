import { Restricted } from 'admin-on-rest';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import CircularProgress from 'material-ui/CircularProgress/CircularProgress';

import { setUser } from '../../actions/manageUserRoles';
import { invalidToken, setupResources } from '../../actions/sharedResources';
import { mountManager } from '../../manageUtils';
import AssignRoleCard from './AssignRoleCard';
import UserCard from './UserCard';

const mapStateToProps = state => ({
    manageUserRoles: state.manageUserRoles,
    sharedResources: state.sharedResources
});

const mapDispatchToProps = dispatch => ({
    setupResources: setup => dispatch(setupResources(setup)),
    invalidToken: () => dispatch(invalidToken()),
    setUser: (selectedUser, userRoles) => dispatch(setUser(selectedUser, userRoles))
});

class ManageUserRoles extends Component {
    componentDidMount() {
        /**
         * This method will initialize the store of the Shared Resources
         * if not setup already.
         */
        const { selectedUser } = this.props.manageUserRoles;
        const { user_id } = this.props.match.params;
        mountManager(this.props, 'user', selectedUser, user_id, 'user_id', this.props.setUser);
    }

    render() {
        const { selectedUser } = this.props.manageUserRoles;
        const {
            managerDomains,
            managerRoles,
            managerSites,
            roleMapping,
            validToken
        } = this.props.sharedResources;
        const detailsLoaded =
            selectedUser && managerDomains && managerRoles && managerSites && roleMapping;
        return validToken ? (
            detailsLoaded ? (
                <Restricted location={this.props.location}>
                    <Card>
                        <CardTitle title="Manage User Roles" />
                        <CardText>
                            <UserCard />
                            <AssignRoleCard />
                        </CardText>
                    </Card>
                </Restricted>
            ) : (
                <CircularProgress />
            )
        ) : (
            <Redirect to="/login" />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageUserRoles);
