import { Authenticated } from 'react-admin';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography';

import { invalidToken, reset, setObject, setupResources } from '../../actions/manageRoles';
import { mountManager } from '../../manageUtils';
import AssignRoleCard from './AssignRoleCard';
import ObjectCard from './ObjectCard';
import { titleCase } from '../../utils';
import { MANAGE_MAPPING } from '../../constants';

const mapStateToProps = state => ({
    manageRoles: state.manageRoles
});

const mapDispatchToProps = dispatch => ({
    invalidToken: () => dispatch(invalidToken()),
    setObject: (resource, idLabel, selectedObject, objectRoles) =>
        dispatch(setObject(resource, idLabel, selectedObject, objectRoles)),
    setupResources: setup => dispatch(setupResources(setup)),
    reset: () => dispatch(reset())
});

class ManageRoles extends Component {
    componentDidMount() {
        /**
         * This method will initialize the store of the Shared Resources
         * if not setup already.
         */
        mountManager(this.props);
    }

    render() {
        const {
            managerDomains,
            managerRoles,
            managerSites,
            path,
            roleMapping,
            selectedObject,
            validToken
        } = this.props.manageRoles;
        const { resource } = path ? MANAGE_MAPPING[path] : {};
        const detailsLoaded =
            selectedObject && managerDomains && managerRoles && managerSites && roleMapping;
        return validToken ? (
            detailsLoaded ? (
                <Authenticated location={this.props.location}>
                    <Card>
                        <CardContent>
                            <Typography variant="title" paragraph>
                                {`Manage ${titleCase(resource)} Roles`}
                            </Typography>
                            <ObjectCard />
                            <AssignRoleCard />
                        </CardContent>
                    </Card>
                </Authenticated>
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
)(ManageRoles);
