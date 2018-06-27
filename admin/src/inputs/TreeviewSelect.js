import 'antd/dist/antd.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        const { label, treeData, showSearch } = this.props;
        const { value } = this.state;
        return (
            <TreeSelect
                showSearch={showSearch}
                treeData={treeData}
                style={{
                    fontSize: 16,
                    height: 40,
					width: 256,
					marginTop: 40
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
TreeviewSelect.propTypes = {
	showSearch: PropTypes.bool
}
TreeviewSelect.defaultProps = {
	showSearch: false
}

export default TreeviewSelect;
