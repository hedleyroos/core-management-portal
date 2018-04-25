import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import restClient, { GET_LIST } from '../swaggerRestServer';
import { ToTitle } from '../utils';
import { styles } from '../Theme';

class UserRoleTableField extends Component {
    constructor(props) {
        super(props);
        this.state = { tableHeaders: [], data: [] };
    }

    componentWillMount() {
        this.getRelatedData();
    }

    getRelatedData = () => {
        const { record, target, reference, showNotification } = this.props;
        let parameters = { filters: {} };
        parameters[target] = record.id;
        // PROPER API CALL TO REPLACE THIS WHEN EXISTS.
        restClient(GET_LIST, reference, parameters)
            .then(response => {
                let data = response.data;
                data = [
                    {
                        id: 1,
                        name: 'Fake User 1',
                        roles: ['tech_admin', 'governance_admin']
                    },
                    {
                        id: 3,
                        name: 'Fake User 2',
                        roles: ['role_delagator']
                    }
                ];
                if (data.length > 0) {
                    const tableHeaders = Object.keys(data[0]);
                    this.setState({
                        tableHeaders: tableHeaders,
                        data: data
                    });
                }
            })
            .catch(e => {
                console.error(e);
                showNotification('Error: Related Aggregate Call Failed!');
            });
    };

    render() {
        const { label } = this.props;
        return this.state.data.length > 0 ? (
            <div style={styles.customTableDiv}>
                <label style={styles.customTableLabel}><span>{label}</span></label>
                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            {this.state.tableHeaders.map(
                                (header, index) => (
                                    <TableHeaderColumn key={index}>
                                        {ToTitle(header)}
                                    </TableHeaderColumn>
                                )
                            )}
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.state.data.map((entry, index) => (
                            <TableRow key={index}>
                                {this.state.tableHeaders.map(
                                    (header, index) => (
                                        <TableRowColumn key={index}>
                                            {entry[header] instanceof
                                            Array ? (
                                                <div style={styles.wrapper}>
                                                    {entry[header].map(
                                                        (str, index) => (
                                                            <Chip
                                                                key={index}
                                                                style={
                                                                    styles.chip
                                                                }
                                                            >
                                                                {str}
                                                            </Chip>
                                                        )
                                                    )}
                                                </div>
                                            ) : (
                                                entry[header]
                                            )}
                                        </TableRowColumn>
                                    )
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        ) : (
            ''
        );
    }
}

UserRoleTableField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    reference: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
};

export default UserRoleTableField;
