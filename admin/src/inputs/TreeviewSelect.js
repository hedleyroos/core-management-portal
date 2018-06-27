import 'antd/dist/antd.css';

import React, { Component } from 'react';
import { TreeSelect } from 'antd';

class TreeviewSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.input.value || undefined
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
                style={{
                    fontSize: 16,
                    height: 44,
                    width: 256
                }}
                value={value}
                dropdownStyle={{
                    maxHeight: 400,
                    overflow: 'auto'
                }}
                placeholder={label}
                onChange={this.handleChange}
            />
        );
    }
}

export default TreeviewSelect;
