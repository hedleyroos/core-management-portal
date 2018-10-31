import { Pagination } from 'react-admin';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import dataProvider, { OPERATIONAL } from '../dataProvider';
import { titleCase, apiErrorHandler } from '../utils';
import { styles } from '../theme';

const CustomTable = ({ data, total, perPage, paginate, props }) => {
    const { label, linkField, linkedResource, onRowSelection, selected, useCard } = props;
    const headers = Object.keys(data[0]);
    return (
        <React.Fragment>
            {useCard ? (
                <Typography variant="title">{label}</Typography>
            ) : (
                <Typography style={styles.customTableLabel}>
                    <label>
                        <span>{label}</span>
                    </label>
                </Typography>
            )}
            <Table>
                <TableHead>
                    <TableRow>
                        {headers.map(header => (
                            <TableCell key={header} style={styles.customTableHeader}>
                                {titleCase(header)}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((entry, index) => {
                        const isSelected = onRowSelection && selected === index;
                        return (
                            <TableRow key={index} selected={isSelected}>
                                {Object.keys(entry).map((header, index) => (
                                    <TableCell key={index}>
                                        {Array.isArray(entry[header]) ? (
                                            <div style={styles.wrapper}>
                                                {entry[header].map(
                                                    (str, index) =>
                                                        str && (
                                                            <Chip
                                                                key={index}
                                                                label={titleCase(
                                                                    str.replace('_', ' ')
                                                                )}
                                                                style={styles.chip}
                                                            />
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
                                    </TableCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {perPage &&
                !paginate &&
                total > perPage && (
                    <Typography variant="title" style={styles.customTableBottom}>
                        {`${total - perPage} more found...`}
                    </Typography>
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
                apiErrorHandler(error);
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
                            rowsPerPageOptions={[]}
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
                            rowsPerPageOptions={[]}
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
