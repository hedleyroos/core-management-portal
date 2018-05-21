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
            userResults: [{ id: 1, name: 'Jono' }],
            selectedUser: null
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSearch(event) {
        if (event.target.value.length > 2) {
            console.log(event);
        }
        this.setState({ search: event.target.value });
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
                    {this.state.userResults ? (
                        <CardText>
                            <TableField
                                label="Users Found"
                                data={this.state.userResults}
                                selectable={true}
                            />
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
