import React from 'react';
import Avatar from 'material-ui/Avatar';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import Checkbox from 'material-ui/Checkbox';
import CheckCircleIcon from 'material-ui/svg-icons/action/check-circle';
import ErrorIcon from 'material-ui/svg-icons/alert/error';
import RaisedButton from 'material-ui/RaisedButton';
import { pink300, pink500 } from 'material-ui/styles/colors';

import { NotEmptyObject } from '../../utils';
import DomainTreeInput from '../../inputs/DomainTreeInput';
import Chip from 'material-ui/Chip/Chip';
import { styles } from '../../Theme';

const AssignRoleCard = props => {
    const {
        assigning,
        message,
        clearMessage,
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
                {selectedDomainSite ? (
                    <div>
                        <CardHeader subtitle="Please choose the roles to add:" />
                        <CardText>
                            {NotEmptyObject(roleSelections)
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
                ) : null}
                {hasRolesToAssign ? (
                    <CardActions>
                        <RaisedButton
                            label="Assign Roles"
                            secondary={true}
                            onClick={handleAssign}
                            disabled={assigning}
                        />
                    </CardActions>
                ) : null}
                {message ? (
                    <CardText style={styles.wrapper}>
                        <Chip
                            style={{ margin: 4, backgroundColor: pink300 }}
                            onRequestDelete={clearMessage}
                        >
                            <Avatar size={32} color={pink300} backgroundColor={pink500}>
                                {hasRolesToAssign ? <ErrorIcon /> : <CheckCircleIcon />}
                            </Avatar>
                            {message}
                        </Chip>
                    </CardText>
                ) : null}
            </CardText>
        </Card>
    );
};

export default AssignRoleCard;
