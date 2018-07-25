import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import {
    invalidToken,
    setAssignmentLocation,
    checkRoleForAssign,
    assignRole,
    allAssigned
} from '../../actions/manageUserRoles';
import {
    errorNotificationAnt,
    notEmptyObject,
    successNotificationAnt,
    apiErrorHandler
} from '../../utils';
import DomainTreeInput from '../../inputs/DomainTreeInput';
import restClient, { CREATE } from '../../restClient';
import { PLACE_MAPPING } from '../../constants';

const mapStateToProps = state => ({
    manageUserRoles: state.manageUserRoles
});

const mapDispatchToProps = dispatch => ({
    invalidToken: () => dispatch(invalidToken()),
    setAssignmentLocation: key => dispatch(setAssignmentLocation(key)),
    checkRoleForAssign: key => dispatch(checkRoleForAssign(key)),
    assignRole: (key, userRole) => dispatch(assignRole(key, userRole)),
    allAssigned: () => dispatch(allAssigned())
});

class AssignRoleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assigning: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleAssign = this.handleAssign.bind(this);
    }

    handleChange(key) {
        this.props.setAssignmentLocation(key);
    }

    handleSelect(key) {
        this.props.checkRoleForAssign(key);
    }

    handleAssign() {
        const {
            amountSelectedToAssign,
            assignmentLocation,
            managerDomains,
            managerSites,
            roleMapping,
            selectedUser,
            userResults,
            rolesToAssign
        } = this.props.manageUserRoles;

        let successCount = amountSelectedToAssign;
        if (successCount) {
            this.setState({ assigning: true });
            const [placeType, placeID] = assignmentLocation.split(':');
            const place = PLACE_MAPPING[placeType];
            let count = 0;
            /**
             * This map with fire off creating user roles for each role that was selected
             * on the given domain or site.
             */
            Object.values(rolesToAssign).map((role, index) => {
                if (role.checked) {
                    count += 1;
                    restClient(CREATE, `user${place}roles`, {
                        data: {
                            user_id: userResults[selectedUser].id,
                            [`${place}_id`]: parseInt(placeID, 10),
                            role_id: role.id
                        }
                    })
                        .then(response => {
                            successCount -= 1;
                            const placeObject =
                                place === 'domain'
                                    ? managerDomains[`d:${placeID}`]
                                    : managerSites[`s:${placeID}`];
                            this.props.assignRole(`${placeType}:${placeID}:${role.id}`, {
                                [place]: placeObject,
                                role: roleMapping[role.id],
                                checked: false
                            });
                            successNotificationAnt(
                                `Role '${role.label}' assigned on ${place} '${placeObject.name}'`,
                                null,
                                3
                            );
                            if (!successCount) {
                                successNotificationAnt('Assignment Action Complete', 'Done', 4);
                                this.setState({ assigning: false });
                                this.props.allAssigned();
                            } else {
                                this.setState({ assigning: count !== amountSelectedToAssign });
                            }
                        })
                        .catch(error => {
                            errorNotificationAnt(`Role '${role.label}' cannot be assigned.`);
                            this.setState({ assigning: count !== amountSelectedToAssign });
                            const invalidToken = apiErrorHandler(error);
                            invalidToken && this.props.invalidToken();
                        });
                }
                return null;
            });
        }
    }

    render() {
        const { assigning } = this.state;
        const {
            amountSelectedToAssign,
            assignmentLocation,
            rolesToAssign,
            treeData
        } = this.props.manageUserRoles;
        return (
            <Card style={{ marginTop: 20 }}>
                <CardTitle title="Assign Role" />
                <CardText>
                    <CardHeader subtitle="Select a Domain or Site:" />
                    <DomainTreeInput
                        label="Select Domain/Site"
                        source="place"
                        treeData={treeData}
                        value={assignmentLocation}
                        onChange={this.handleChange}
                        onlyDomains={false}
                        useReduxFormField={false}
                    />
                    {assignmentLocation && (
                        <div>
                            <CardHeader subtitle="Please choose the roles to add:" />
                            <CardText>
                                {notEmptyObject(rolesToAssign)
                                    ? Object.values(rolesToAssign).map(role => (
                                          <Checkbox
                                              key={role.id}
                                              label={role.label}
                                              checked={role.checked}
                                              onCheck={() => this.handleSelect(role.id)}
                                          />
                                      ))
                                    : 'No roles to Select on this domain/site.'}
                            </CardText>
                        </div>
                    )}
                    {amountSelectedToAssign > 0 && (
                        <CardActions>
                            <RaisedButton
                                label="Assign Roles"
                                secondary={true}
                                onClick={this.handleAssign}
                                disabled={assigning}
                            />
                        </CardActions>
                    )}
                </CardText>
            </Card>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssignRoleCard);
