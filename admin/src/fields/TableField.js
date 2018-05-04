import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
import { styles } from '../Theme';

class TableField extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentWillMount() {
        this.getRelatedData();
    }

    getRelatedData = () => {
        const { record, url, customPathParameters } = this.props;
        // PROPER API CALL TO REPLACE THIS WHEN EXISTS.
        restClient(OPERATIONAL, `${url}`, {
            pathParameters: customPathParameters
                ? customPathParameters
                : [record.id],
            method: 'GET'
        })
            .then(response => {
                let data = response.data;
                if (data.length > 0) {
                    this.setState({
                        data: data
                    });
                }
            })
            .catch(error => {
                throw new Error(error);
            });
    };

    render() {
        const { label, linkField, linkedResource } = this.props;
        return this.state.data.length > 0 ? (
            <div style={styles.customTableDiv}>
                <label style={styles.customTableLabel}>
                    <span>{label}</span>
                </label>
                <Table selectable={false}>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            {Object.keys(this.state.data[0]).map(header => (
                                <TableHeaderColumn
                                    key={header}
                                    style={styles.customTableHeader}
                                >
                                    {header.toUpperCase()}
                                </TableHeaderColumn>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover={true}>
                        {this.state.data.map((entry, index) => (
                            <TableRow key={index}>
                                {Object.keys(entry).map((header, index) => (
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
                                        ) : linkField === header && entry.id ? (
                                            <Link
                                                to={`/${linkedResource}/${
                                                    entry.id
                                                }/show`}
                                            >
                                                {entry[header]}
                                            </Link>
                                        ) : (
                                            <span>{entry[header]}</span>
                                        )}
                                    </TableRowColumn>
                                ))}
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

TableField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    linkField: PropTypes.string,
    linkedResource: PropTypes.string,
    url: PropTypes.string.isRequired,
    customPathParameters: PropTypes.array
};

export default TableField;
