import { Restricted, showNotification as showNotificationAction } from 'admin-on-rest';
import jwtDecode from 'jwt-decode';
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
import { makeIDMapping, getUniqueIDs } from '../../utils';

class ManageUserRoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            userResults: null,
            userRoles: null,
            selectedUser: -1,
            userdomains: {},
            userdomainroles: {},
            usersites: {},
            usersiteroles: {},
            selectedDomainSite: null,
            roleSelections: null,
            rolesMapping: null,
            hasRolesToAssign: 0,
            open: false,
            roleToDelete: null,
            validToken: true
        };
        this.getAllUserData = this.getAllUserData.bind(this);
        this.getAllUserData();
        this.getWhereUserHasRoles = this.getWhereUserHasRoles.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDomainSiteChange = this.handleDomainSiteChange.bind(this);
        this.handleRoleSelection = this.handleRoleSelection.bind(this);
        this.handleAssign = this.handleAssign.bind(this);
        this.triggerDeleteDialog = this.triggerDeleteDialog.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAPIError = this.handleAPIError.bind(this);
    }

    async getAllUserData() {
        try {
            let roles = await restClient(GET_MANY, 'roles', {});
            roles = makeIDMapping(roles.data);
            this.setState({ rolesMapping: roles });
            await this.getWhereUserHasRoles('userdomainroles', 'domain_id', roles);
            await this.getWhereUserHasRoles('usersiteroles', 'site_id', roles);
        } catch (error) {
            this.handleAPIError(error);
        }
    }

    async getWhereUserHasRoles(resource, key, roles) {
        const userID = jwtDecode(localStorage.getItem('id_token')).sub;
        let placeRoles = await restClient(GET_LIST, resource, {
            filter: { user_id: userID }
        });
        const ids = getUniqueIDs(placeRoles.data, key);
        let places = [];

        if (ids.length > 0) {
            places = await restClient(
                GET_LIST,
                resource.split('domain').length > 1 ? 'domains' : 'sites',
                {
                    filter: {
                        [`${key}s`]: ids.join(',')
                    }
                }
            );
            places = makeIDMapping(places.data);
        }
        placeRoles = placeRoles.data.reduce((obj, placeRole) => {
            obj[placeRole[key]] = obj[placeRole[key]]
                ? [...obj[placeRole[key]], roles[placeRole.role_id]]
                : [roles[placeRole.role_id]];
            return obj;
        }, {});
        const placeName = resource.split('roles')[0] + 's';
        this.setState({ [resource]: placeRoles, [placeName]: places });
    }

    handleSearch(event) {
        const input = event.target.value;
        this.setState({
            search: input
        });
        if (input.length > 2) {
            restClient(GET_LIST, 'users', {
                filter: { q: input, tfa_enabled: true }
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
            let places = await restClient(GET_MANY, `${place}s`, {
                ids: ids
            });
            places = makeIDMapping(places.data);

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

    handleDomainSiteChange(event, index, value) {
        const splitValue = value.split(':');
        const roles = this.state[`user${splitValue[1]}roles`][splitValue[0]];
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
            }
        });
    }

    async handleAssign() {
        const {
            userResults,
            selectedUser,
            userRoles,
            userdomains,
            usersites,
            selectedDomainSite,
            rolesMapping,
            roleSelections,
            hasRolesToAssign
        } = this.state;
        const { showNotification } = this.props;
        const placeSplit = selectedDomainSite.split(':');
        let allCreated = true;
        // TODO: Maybe look at doing the fetches in parallel rather.
        Object.values(roleSelections).map(async roleSelection => {
            if (roleSelection.selected) {
                try {
                    await restClient(CREATE, `user${placeSplit[1]}roles`, {
                        data: {
                            user_id: userResults[selectedUser].id,
                            [`${placeSplit[1]}_id`]: parseInt(placeSplit[0], 10),
                            role_id: roleSelection.id
                        }
                    });
                    let newUserRoles = userRoles;
                    newUserRoles[`${placeSplit[1]}Roles`][
                        `${placeSplit[0]}:${roleSelection.id}`
                    ] = {
                        [placeSplit[1]]:
                            placeSplit[1] === 'domain'
                                ? userdomains[placeSplit[0]]
                                : usersites[placeSplit[0]],
                        role: rolesMapping[roleSelection.id]
                    };
                    this.setState({
                        userRoles: newUserRoles,
                        hasRolesToAssign: hasRolesToAssign - 1,
                        roleSelections: {
                            ...roleSelections,
                            [roleSelection.id]: {
                                ...roleSelection,
                                selected: false
                            }
                        }
                    });
                } catch (error) {
                    allCreated = false;
                    showNotification(`Role ${roleSelection.label}: Exists or Error`, 'warning');
                    this.handleAPIError(error);
                }
            }
            return null;
        });
        if (allCreated) {
            showNotification('All Roles assigned.', 'success');
            this.setState({
                hasRolesToAssign: 0,
                roleSelections: null,
                selectedDomainSite: null
            });
        }
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
            search,
            userResults,
            selectedUser,
            userRoles,
            userdomains,
            usersites,
            selectedDomainSite,
            roleSelections,
            hasRolesToAssign,
            open,
            validToken
        } = this.state;
        const user = selectedUser >= 0 ? userResults[selectedUser] : null;
        return validToken ? (
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
                                selectable={true}
                                selected={selectedUser}
                                onRowSelection={this.handleSelect}
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
                                selectedDomainSite={selectedDomainSite}
                                handleDomainSiteChange={this.handleDomainSiteChange}
                                userdomains={userdomains}
                                usersites={usersites}
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
            <Redirect to="/login" />
        );
    }
}

export default withRouter(
    connect(null, {
        showNotification: showNotificationAction
    })(ManageUserRoles)
);
