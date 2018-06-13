import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { SelectInput } from 'admin-on-rest';
import CircularProgress from 'material-ui/CircularProgress';

import { getUntilDone } from '../utils';
import restClient, { GET_LIST } from '../swaggerRestServer';

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
        const { reference, filter, limited } = this.props;
        try {
            const results = limited
                ? await restClient(GET_LIST, reference, { filter })
                : await getUntilDone(reference, filter);
            this.setState({ choices: results });
        } catch (error) {
            console.error(error);
        }
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
        };
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
    optionValue: PropTypes.string,
    limited: PropTypes.bool
};
UnlimitedDropdownInput.defaultProps = {
    optionText: 'id',
    limited: false,
    filter: {}
};

export default UnlimitedDropdownInput;
