import 'antd/dist/antd.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TreeSelect } from 'antd';

class TreeviewSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Ant Design TreeSelect does not show the placeholder unless undefined.
            value: props.input.value || undefined
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            // Ant Design TreeSelect does not show the placeholder unless undefined.
            this.setState({ value: nextProps.value || undefined });
        }
    }

    handleChange(value) {
        const { input, onChange } = this.props;
        input.onChange && input.onChange(value);
        onChange && onChange(value);
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
    onChange: PropTypes.func,
    showSearch: PropTypes.bool,
    value: PropTypes.string
};
TreeviewSelect.defaultProps = {
    showSearch: false
};

export default TreeviewSelect;
