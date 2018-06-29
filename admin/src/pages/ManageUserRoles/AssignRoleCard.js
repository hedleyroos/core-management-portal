import React from 'react';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import { notEmptyObject } from '../../utils';
import DomainTreeInput from '../../inputs/DomainTreeInput';

const AssignRoleCard = props => {
    const {
        assigning,
        treeData,
        selectedDomainSite,
        handleDomainSiteChange,
        handleRoleSelection,
        roleSelections,
        handleAssign,
        hasRolesToAssign
    } = props;
    return (
        <Card style={{ marginTop: 20 }}>
            <CardTitle title="Assign Role" />
            <CardText>
                <CardHeader subtitle="Select a Domain or Site:" />
                <DomainTreeInput
                    label="Select Domain/Site"
                    source="place"
                    treeData={treeData}
                    value={selectedDomainSite}
                    onChange={handleDomainSiteChange}
                    onlyDomains={false}
                    useReduxFormField={false}
                />
                {selectedDomainSite && (
                    <div>
                        <CardHeader subtitle="Please choose the roles to add:" />
                        <CardText>
                            {notEmptyObject(roleSelections)
                                ? Object.values(roleSelections).map(roleSelection => (
                                      <Checkbox
                                          key={roleSelection.id}
                                          label={roleSelection.label}
                                          checked={roleSelection.selected}
                                          onCheck={() => handleRoleSelection(roleSelection.id)}
                                      />
                                  ))
                                : 'No roles to Select on this domain/site.'}
                        </CardText>
                    </div>
                )}
                {hasRolesToAssign > 0 && (
                    <CardActions>
                        <RaisedButton
                            label="Assign Roles"
                            secondary={true}
                            onClick={handleAssign}
                            disabled={assigning}
                        />
                    </CardActions>
                )}
            </CardText>
        </Card>
    );
};

export default AssignRoleCard;
