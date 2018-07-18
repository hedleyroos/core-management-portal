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

import restClient, { OPERATIONAL } from '../swaggerRestServer';
import { styles } from '../Theme';

const CustomTable = ({ data, props }) => {
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
        this.state = {
            page: null,
            pages: null,
            total: 0
        };
        this.perPage = 5;
        this.paginateData = this.paginateData.bind(this);
        this.singlePageData = this.singlePageData.bind(this);
        this.getRelatedData = this.getRelatedData.bind(this);
        this.handlePageSelect = this.handlePageSelect.bind(this);
    }

    componentDidMount() {
        const { data, paginate } = this.props;
        data.length === 0
            ? this.getRelatedData()
            : paginate
                ? this.paginateData(data)
                : this.singlePageData(data);
    }

    paginateData(data) {
        let total = 0;
        const pages = data.reduce((accumulator, piece, index) => {
            total++;
            let page = Math.floor(index / this.perPage);
            accumulator[page] = accumulator[page] ? [...accumulator[page], piece] : [piece];
            return accumulator;
        }, {});
        this.setState({
            page: 0,
            pages,
            total
        });
    }

    singlePageData(data) {
        this.setState({
            page: 0,
            pages: {
                0: data.slice(0, this.props.limit)
            }
        });
    }

    getRelatedData() {
        const { record, url, customPathParameters, paginate } = this.props;
        restClient(OPERATIONAL, `${url}`, {
            pathParameters: customPathParameters ? customPathParameters : [record.id],
            method: 'GET'
        })
            .then(response => {
                let data = response.data;
                if (data.length > 0) {
                    paginate ? this.paginateData(data) : this.singlePageData(data);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    handlePageSelect(pageNo) {
        this.setState({
            page: parseInt(pageNo, 10) - 1
        });
    }

    render() {
        const { paginate } = this.props;
        const { page, pages, total } = this.state;
        const data = pages && pages[page] ? pages[page] : null;
        const pageArray = pages ? new Array(Object.keys(pages).length).fill(0) : null;
        return data ? (
            this.props.useCard ? (
                <Card style={styles.customTableDiv}>
                    <CustomTable data={data} props={this.props} />
                    {paginate &&
                        pageArray.length > 1 && (
                            <Pagination
                                total={total}
                                page={page + 1}
                                perPage={this.perPage}
                                setPage={this.handlePageSelect}
                            />
                        )}
                </Card>
            ) : (
                <div style={styles.customTableDiv}>
                    <CustomTable data={data} props={this.props} />
                    {paginate &&
                        pageArray.length > 1 && (
                            <Pagination
                                total={total}
                                page={page + 1}
                                perPage={this.perPage}
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
    paginate: PropTypes.bool,
    useCard: PropTypes.bool
};

TableField.defaultProps = {
    data: [],
    limit: 20,
    selectable: false,
    paginate: false,
    useCard: false
};

export default TableField;
