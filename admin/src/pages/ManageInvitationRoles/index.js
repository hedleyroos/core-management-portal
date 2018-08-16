import { Restricted } from 'admin-on-rest';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import CircularProgress from 'material-ui/CircularProgress/CircularProgress';

import { setInvitation } from '../../actions/manageInvitationRoles';
import { invalidToken, setupResources } from '../../actions/sharedResources';
import { mountManager } from '../../manageUtils';
import InvitationCard from './InvitationCard';
import AssignRoleCard from './AssignRoleCard';

const mapStateToProps = state => ({
    manageInvitationRoles: state.manageInvitationRoles,
    sharedResources: state.sharedResources
});

const mapDispatchToProps = dispatch => ({
    setupResources: setup => dispatch(setupResources(setup)),
    invalidToken: () => dispatch(invalidToken()),
    setInvitation: (selectedInvitation, invitationRoles) =>
        dispatch(setInvitation(selectedInvitation, invitationRoles))
});

class ManageInvitationRoles extends Component {
    componentDidMount() {
        /**
         * This method will initialize the store of the Shared Resources
         * if not setup already.
         */
        const { selectedInvitation } = this.props.manageInvitationRoles;
        const { invitation_id } = this.props.match.params;
        mountManager(
            this.props,
            'invitation',
            selectedInvitation,
            invitation_id,
            'invitation_id',
            this.props.setInvitation
        );
    }

    render() {
        const { selectedInvitation } = this.props.manageInvitationRoles;
        const {
            managerDomains,
            managerRoles,
            managerSites,
            roleMapping,
            validToken
        } = this.props.sharedResources;
        const { invitation_id } = this.props.match.params;
        const detailsLoaded =
            selectedInvitation && managerDomains && managerRoles && managerSites && roleMapping;
        return validToken ? (
            detailsLoaded ? (
                <Restricted location={this.props.location}>
                    <Card>
                        <CardTitle title={`Manage Invitation #${invitation_id} Roles`} />
                        <CardText>
                            <InvitationCard />
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
)(ManageInvitationRoles);
