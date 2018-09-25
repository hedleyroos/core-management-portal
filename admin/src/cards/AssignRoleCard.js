import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Typography
} from '@material-ui/core';
import red from '@material-ui/core/colors/red';

import DomainTreeInput from '../inputs/DomainTreeInput';
import { notEmptyObject } from '../utils';

const AssignRoleCard = ({
    amountSelectedToAssign,
    assigning,
    assignmentLocation,
    availableRoles,
    currentRoles,
    handleAssign,
    handleChange,
    handleSelect,
    rolesToAssign,
    treeData
}) => (
    <Card style={{ marginTop: 20 }}>
        <CardContent>
            <Typography variant="title" paragraph>
                Assign Role
            </Typography>
            <Typography>Select a Domain or Site:</Typography>
            <DomainTreeInput
                label="Select Domain/Site"
                source="place"
                treeData={treeData}
                value={assignmentLocation}
                onChange={handleChange}
                onlyDomains={false}
                useReduxFormField={false}
            />
            {assignmentLocation && (
                <div>
                    {notEmptyObject(rolesToAssign) ? (
                        <React.Fragment>
                            <FormControl>
                                <FormLabel component="legend">
                                    Please select roles to assign:
                                </FormLabel>
                                <FormGroup>
                                    {Object.values(rolesToAssign).map(role => (
                                        <FormControlLabel
                                            key={role.id}
                                            control={
                                                <Checkbox
                                                    checked={role.checked}
                                                    onChange={() => handleSelect(role.id)}
                                                    value={role.id.toString()}
                                                />
                                            }
                                            label={role.label}
                                        />
                                    ))}
                                </FormGroup>
                            </FormControl>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography style={{ color: red[500] }} paragraph>
                                {availableRoles.length
                                    ? `The following roles are available: [${availableRoles.join(
                                          ', '
                                      )}]`
                                    : `No roles to Select on this domain/site.`}
                            </Typography>
                            <Typography>
                                {`You have the following roles here: [${currentRoles.join(', ')}]`}
                            </Typography>
                        </React.Fragment>
                    )}
                </div>
            )}
            {amountSelectedToAssign > 0 && (
                <CardActions>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleAssign}
                        disabled={assigning}
                    >
                        Assign Roles
                    </Button>
                </CardActions>
            )}
        </CardContent>
    </Card>
);

AssignRoleCard.propTypes = {
    amountSelectedToAssign: PropTypes.number,
    assigning: PropTypes.bool,
    assignmentLocation: PropTypes.string,
    handleAssign: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
    rolesToAssign: PropTypes.object,
    treeData: PropTypes.array.isRequired
};

AssignRoleCard.defaultProps = {
    amountSelectedToAssign: 0,
    assigning: false
};

export default AssignRoleCard;
