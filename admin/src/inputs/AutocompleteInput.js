import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import AutoComplete from 'material-ui/AutoComplete';

import { FieldTitle, translate } from 'admin-on-rest';

/** Overwritten AuthcompleteInput. 
 * It is the same as the admin on rest implementation, 
 * however it only fires a query and will only show results 
 * when 3 characters are typed in or more.
 *
 * This input will also only show a maximum of 10 results and if more,
 * it will show the number of results found (excluding the shown 10) prompting
 * the user to narrow their query down. The input will not submit if nothing
 * has been selected.
 **/

export class AutocompleteInput extends Component {
    state = { menuDisabled: true };

    componentWillMount() {
        this.setSearchText(this.props);
    }

    handleOnBlur = (args) => {
        this.setSearchText(this.props);
    }

    handleNewRequest = (chosenRequest, index) => {
        if (index !== -1) {
            const { choices, input, optionValue } = this.props;
            input.onChange(choices[index][optionValue]);
            this.setSearchText(this.props);
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
        const { optionText } = this.props;
        const choiceName =
            typeof optionText === 'function'
                ? optionText(choice)
                : get(choice, optionText);
        return choiceName;
    }

    setSearchText(props) {
        const { choices, input, optionValue } = props;

        const selectedSource = choices.find(
            choice => get(choice, optionValue) === input.value
        );
        const searchText = selectedSource ? this.getSuggestion(selectedSource) : '';
        this.setState({ text: searchText });
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

        let dataSource = choices.map((choice, index) => {
            return index < 10 ? {
                value: (<AutoComplete.Item primaryText={this.getSuggestion(choice)} value={get(choice, optionValue)} />),
                text: this.getSuggestion(choice)
            } : null;
        });
        dataSource = dataSource.filter( Boolean );

        const omittedResults = choices.length - dataSource.length;

        if (omittedResults > 0) {
            dataSource.push({
                value: (<AutoComplete.Item primaryText={`${omittedResults} more`} value="dummy value" disabled />),
                text: `${omittedResults} more`
            })
        }

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
                menuProps={menuProps}
                onBlur={this.handleOnBlur}
                onNewRequest={this.handleNewRequest}
                onUpdateInput={this.handleUpdateInput}
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
