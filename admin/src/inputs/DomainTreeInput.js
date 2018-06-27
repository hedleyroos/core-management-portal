import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { getUntilDone, makeIDMapping, CreateTreeData } from '../utils';
import CircularProgress from 'material-ui/CircularProgress/CircularProgress';
import TreeviewSelect from './TreeviewSelect';

class DomainTreeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: props.treeData
        };
        this.parser = this.parser.bind(this);
        this.formatter = this.formatter.bind(this);
        this.loadData = this.loadData.bind(this);
        if (!props.treeData) {
            this.loadData();
        }
    }

    parser(value, name) {
        if (this.props.onlyDomains && value){
            return value.split(':')[1];
        }
        return value;
    }

    formatter(value, name) {
        if (this.props.onlyDomains && value) {
            return `d:${value}`;
        }
        return value;
    }

    loadData() {
        getUntilDone('domains')
            .then(data => {
                const domains = makeIDMapping(data, 'd:');
                if (this.props.onlyDomains) {
                    this.setState({ treeData: CreateTreeData(domains) });
                } else {
                    getUntilDone('sites')
                        .then(data => {
                            const places = {
                                ...domains,
                                ...makeIDMapping(data, 's:')
                            };
                            this.setState({ treeData: CreateTreeData(places, 'domain_id', 's') });
                        })
                        .catch(error => {
                            throw new Error(error);
                        });
                }
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    render() {
        const { source, label } = this.props;
        const { treeData } = this.state;
        return treeData ? (
            <span>
                <Field
                    name={source}
                    component={TreeviewSelect}
                    label={label}
                    props={{ treeData, label }}
                    parse={this.parser}
                    format={this.formatter}
                />
            </span>
        ) : (
            <CircularProgress />
        );
    }
}
DomainTreeInput.propTypes = {
    onlyDomains: PropTypes.bool,
    treeData: PropTypes.array
};
DomainTreeInput.defaultProps = {
    onlyDomains: true
};

export default DomainTreeInput;
