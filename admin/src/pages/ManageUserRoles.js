import React, { Component } from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import { Restricted } from 'admin-on-rest';
import TextField from 'material-ui/TextField';
import TableField from '../fields/TableField';

class ManageUserRoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            userResults: null,
            selectedUser: null
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSearch(event) {
        let userResults = null;
        if (event.target.value.length > 2) {
            userResults = [{ id: 1, name: 'Jono' }];
        }
        this.setState({
            search: event.target.value,
            userResults: userResults
        });
    }

    handleSelect(event) {
        console.log(event);
        this.setState({ selectedUser: event.target.value });
    }

    render() {
        return (
            <Restricted>
                <Card>
                    <CardTitle title="Manage User Roles" />
                    <CardText>
                        <TextField
                            name="UserSearch"
                            placeholder="Search for User"
                            value={this.state.search}
                            onChange={this.handleSearch}
                        />
                    </CardText>
                    <CardText>
                        {this.state.userResults ? (
                            <TableField
                                label="Users Found"
                                data={this.state.userResults}
                                selectable={true}
                            />
                        ) : (
                            'No Users found.'
                        )}
                    </CardText>
                </Card>
            </Restricted>
        );
    }
}

export default ManageUserRoles;
