import { Pagination } from 'admin-on-rest';
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

import dataProvider, { OPERATIONAL } from '../dataProvider';
import { styles } from '../theme';

const CustomTable = ({ data, total, perPage, paginate, props }) => {
    const {
        label,
        linkField,
        linkedResource,
        onRowSelection,
        selectable,
        selected,
        useCard
    } = props;
    const headers = Object.keys(data[0]);
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
                        {headers.map(header => (
                            <TableHeaderColumn key={header} style={styles.customTableHeader}>
                                {header.toUpperCase()}
                            </TableHeaderColumn>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={selectable} showRowHover>
                    {data.map((entry, index) => {
                        const isSelected = onRowSelection && selected === index;
                        return (
                            <TableRow key={index} selected={isSelected}>
                                {Object.keys(entry).map((header, index) => (
                                    <TableRowColumn key={index}>
                                        {Array.isArray(entry[header]) ? (
                                            <div style={styles.wrapper}>
                                                {entry[header].map(
                                                    (str, index) =>
                                                        str && (
                                                            <Chip key={index} style={styles.chip}>
                                                                {str}
                                                            </Chip>
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
            {perPage &&
                !paginate &&
                total > perPage && (
                    <CardHeader
                        style={styles.customTableBottom}
                        subtitle={`${total - perPage} more found...`}
                    />
                )}
        </React.Fragment>
    );
};

class InlineTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
            pages: null,
            data: this.props.data,
            total: 0
        };
        this.getRelatedData = this.getRelatedData.bind(this);
        this.setupPageData = this.setupPageData.bind(this);
        this.handlePageSelect = this.handlePageSelect.bind(this);
    }

    componentDidMount() {
        const { data } = this.state;
        data.length === 0 ? this.getRelatedData() : this.setupPageData(data);
    }

    getRelatedData() {
        const { record, url, customPathParameters } = this.props;
        dataProvider(OPERATIONAL, `${url}`, {
            pathParameters: customPathParameters ? customPathParameters : [record.id],
            method: 'GET'
        })
            .then(response => {
                let data = response.data;
                if (data.length > 0) {
                    this.setupPageData(data);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    setupPageData(data) {
        const { paginate, perPage } = this.props.perPage;
        this.setState({
            page: 0,
            pages: paginate ? Math.ceil(data.length / perPage) : 1,
            data,
            total: data.length
        });
    }

    handlePageSelect(pageNo) {
        this.setState({
            page: parseInt(pageNo, 10) - 1
        });
    }

    render() {
        const { paginate, perPage } = this.props;
        const { page, data, total } = this.state;
        const slicedData =
            data && data.slice(page * perPage, paginate ? perPage * (page + 1) : perPage);
        return slicedData && slicedData.length ? (
            this.props.useCard ? (
                <Card style={styles.customTableDiv}>
                    <CustomTable
                        data={slicedData}
                        total={total}
                        perPage={perPage}
                        paginate={paginate}
                        props={this.props}
                    />
                    {paginate && (
                        <Pagination
                            total={total}
                            page={page + 1}
                            perPage={perPage}
                            setPage={this.handlePageSelect}
                        />
                    )}
                </Card>
            ) : (
                <div style={styles.customTableDiv}>
                    <CustomTable
                        data={slicedData}
                        total={total}
                        perPage={perPage}
                        paginate={paginate}
                        props={this.props}
                    />
                    {paginate && (
                        <Pagination
                            total={total}
                            page={page + 1}
                            perPage={perPage}
                            setPage={this.handlePageSelect}
                        />
                    )}
                </div>
            )
        ) : (
            ''
        );
    }
}

InlineTable.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    linkField: PropTypes.string,
    linkedResource: PropTypes.string,
    url: PropTypes.string,
    customPathParameters: PropTypes.array,
    data: PropTypes.array,
    onRowSelection: PropTypes.func,
    selectable: PropTypes.bool,
    selected: PropTypes.number,
    paginate: PropTypes.bool,
    perPage: PropTypes.number,
    useCard: PropTypes.bool
};

InlineTable.defaultProps = {
    data: [],
    selectable: false,
    paginate: false,
    perPage: 10,
    useCard: false
};

export default InlineTable;
