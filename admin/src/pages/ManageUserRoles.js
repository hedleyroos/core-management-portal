import { Restricted } from 'admin-on-rest';
import React, { Component } from 'react';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import restClient, { GET_LIST } from '../swaggerRestServer';
import TableField from '../fields/TableField';

class ManageUserRoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            userResults: null,
            userRoles: null,
            selectedUser: null
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
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
                userRoles: null
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

    render() {
        const { search, userResults, selectedUser, userRoles } = this.state;
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
                                <CardHeader
                                    title={user.username}
                                    subtitle={`ID: ${user.id}`}
                                />
                                <CardText>
                                    {userRoles
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
