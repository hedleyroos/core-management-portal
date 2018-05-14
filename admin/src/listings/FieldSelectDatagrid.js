import { Datagrid } from 'admin-on-rest';
import React, { Component } from 'react';
import CardText from 'material-ui/Card/CardText';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

class FieldSelectDatagrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: props.children
        };
    }

    componentWillReceiveProps(nextProps, currentProps) {
        // Here we setup the state of all checkboxes for showing/hiding each fields.
        if (nextProps.ids && !this.state.checkboxes) {
            const fields = Object.keys(Object.entries(nextProps.data)[0][1]);
            this.setState({
                checkboxes: fields.reduce((obj, field) => {
                    obj[field] = true;
                    return obj;
                }, {})
            });
        }
    }

    updateCheckbox(name) {
        // Toggle the given checkbox state value.
        const nextCheckboxState = {
            ...this.state.checkboxes,
            [name]: !this.state.checkboxes[name]
        };
        this.setState({
            checkboxes: nextCheckboxState,
            children: this.props.children.map(child => {
                return child.props
                    ? nextCheckboxState[child.props.source]
                        ? child
                        : ''
                    : child;
            })
        });
    }

    render() {
        return this.state.checkboxes ? (
            <div>
                <CardText>
                    {Object.entries(this.state.checkboxes).map(
                        ([name, value]) => (
                            <Checkbox
                                key={name}
                                label={name}
                                checked={value}
                                onCheck={() => this.updateCheckbox(name)}
                                checkedIcon={<Visibility />}
                                uncheckedIcon={<VisibilityOff />}
                            />
                        )
                    )}
                </CardText>
                <Datagrid {...this.props}>{this.state.children}</Datagrid>
            </div>
        ) : (
            <CardText>No results found</CardText>
        );
    }
}

export default FieldSelectDatagrid;
