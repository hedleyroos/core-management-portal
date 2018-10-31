import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Collapse from '@material-ui/core/Collapse';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

import EditableDatagrid from './EditableDatagrid';
import { styles } from '../theme';
import { updateGMPUserSiteData } from '../utils';

class FieldSelectDatagrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: props.children,
            expanded: false,
            loading: true
        };
        this.onDragEnd = this.onDragEnd.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
        this.updateCheckbox = this.updateCheckbox.bind(this);
    }

    componentDidMount() {
        const userSiteData = JSON.parse(localStorage.getItem('userSiteData'));
        // Here we setup the state of all checkboxes for showing/hiding each fields.
        const { children, resource } = this.props;
        const settings = userSiteData && userSiteData.settings;
        const hiddenSet = new Set(
            settings && settings[resource] && settings[resource].hiddenFields
        );
        if (children && !this.state.checkboxes) {
            // Create all checkboxes in state with their default value if given in props.
            let checkboxes = {};
            React.Children.map(children, child => {
                if (child && child.props && child.props.source) {
                    checkboxes[child.props.source] = hiddenSet.has(child.props.source)
                        ? false
                        : true;
                }
            });
            // Check if all are not shown
            const allHidden = Object.values(checkboxes).every(value => !value);
            // Set the state with all the children that have false checkboxes omitted.
            this.setState({
                checkboxes: checkboxes,
                children: React.Children.map(children, child => {
                    return child && child.props && child.props.source
                        ? checkboxes[child.props.source]
                            ? child
                            : null
                        : child;
                }),
                allHidden: allHidden,
                loading: false
            });
        }
    }

    handleExpand() {
        this.setState({ expanded: !this.state.expanded });
    }

    updateCheckbox(name) {
        // Toggle the given checkbox state value.
        const { resource } = this.props;
        updateGMPUserSiteData(resource, name);
        const nextCheckboxState = {
            ...this.state.checkboxes,
            [name]: !this.state.checkboxes[name]
        };
        // Check if all are not shown
        const allHidden = Object.values(nextCheckboxState).every(value => !value);
        // Set the state with all the children that have false checkboxes omitted.
        this.setState({
            checkboxes: nextCheckboxState,
            children: React.Children.map(this.props.children, child => {
                return child && child.props && child.props.source
                    ? nextCheckboxState[child.props.source]
                        ? child
                        : null
                    : child;
            }),
            allHidden: allHidden
        });
    }

    onDragEnd({ destination, source }) {
        let children = Array.from(this.state.children);
        const [removed] = children.splice(source.index, 1);
        children.splice(destination.index, 0, removed);
        this.setState({
            children
        });
    }

    render() {
        // Split checkbox rendering into groups of 4.
        const groupSize = 4;
        let groups = [];
        if (this.state.checkboxes) {
            groups = new Array(Math.ceil(Object.keys(this.state.checkboxes).length / groupSize));
            groups = Object.entries(this.state.checkboxes).reduce((accumulator, value, index) => {
                const groupIndex = Math.floor(index / groupSize);
                accumulator[groupIndex]
                    ? accumulator[groupIndex].push(value)
                    : (accumulator[groupIndex] = [value]);
                return accumulator;
            }, groups);
        }

        // Render the Hide/Show field card unless allhidden is true.
        return this.state.loading ? (
            <CircularProgress />
        ) : (
            <div>
                <Card style={styles.fieldOptionsCard}>
                    <CardActions>
                        <Typography />
                        <Button color="primary" onClick={this.handleExpand} fullWidth>
                            Hide/Show Fields
                            <ArrowDownward />
                        </Button>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto">
                        <CardContent>
                            {groups.map((group, index) => (
                                <FormControl
                                    component="fieldset"
                                    key={index}
                                    style={styles.formControl}
                                >
                                    <FormGroup>
                                        {group.map(([name, value]) => (
                                            <FormControlLabel
                                                key={name}
                                                control={
                                                    <Checkbox
                                                        checked={value}
                                                        onChange={() => this.updateCheckbox(name)}
                                                        value={name}
                                                        checkedIcon={<Visibility />}
                                                        icon={<VisibilityOff />}
                                                    />
                                                }
                                                label={name}
                                            />
                                        ))}
                                    </FormGroup>
                                </FormControl>
                            ))}
                        </CardContent>
                    </Collapse>
                </Card>
                {!this.state.allHidden ? (
                    <EditableDatagrid
                        onDragEnd={this.onDragEnd}
                        managedChildren={this.state.children}
                        {...this.props}
                    />
                ) : (
                    <CardContent>Please select at least one field to show.</CardContent>
                )}
            </div>
        );
    }
}

export default FieldSelectDatagrid;
