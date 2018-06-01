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
        this.state = { data: props.data };
    }

    componentWillMount() {
        this.props.data.length
            ? console.log('INFO: Data props given to TableField, no call made.')
            : this.getRelatedData();
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
        const {
            label,
            linkField,
            linkedResource,
            onRowSelection,
            selectable,
            selected
        } = this.props;
        return this.state.data.length ? (
            <div style={styles.customTableDiv}>
                <label style={styles.customTableLabel}>
                    <span>{label}</span>
                </label>
                <Table selectable={selectable} onRowSelection={onRowSelection}>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={selectable}
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
                    <TableBody
                        displayRowCheckbox={selectable}
                        showRowHover={true}
                    >
                        {this.state.data.map((entry, index) => {
                            const isSelected = onRowSelection ? selected === index : null;
                            return (
                                <TableRow key={index} selected={isSelected}>
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
                                            ) : linkField === header &&
                                            entry.id ? (
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
                            );
                        })}
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
    url: PropTypes.string,
    customPathParameters: PropTypes.array,
    data: PropTypes.array,
    onRowSelection: PropTypes.func,
    selectable: PropTypes.bool,
    selected: PropTypes.number
};

TableField.defaultProps = {
    data: [],
    selectable: false
};

export default TableField;
