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
import restClient, { OPERATIONAL } from '../swaggerRestServer';
import { ToTitle } from '../utils';
import { styles } from '../Theme';

class UserRoleField extends Component {
    constructor(props) {
        super(props);
        this.state = { tableHeaders: [], data: [] };
    }

    componentWillMount() {
        this.getRelatedData();
    }

    getRelatedData = () => {
        const { record, target, showNotification } = this.props;
        // PROPER API CALL TO REPLACE THIS WHEN EXISTS.
        restClient(OPERATIONAL, `user_and_roles_by_${target}`, {
            pathParameters: { domain_id: record.id },
            method: 'GET'
        })
            .then(response => {
                let data = response.data;
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
                <label style={styles.customTableLabel}>
                    <span>{label}</span>
                </label>
                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            {this.state.tableHeaders.map((header, index) => (
                                <TableHeaderColumn key={index}>
                                    {ToTitle(header)}
                                </TableHeaderColumn>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.state.data.map((entry, index) => (
                            <TableRow key={index}>
                                {this.state.tableHeaders.map(
                                    (header, index) => (
                                        <TableRowColumn key={index}>
                                            {entry[header] instanceof Array ? (
                                                <div style={styles.wrapper}>
                                                    {entry[header].map(
                                                        (str, index) =>
                                                            str ? (
                                                                <Chip
                                                                    key={index}
                                                                    style={
                                                                        styles.chip
                                                                    }
                                                                >
                                                                    {str}
                                                                </Chip>
                                                            ) : (
                                                                ''
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

UserRoleField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    target: PropTypes.string.isRequired,
    isLoading: PropTypes.bool
};

export default UserRoleField;
