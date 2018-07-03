import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
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

const GenerateTable = ({ data, props }) => {
    const {
        label,
        limit,
        linkField,
        linkedResource,
        onRowSelection,
        selectable,
        selected,
        useCard
    } = props;
    console.log(selectable);
    return (
        <React.Fragment>
            {useCard ? (
                <CardTitle title={label} />
            ) : (
                <CardText style={styles.customTableLabel}>
                    <label>
                        <span>{label}</span>
                    </label>
                </CardText>
            )}
            <Table selectable={selectable} onRowSelection={onRowSelection}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={selectable}>
                    <TableRow>
                        {Object.keys(data[0]).map(header => (
                            <TableHeaderColumn key={header} style={styles.customTableHeader}>
                                {header.toUpperCase()}
                            </TableHeaderColumn>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={selectable} showRowHover={true}>
                    {data.map((entry, index) => {
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
                                                            <Chip key={index} style={styles.chip}>
                                                                {str}
                                                            </Chip>
                                                        ) : (
                                                            ''
                                                        )
                                                )}
                                            </div>
                                        ) : linkField === header && entry.id ? (
                                            <Link to={`/${linkedResource}/${entry.id}/show`}>
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
            {limit &&
                data.length > limit && (
                    <CardHeader
                        style={styles.customTableBottom}
                        subtitle={`${data.length - limit} more found...`}
                    />
                )}
        </React.Fragment>
    );
};

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
        const { record, url, customPathParameters, limit } = this.props;
        restClient(OPERATIONAL, `${url}`, {
            pathParameters: customPathParameters ? customPathParameters : [record.id],
            method: 'GET'
        })
            .then(response => {
                let data = response.data;
                if (data.length > 0) {
                    this.setState({
                        data: limit ? data.slice(0, limit) : data
                    });
                }
            })
            .catch(error => {
                throw new Error(error);
            });
    };

    render() {
        const { data } = this.state;
        console.log(this.props);
        return data.length ? (
            this.props.useCard ? (
                <Card style={styles.customTableDiv}>
                    <GenerateTable data={data} props={this.props} />
                </Card>
            ) : (
                <div style={styles.customTableDiv}>
                    <GenerateTable data={data} props={this.props} />
                </div>
            )
        ) : (
            ''
        );
    }
}

TableField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    limit: PropTypes.number,
    linkField: PropTypes.string,
    linkedResource: PropTypes.string,
    url: PropTypes.string,
    customPathParameters: PropTypes.array,
    data: PropTypes.array,
    onRowSelection: PropTypes.func,
    selectable: PropTypes.bool,
    selected: PropTypes.number,
    useCard: PropTypes.bool
};

TableField.defaultProps = {
    data: [],
    selectable: false,
    useCard: false
};

export default TableField;
