import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import isEqual from 'lodash.isequal';
import AutoComplete from 'material-ui/AutoComplete';

import { FieldTitle } from 'admin-on-rest';
import { translate } from 'admin-on-rest';

/** Overwritten AuthcompleteInput. 
 * It is the same as the admin on rest implementation, 
 * however it only fires a query and will only show results 
 * when 3 characters are typed in or more.
 *
 * This input will also omit results beyond ten and prompt the user to
 * narrow their query down, the input will not submit if there is not a
 * valid string in the autocomplete.
 **/

export class AutocompleteInput extends Component {
    state = { menuDisabled: true };

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

        const dataSource = choices.map((choice, index) => {
            if (index < 2) {
                return {
                    value: (<AutoComplete.Item primaryText={this.getSuggestion(choice)} value={get(choice, optionValue)} />),
                    text: this.getSuggestion(choice)
                }
            }
        });

        let omittedResults = choices.length - 2;

        dataSource.push({
            value: (<AutoComplete.Item primaryText={`${omittedResults} more`} value="dummy value" disabled />),
            text: `${omittedResults} more`
        })

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
    source: PropTypes.string
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
