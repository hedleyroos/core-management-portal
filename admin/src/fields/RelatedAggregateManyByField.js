import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import restClient, { GET_MANY_REFERENCE } from '../swaggerRestServer';
import { ToTitle } from '../utils';
import { styles } from '../Theme';

class RelatedAggregateManyByField extends Component {
    constructor(props) {
        super(props);
        this.state = { tableHeaders: [], data: [] };
    }

    componentWillMount() {
        this.getRelatedData();
    }

    getRelatedData = () => {
        const { record, target, reference, by, showNotification } = this.props;
        let parameters = {};
        parameters[target] = record.id;
        restClient(GET_MANY_REFERENCE, reference, parameters)
            .then(response => {
                let data = response.data;
                data = [
                    {
                        id: 1,
                        name: 'David',
                        roles: ['tech_admin', 'governance_admin']
                    },
                    {
                        id: 3,
                        name: 'Person No',
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
        const { label, resource, reference } = this.props;
        return (
            <div style={styles.customTableDiv}>
                <label style={styles.customTableLabel}><span>{label}</span></label>
                {this.state.data ? (
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
                ) : (
                    ''
                )}
            </div>
        );
    }
}

RelatedAggregateManyByField.defaultProps = {
    sort: { field: 'id', order: 'DESC' }
};

export default RelatedAggregateManyByField;
