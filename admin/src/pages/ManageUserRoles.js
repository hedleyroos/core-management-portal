import { Restricted } from 'admin-on-rest';
import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';
import restClient, { GET_LIST } from '../swaggerRestServer';
import TableField from '../fields/TableField';
import MenuItem from 'material-ui/MenuItem/MenuItem';

class ManageUserRoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            userResults: null,
            userRoles: null,
            selectedUser: null,
            userdomainroles: {},
            usersiteroles: {},
            selectedDomainSite: null,
            selectedRole: null
        };
        this.getWhereUserHasRoles = this.getWhereUserHasRoles.bind(this);
        this.getWhereUserHasRoles('userdomainroles', 'domain_id');
        this.getWhereUserHasRoles('usersiteroles', 'site_id');
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleDomainSiteChange = this.handleDomainSiteChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
    }

    getWhereUserHasRoles(resource, key) {
        const userID = jwtDecode(localStorage.getItem('id_token')).sub;

        restClient(GET_LIST, resource, {
            filter: { user_id: userID }
        })
            .then(response => {
                const places = response.data.reduce((obj, placeRole) => {
                    if (obj[placeRole[key]]) {
                        obj[placeRole[key]].push(placeRole.role_id);
                    } else {
                        obj[placeRole[key]] = [placeRole.role_id];
                    }
                    return obj;
                }, {});
                this.setState({ [resource]: places });
            })
            .catch(error => {
                console.error(error);
            });
    }

    handleSearch(event) {
        const input = event.target.value;
        if (input.length > 2) {
            restClient(GET_LIST, 'users', {
                filter: { q: input }
            })
                .then(response => {
                    const userResults = response.data.map(obj => ({
                        id: obj.id,
                        username: obj.username
                    }));
                    this.setState({
                        search: input,
                        userResults: userResults
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            this.setState({
                search: input,
                userResults: null,
                selectedUser: null,
                userRoles: null,
                selectedDomainSite: null
            });
        }
    }

    handleSelect(rows) {
        if (rows.length > 0) {
            const user = this.state.userResults[rows[0]];
            restClient(GET_LIST, 'userdomainroles', {
                filter: { user_id: user.id }
            })
                .then(response => {
                    const domainRoles = response.data;
                    restClient(GET_LIST, 'usersiteroles', {
                        filter: { user_id: user.id }
                    })
                        .then(response => {
                            const userRoles = response.data;
                            userRoles.push(...domainRoles);
                            this.setState({
                                selectedUser: rows[0],
                                userRoles: userRoles
                            });
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    handleDomainSiteChange(event, index, value) {
        this.setState({ selectedDomainSite: value });
    }

    handleRoleChange(event, index, value) {
        this.setState({ selectedRole: value});
    }

    render() {
        const {
            search,
            userResults,
            selectedUser,
            userRoles,
            userdomainroles,
            usersiteroles,
            selectedDomainSite,
            selectedRole
        } = this.state;
        const user = selectedUser !== null ? userResults[selectedUser] : null;
        return (
            <Restricted>
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
                    {selectedUser !== null ? (
                        <CardText>
                            <Card>
                                <CardTitle
                                    title={user.username}
                                    subtitle={`ID: ${user.id}`}
                                />
                                <Divider />
                                <CardHeader title="Current Roles" />
                                <CardText>
                                    {userRoles && userRoles.length > 0
                                        ? userRoles.map((userRole, index) => (
                                              <Chip key={index}>
                                                  {`${userRole.domain_id ||
                                                      userRole.site_id}: ${
                                                      userRole.role_id
                                                  }`}
                                              </Chip>
                                          ))
                                        : 'User currently has no roles.'}
                                </CardText>
                                <Divider />
                                <CardHeader title="Assign Role" />
                                <CardText>
                                    <DropDownMenu
                                        value={selectedDomainSite}
                                        onChange={this.handleDomainSiteChange}
                                    >
                                        <MenuItem
                                            value={null}
                                            primaryText="Select Domain/Site"
                                            disabled
                                        />
                                        {Object.keys(userdomainroles).length > 0
                                            ? Object.keys(userdomainroles).map(
                                                  domain => (
                                                      <MenuItem
                                                          key={domain}
                                                          value={domain}
                                                          primaryText={domain}
                                                          secondaryText="Domain"
                                                      />
                                                  )
                                              )
                                            : null}
                                        {Object.keys(userdomainroles).length >
                                            0 &&
                                        Object.keys(usersiteroles).length >
                                            0 ? (
                                            <Divider />
                                        ) : null}
                                        {Object.keys(usersiteroles).length > 0
                                            ? Object.keys(usersiteroles).map(
                                                  site => (
                                                      <MenuItem
                                                          value={site}
                                                          primaryText={site}
                                                          secondaryText="Site"
                                                      />
                                                  )
                                              )
                                            : null}
                                    </DropDownMenu>
                                    {selectedDomainSite ? (
                                        <DropDownMenu
                                            value={selectedRole}
                                            onChange={this.handleRoleChange}
                                        >
                                            <MenuItem value={null} primaryText="Select a Role to Assign" />
                                        </DropDownMenu>
                                    ) : null}
                                </CardText>
                            </Card>
                        </CardText>
                    ) : (
                        ''
                    )}
                </Card>
            </Restricted>
        );
    }
}

export default ManageUserRoles;
