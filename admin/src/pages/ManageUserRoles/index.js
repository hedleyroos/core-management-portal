import { Restricted } from 'admin-on-rest';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import CircularProgress from 'material-ui/CircularProgress/CircularProgress';

import AssignRoleCard from './AssignRoleCard';
import { TECH_ADMIN } from '../../constants';
import {
    invalidToken,
    setManagerPlaces,
    setManagerRoles,
    setRoleMapping
} from '../../actions/manageUserRoles';
import PermissionsStore from '../../auth/PermissionsStore';
import restClient, { GET_LIST } from '../../swaggerRestServer';
import UserCard from './UserCard';
import UserSearch from './UserSearch';
import { makeIDMapping, getUntilDone } from '../../utils';

const mapStateToProps = state => ({
    manageUserRoles: state.manageUserRoles
});

const mapDispatchToProps = dispatch => ({
    setRoleMapping: roleMapping => dispatch(setRoleMapping(roleMapping)),
    setManagerRoles: managerRoles => dispatch(setManagerRoles(managerRoles)),
    setManagerPlaces: (managerDomains, managerSites) =>
        dispatch(setManagerPlaces(managerDomains, managerSites)),
    invalidToken: () => dispatch(invalidToken())
});

class ManageUserRoles extends Component {
    constructor(props) {
        super(props);
        this.setupRoles = this.setupRoles.bind(this);
        this.setupManager = this.setupManager.bind(this);
        this.handleAPIError = this.handleAPIError.bind(this);
    }

    componentDidMount() {
        /**
         * This method will initialize the store of the Manage User Roles page
         * if not setup already.
         */
        if (!this.props.manageUserRoles.roleMapping) {
            this.setupRoles();
            this.setupManager();
        }
    }

    setupRoles() {
        // Setup the role mapping and the manager roles on the redux store.
        const allContexts = PermissionsStore.getAllContexts();
        restClient(GET_LIST, 'roles', {})
            .then(response => {
                // Set the roles on the store
                const roleMapping = makeIDMapping(response.data);
                this.props.setRoleMapping(roleMapping);
                // Set the current manager's roles based on the role mapping for each context.
                const managerRoles = Object.entries(allContexts).reduce(
                    (accumulator, [place, placeRoles]) => {
                        const hasTechAdmin = placeRoles.some(
                            id => roleMapping[id].label === TECH_ADMIN
                        );
                        let roleObjects = placeRoles.map(id => roleMapping[id]);
                        if (hasTechAdmin) {
                            roleObjects = Object.values(roleMapping);
                        }
                        accumulator[place] = roleObjects;
                        return accumulator;
                    },
                    {}
                );
                this.props.setManagerRoles(managerRoles);
            })
            .catch(error => {
                this.handleAPIError(error);
            });
    }

    setupManager() {
        // Set the manager places (ie Domains and Sites)
        const allContexts = PermissionsStore.getAllContexts();
        const ids = Object.keys(allContexts).reduce(
            (accumulator, place) => {
                const [placeLetter, placeID] = place.split(':');
                placeLetter === 'd'
                    ? accumulator.domains.push(placeID)
                    : accumulator.sites.push(placeID);
                return accumulator;
            },
            { domains: [], sites: [] }
        );
        const resource = ids.domains.length > 0 ? 'domain' : 'site';
        getUntilDone(`${resource}s`, {
            [`${resource}_ids`]: ids[`${resource}s`].join(',')
        })
            .then(data => {
                if (resource === 'domain') {
                    const domains = makeIDMapping(data, 'd:');
                    getUntilDone('sites', {
                        site_ids: ids.sites.join(',')
                    })
                        .then(data => {
                            const sites = makeIDMapping(data, 's:');
                            this.props.setManagerPlaces(domains, sites);
                        })
                        .catch(error => {
                            this.handleAPIError();
                        });
                } else {
                    const sites = makeIDMapping(data, 's:');
                    this.props.setManagerPlaces({}, sites);
                }
            })
            .catch(error => {
                this.handleAPIError(error);
            });
    }

    handleAPIError(error) {
        if (error.message === 'Token expired') {
            localStorage.removeItem('id_token');
            localStorage.removeItem('permissions');
            this.props.invalidToken();
        }
        console.error(error);
    }

    render() {
        const {
            managerDomains,
            managerRoles,
            managerSites,
            roleMapping,
            selectedUser,
            treeData,
            validToken
        } = this.props.manageUserRoles;
        const managerDetailsLoaded =
            managerDomains && managerRoles && managerSites && roleMapping && treeData;
        return validToken ? (
            managerDetailsLoaded ? (
                <Restricted location={this.props.location}>
                    <Card>
                        <CardTitle title="Manage User Roles" />
                        <UserSearch />
                        {selectedUser >= 0 && (
                            <CardText>
                                <UserCard />
                                <AssignRoleCard />
                            </CardText>
                        )}
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
