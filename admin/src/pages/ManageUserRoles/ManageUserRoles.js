import { Restricted } from 'admin-on-rest';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import TextField from 'material-ui/TextField';
import restClient, { CREATE, GET_LIST, GET_MANY, DELETE } from '../../swaggerRestServer';
import TableField from '../../fields/TableField';

import UserCard from './UserCard';
import AssignRoleCard from './AssignRoleCard';
import ConfirmDialog from './ConfirmDialog';
import { makeIDMapping, getUniqueIDs, getUntilDone } from '../../utils';
import { contextChangeGMPContext, contextDomainsAndSitesAdd } from '../../actions/context';
import PermissionsStore from '../../auth/PermissionsStore';
import CircularProgress from 'material-ui/CircularProgress/CircularProgress';
import { TECH_ADMIN } from '../../constants';

const mapStateToProps = state => {
    let GMPContext = {},
        domainsAndSites = {};
    if (state.context.GMPContext) {
        GMPContext = state.context.GMPContext;
        domainsAndSites = state.context.domainsAndSites;
    } else {
        GMPContext = PermissionsStore.getCurrentContext();
        domainsAndSites = PermissionsStore.getAllContexts();
    }
    return {
        domainsAndSites,
        GMPContext
    };
};

const mapDispatchToProps = dispatch => ({
    domainsAndSitesAdd: domainsAndSites => dispatch(contextDomainsAndSitesAdd(domainsAndSites)),
    changeContext: newContext => dispatch(contextChangeGMPContext(newContext))
});

class ManageUserRoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            managerRoles: null,
            search: '',
            userResults: null,
            userRoles: null,
            selectedUser: -1,
            userdomains: {},
            usersites: {},
            selectedDomainSite: null,
            roleSelections: null,
            rolesMapping: null,
            hasRolesToAssign: 0,
            open: false,
            roleToDelete: null,
            validToken: true
        };
        this.getAllUserData = this.getAllUserData.bind(this);
        this.getAllUserData(this.props.domainsAndSites);
        this.getWhereUserHasRoles = this.getWhereUserHasRoles.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDomainSiteChange = this.handleDomainSiteChange.bind(this);
        this.handleRoleSelection = this.handleRoleSelection.bind(this);
        this.handleAssign = this.handleAssign.bind(this);
        this.triggerDeleteDialog = this.triggerDeleteDialog.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.clearMessage = this.clearMessage.bind(this);
        this.handleAPIError = this.handleAPIError.bind(this);
    }

    async getAllUserData(contexts) {
        try {
            let roles = await restClient(GET_MANY, 'roles', {});
            roles = makeIDMapping(roles.data);
            this.setState({ rolesMapping: roles });
            this.getWhereUserHasRoles(contexts, roles);
        } catch (error) {
            this.handleAPIError(error);
        }
    }

    async getWhereUserHasRoles(contexts, roles) {
        const ids = Object.keys(contexts).reduce(
            (accumulator, place) => {
                const [placeLetter, placeID] = place.split(':');
                placeLetter === 'd'
                    ? accumulator.domains.push(placeID)
                    : accumulator.sites.push(placeID);
                return accumulator;
            },
            { domains: [], sites: [] }
        );
        let domains = {},
            sites = {};
        if (ids.domains.length > 0) {
            domains = await getUntilDone('domains', {
                domain_ids: ids.domains.join(',')
            });
            domains = makeIDMapping(domains);
        }
        if (ids.sites.length > 0) {
            sites = await getUntilDone('sites', {
                site_ids: ids.sites.join(',')
            });
            sites = makeIDMapping(sites);
        }
        const managerRoles = Object.entries(contexts).reduce(
            (accumulator, [place, placeRoles]) => {
                const hasTechAdmin = placeRoles.some(id => roles[id].label === TECH_ADMIN);
                let roleObjects = placeRoles.map(id => roles[id]);
                if (hasTechAdmin) {
                    roleObjects = Object.values(roles);
                }
                const [placeLetter, placeID] = place.split(':');
                placeLetter === 'd'
                    ? (accumulator.domains[placeID] = roleObjects)
                    : (accumulator.sites[placeID] = roleObjects);
                return accumulator;
            },
            { domains: {}, sites: {} }
        );
        this.setState({ managerRoles, userdomains: domains, usersites: sites });
    }

    handleSearch(event) {
        const input = event.target.value;
        this.setState({
            search: input
        });
        if (input.length > 2) {
            restClient(GET_LIST, 'users', {
                filter: { q: input, tfa_enabled: true, has_organisational_unit: true, site_ids: '' }
            })
                .then(response => {
                    const userResults = response.data.map(obj => ({
                        id: obj.id,
                        username: obj.username
                    }));
                    this.setState({
                        userResults: userResults
                    });
                })
                .catch(error => {
                    this.handleAPIError(error);
                });
        } else {
            this.setState({
                search: input,
                userResults: null,
                selectedUser: -1,
                userRoles: null,
                selectedDomainSite: null
            });
        }
    }

    async getUserPlaceRoles(user, place, roles) {
        let ids = {};
        // GET USERPLACEROLES FOR SELECTED USER.
        let placeRoles = await restClient(GET_LIST, `user${place}roles`, {
            filter: { user_id: user.id }
        });
        placeRoles = placeRoles.data;
        if (placeRoles.length) {
            // GET THE IDS AND REPLACE THEM WITH THE ACTUAL OBJECTS.
            ids = getUniqueIDs(placeRoles, `${place}_id`);
            let places = await getUntilDone(`${place}s`, {
                ids: ids
            });
            places = makeIDMapping(places);

            placeRoles = placeRoles.reduce((obj, placeRole) => {
                obj[`${placeRole[`${place}_id`]}:${placeRole.role_id}`] = {
                    [place]: places[placeRole[`${place}_id`]],
                    role: roles[placeRole.role_id]
                };
                return obj;
            }, {});
        }
        return placeRoles;
    }

    async handleSelect(rows) {
        if (rows.length > 0) {
            try {
                const roles = this.state.rolesMapping;
                const user = this.state.userResults[rows[0]];
                // GET USERDOMAINROLES FOR SELECTED USER.
                const domainRoles = await this.getUserPlaceRoles(user, 'domain', roles);
                // GET USERSITEROLES FOR SELECTED USER.
                const siteRoles = await this.getUserPlaceRoles(user, 'site', roles);
                // SET THE STATE WITH THE SELECTED USER AND ALL ROLES FOUND.
                this.setState({
                    selectedUser: rows[0],
                    userRoles: {
                        domainRoles: domainRoles,
                        siteRoles: siteRoles
                    }
                });
            } catch (error) {
                this.handleAPIError(error);
            }
        }
    }

    handleDelete(data) {
        const { userResults, selectedUser, userRoles, rolesMapping } = this.state;
        const { showNotification } = this.props;
        const user = userResults[selectedUser];
        if (user) {
            restClient(DELETE, data.resource, {
                id: `${user.id}/${data.id}/${data.role_id}`
            })
                .then(response => {
                    let newUserRoles = userRoles;
                    if (data.resource.split('domain').length > 1) {
                        delete newUserRoles.domainRoles[`${data.id}:${data.role_id}`];
                    } else {
                        delete newUserRoles.siteRoles[`${data.id}:${data.role_id}`];
                    }
                    this.setState({ userRoles: newUserRoles });
                })
                .catch(error => {
                    showNotification(`Error: Role ${rolesMapping[data.role_id]} not removed.`);
                    this.handleAPIError(error);
                });
        } else {
            showNotification('No user selected for role removal', 'warning');
            console.error('No user was selected for role removal.');
        }
    }

    handleDomainSiteChange(value) {
        const [placeType, placeID] = value.split(':');
        const placeName = placeType === 'd' ? 'domains' : 'sites';
        const roles = this.state.managerRoles[placeName][placeID];
        this.setState({
            selectedDomainSite: value,
            roleSelections: roles.reduce((obj, role) => {
                obj[role.id] = {
                    ...role,
                    selected: false
                };
                return obj;
            }, {}),
            hasRolesToAssign: 0
        });
    }

    handleRoleSelection(value) {
        const { roleSelections, hasRolesToAssign } = this.state;
        this.setState({
            hasRolesToAssign: !roleSelections[value].selected
                ? hasRolesToAssign + 1
                : hasRolesToAssign - 1,
            roleSelections: {
                ...roleSelections,
                [value]: {
                    ...roleSelections[value],
                    selected: !roleSelections[value].selected
                }
            },
            message: null
        });
    }

    handleAssign() {
        const {
            userResults,
            selectedUser,
            userRoles,
            userdomains,
            usersites,
            selectedDomainSite,
            rolesMapping
        } = this.state;
        let { roleSelections, hasRolesToAssign } = this.state;
        this.setState({ assigning: true });
        const [placeType, placeID] = selectedDomainSite.split(':');
        const place = placeType === 'd' ? 'domain' : 'site';
        Object.values(roleSelections).map((roleSelection, index) => {
            if (roleSelection.selected) {
                restClient(CREATE, `user${place}roles`, {
                    data: {
                        user_id: userResults[selectedUser].id,
                        [`${place}_id`]: parseInt(placeID, 10),
                        role_id: roleSelection.id
                    }
                })
                    .then(response => {
                        hasRolesToAssign -= 1;
                        roleSelections = {
                            ...roleSelections,
                            [roleSelection.id]: {
                                ...roleSelection,
                                selected: false
                            }
                        };
                        let newUserRoles = userRoles;
                        newUserRoles[`${place}Roles`][`${placeID}:${roleSelection.id}`] = {
                            [place]: place === 'domain' ? userdomains[placeID] : usersites[placeID],
                            role: rolesMapping[roleSelection.id]
                        };
                        this.setState({
                            userRoles: newUserRoles,
                            hasRolesToAssign,
                            roleSelections
                        });
                        if (hasRolesToAssign === 0) {
                            this.setState({
                                assigning: false,
                                message: 'All roles assigned successfully!',
                                roleSelections: null,
                                selectedDomainSite: null
                            });
                        }
                    })
                    .catch(error => {
                        this.setState({
                            assigning: index < roleSelections.length - 1,
                            message:
                                'Some roles are not able to assign or have already been assigned to this user.'
                        });
                        this.handleAPIError(error);
                    });
            }
            return null;
        });
    }

    triggerDeleteDialog(data) {
        this.setState({ open: true, roleToDelete: data });
    }

    handleClose(action) {
        if (action === 'submit') {
            this.handleDelete(this.state.roleToDelete);
            this.setState({ open: false });
        } else {
            this.setState({ open: false });
        }
    }

    clearMessage() {
        this.setState({ message: null });
    }

    handleAPIError(error) {
        if (error.message === 'Token expired') {
            localStorage.removeItem('id_token');
            localStorage.removeItem('permissions');
            this.setState({ validToken: false });
        }
        throw new Error(error);
    }

    render() {
        const {
            assigning,
            message,
            managerRoles,
            search,
            userResults,
            selectedUser,
            userRoles,
            selectedDomainSite,
            roleSelections,
            hasRolesToAssign,
            open,
            validToken
        } = this.state;
        const user = selectedUser >= 0 ? userResults[selectedUser] : null;
        return validToken ? (
            managerRoles ? (
                <Restricted location={this.props.location}>
                    <Card>
                        <CardTitle title="Manage User Roles" />
                        <CardText>
                            <TextField
                                name="UserSearch"
                                placeholder="Search for User"
                                value={search}
                                onChange={this.handleSearch}
                            />
                        </CardText>
                        <CardText>
                            {userResults && userResults.length > 0 ? (
                                <TableField
                                    label="Users Found"
                                    data={userResults}
                                    selected={selectedUser}
                                    onRowSelection={this.handleSelect}
                                    selectable
                                />
                            ) : (
                                'No Users found.'
                            )}
                        </CardText>
                        {selectedUser >= 0 ? (
                            <CardText>
                                <UserCard
                                    user={user}
                                    userRoles={userRoles}
                                    handleDelete={this.triggerDeleteDialog}
                                />
                                <AssignRoleCard
                                    assigning={assigning}
                                    message={message}
                                    clearMessage={this.clearMessage}
                                    selectedDomainSite={selectedDomainSite}
                                    handleDomainSiteChange={this.handleDomainSiteChange}
                                    handleRoleSelection={this.handleRoleSelection}
                                    roleSelections={roleSelections}
                                    handleAssign={this.handleAssign}
                                    hasRolesToAssign={hasRolesToAssign}
                                />
                            </CardText>
                        ) : (
                            ''
                        )}
                        <ConfirmDialog
                            open={open}
                            handleClose={this.handleClose}
                            cancelLabel="No"
                            submitLabel="Delete"
                            text="Are you sure you want to delete this role?"
                        />
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

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ManageUserRoles)
);
