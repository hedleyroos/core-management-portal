import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { SelectInput } from 'admin-on-rest';
import Card from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import restClient, { GET_LIST } from '../swaggerRestServer';

class DropdownFilterInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: []
        };
        this.loadChoices(props.relation);
    }

    loadChoices(resource) {
        const { field, labelField } = this.props;
        restClient(GET_LIST, resource, {})
            .then(response => {
                console.log(response);
                const choices = response.data.map(entry => {
                    return {
                        id: entry[field],
                        name: entry[labelField ? labelField : field]
                    };
                });
                this.setState({ choices: choices });
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    render() {
        const { label, source } = this.props;
        return this.state.choices.length > 0 ? (
            <Field
                name={source}
                component={SelectInput}
                props={{
                    choices: this.state.choices
                }}
                label={label}
            />
        ) : (
            <CircularProgress />
        );
    }
}
DropdownFilterInput.propTypes = {
    relation: PropTypes.string.isrequired,
    field: PropTypes.string,
    labelField: PropTypes.string
};
DropdownFilterInput.defaultProps = {
    field: 'id'
};

export default DropdownFilterInput;
