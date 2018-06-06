import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { SelectInput } from 'admin-on-rest';
import CircularProgress from 'material-ui/CircularProgress';

import { getUntilDone } from '../utils';

class UnlimitedDropdownInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            choices: null
        };
		this.loadChoices = this.loadChoices.bind(this);
		this.loadChoices();
        this.handleChange = this.handleChange.bind(this);
    }

    async loadChoices() {
        const { reference, filter } = this.props;
        const results = await getUntilDone(reference, filter || {});
        this.setState({ choices: results });
    }

    handleChange(value) {
        this.setState({ value });
    }

    render() {
		const { source, label, optionText, optionValue } = this.props;
		const selectProps = {
			source: source,
			choices: this.state.choices,
			optionText: optionText,
			optionValue: optionValue || 'id'
		}
        return (
            <span>
                {this.state.choices ? (
                    <Field
                        name={source}
                        component={SelectInput}
                        props={selectProps}
                        label={label || source}
                        onChange={this.handleChange}
                    />
                ) : (
                    <CircularProgress />
                )}
            </span>
        );
    }
}
UnlimitedDropdownInput.propTypes = {
    source: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    filter: PropTypes.object,
    label: PropTypes.string,
    optionText: PropTypes.string,
    optionValue: PropTypes.string
};
UnlimitedDropdownInput.defaultProps = {
    optionText: 'id'
};

export default UnlimitedDropdownInput;
