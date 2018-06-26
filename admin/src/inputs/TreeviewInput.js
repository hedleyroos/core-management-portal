import 'antd/dist/antd.css';

import React, { Component } from 'react';
import { Field } from 'redux-form';
import { TreeSelect } from 'antd';

import { getUntilDone, makeIDMapping, CreateTreeData } from '../utils';
import CircularProgress from 'material-ui/CircularProgress/CircularProgress';

const TreeNode = TreeSelect.TreeNode;

class TreeviewField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.props.input.onChange(value);
        this.setState({ value });
    }

    render() {
        const { label, treeData } = this.props;
        const { value } = this.state;
        return (
            <TreeSelect
                showSearch
                treeData={treeData}
                style={{ width: 300 }}
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder={label}
                allowClear
                onChange={this.handleChange}
            />
        );
    }
}

class TreeviewInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: null
        };
        this.loadData = this.loadData.bind(this);
        this.loadData();
    }

    loadData() {
        getUntilDone('domains')
            .then(data => {
                const domains = makeIDMapping(data, 'd:');
                getUntilDone('sites')
                    .then(data => {
                        const places = {
                            ...domains,
                            ...makeIDMapping(data, 's:')
                        };
                        this.setState({ treeData: CreateTreeData(places, 'domain_id', 'd') });
                    })
                    .catch(error => {
                        throw new Error(error);
                    });
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    render() {
        const { source, label } = this.props;
        const { treeData } = this.state;
        console.log(treeData);
        return treeData ? (
            <span>
                <Field name="test" component={TreeviewField} label="test" />
            </span>
        ) : (
            <CircularProgress />
        );
    }
}

export default TreeviewInput;
