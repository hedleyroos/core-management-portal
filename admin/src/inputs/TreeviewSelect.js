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
        const { input, onChange } = this.props;
        if (input.onChange) {
            input.onChange(value);
            this.setState({ value });
        }
        if (onChange) {
            onChange(value);
        }
    }

    render() {
		const { label, treeData, showSearch } = this.props;
		let value;
		if (this.props.value) {
			value = this.props.value || undefined;
		} else {
			value = this.state.value;
		}
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
    onChange: PropTypes.func,
	showSearch: PropTypes.bool,
	value: PropTypes.string
};
TreeviewSelect.defaultProps = {
    showSearch: false
};

export default TreeviewSelect;
