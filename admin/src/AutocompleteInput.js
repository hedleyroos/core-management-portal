import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import isEqual from 'lodash.isequal';
import AutoComplete from 'material-ui/AutoComplete';

import { FieldTitle } from 'admin-on-rest';
import { translate } from 'admin-on-rest';

export class AutocompleteInput extends Component {
    state = { menuDisabled: true };

    componentWillMount() {
        this.setSearchText(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.props.input.value !== nextProps.input.value ||
            !isEqual(this.props.choices, nextProps.choices)
        ) {
            this.setSearchText(nextProps);
        }
    }

    setSearchText(props) {
        const { choices, input, optionValue } = props;

        const selectedSource = choices.find(
            choice => get(choice, optionValue) === input.value
        );
        const searchText = selectedSource && this.getSuggestion(selectedSource);
        this.setState({ text: searchText });
    }

    handleNewRequest = (chosenRequest, index) => {
        if (index !== -1) {
            const { choices, input, optionValue } = this.props;
            input.onChange(choices[index][optionValue]);
        }
    };

    handleUpdateInput = searchText => {
        this.setState({ text: searchText, menuDisabled: true });
        if (searchText.length >= 3) {
            this.setState({ menuDisabled: false });
            const { setFilter } = this.props;
            setFilter && setFilter(searchText);
        }
    };

    getSuggestion(choice) {
        const { optionText, translate, translateChoice } = this.props;
        const choiceName =
            typeof optionText === 'function'
                ? optionText(choice)
                : get(choice, optionText);
        return translateChoice
            ? translate(choiceName, { _: choiceName })
            : choiceName;
    }

    render() {
        const {
            choices,
            elStyle,
            filter,
            isRequired,
            label,
            meta,
            options,
            optionValue,
            resource,
            source,
        } = this.props;
        if (typeof meta === 'undefined') {
            throw new Error(
                "The AutocompleteInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/admin-on-rest/Inputs.html#writing-your-own-input-component for details."
            );
        }
        const { touched, error } = meta;

        const dataSource = choices.map(choice => ({
            value: get(choice, optionValue),
            text: this.getSuggestion(choice),
        }));

        const menuProps = {
            disableAutoFocus: true,
            maxHeight: this.state.menuDisabled ? 0 : null
        };

        return (
            <AutoComplete
                searchText={this.state.text}
                dataSource={dataSource}
                floatingLabelText={
                    <FieldTitle
                        label={label}
                        source={source}
                        resource={resource}
                        isRequired={isRequired}
                    />
                }
                filter={filter}
                onNewRequest={this.handleNewRequest}
                onUpdateInput={this.handleUpdateInput}
                menuProps={menuProps}
                style={elStyle}
                errorText={touched && error}
                {...options}
            />
        );
    }
}

AutocompleteInput.propTypes = {
    addField: PropTypes.bool.isRequired,
    choices: PropTypes.arrayOf(PropTypes.object),
    elStyle: PropTypes.object,
    filter: PropTypes.func.isRequired,
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.object,
    optionElement: PropTypes.element,
    optionText: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
        .isRequired,
    optionValue: PropTypes.string.isRequired,
    resource: PropTypes.string,
    setFilter: PropTypes.func,
    source: PropTypes.string,
    translate: PropTypes.func.isRequired,
    translateChoice: PropTypes.bool.isRequired,
};

AutocompleteInput.defaultProps = {
    addField: true,
    choices: [],
    filter: AutoComplete.fuzzyFilter,
    options: {},
    optionText: 'name',
    optionValue: 'id',
    translateChoice: true,
};

export default translate(AutocompleteInput);
