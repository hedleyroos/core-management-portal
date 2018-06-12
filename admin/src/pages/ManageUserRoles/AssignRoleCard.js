import React from 'react';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem/MenuItem';

import { NotEmptyObject } from '../../utils';
import { styles } from '../../Theme';

const AssignRoleCard = props => {
    const {
        selectedDomainSite,
        handleDomainSiteChange,
        userdomains,
        usersites,
        handleRoleSelection,
        roleSelections,
        handleAssign,
        hasRolesToAssign
    } = props;
    return (
        <Card>
            <CardTitle title="Assign Role" />
            <CardText>
                <CardHeader subtitle="Select a Domain or Site:" />
                <DropDownMenu
                    value={selectedDomainSite}
                    onChange={handleDomainSiteChange}
                    style={styles.wideDropDown}
                    autoWidth={false}
                >
                    <MenuItem value={null} primaryText="Select Domain/Site" disabled />
                    {NotEmptyObject(userdomains)
                        ? Object.values(userdomains).map(domain => (
                              <MenuItem
                                  key={`${domain.id}:domain`}
                                  value={`${domain.id}:domain`}
                                  primaryText={domain.name}
                                  secondaryText="Domain"
                              />
                          ))
                        : null}
                    {NotEmptyObject(userdomains) && NotEmptyObject(usersites) ? (
                        <Divider />
                    ) : null}
                    {NotEmptyObject(usersites)
                        ? Object.values(usersites).map(site => (
                              <MenuItem
                                  key={`${site.id}:site`}
                                  value={`${site.id}:site`}
                                  primaryText={site.name}
                                  secondaryText="Site"
                              />
                          ))
                        : null}
                </DropDownMenu>
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
                    <CardText>
                        <RaisedButton
                            label="Assign Roles"
                            secondary={true}
                            onClick={handleAssign}
                        />
                    </CardText>
                ) : null}
            </CardText>
        </Card>
    );
};

export default AssignRoleCard;