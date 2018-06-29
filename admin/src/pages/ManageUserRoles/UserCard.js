import React from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import { styles } from '../../Theme';
import { NotEmptyObject } from '../../utils';
import { CardActions } from 'material-ui/Card';

const UserCard = props => {
    const { user, userRoles, checkedToDelete, handleCheck, triggerDeleteDialog } = props;
    return (
        <Card>
            <CardTitle title={user.username} subtitle={`ID: ${user.id}`} />
            <Divider />
            <CardHeader title="Domain Roles" />
            <CardText style={styles.wrapper}>
                {userRoles && userRoles.domainRoles && NotEmptyObject(userRoles.domainRoles)
                    ? Object.values(userRoles.domainRoles).map((domainRole, index) => (
                          <Checkbox
                              key={`${domainRole.domain.id}${domainRole.role.id}`}
                              label={`${domainRole.domain.name}: ${domainRole.role.label}`}
                              checked={
                                  !!checkedToDelete[
                                      `d:${domainRole.domain.id}${domainRole.role.id}`
                                  ]
                              }
                              onCheck={() =>
                                  handleCheck({
                                      resource: 'userdomainroles',
                                      key: `d:${domainRole.domain.id}${domainRole.role.id}`,
                                      id: domainRole.domain.id,
                                      role_id: domainRole.role.id
                                  })
                              }
                          />
                      ))
                    : 'User currently has no explicit domain roles.'}
            </CardText>
            <Divider />
            <CardHeader title="Site Roles" />
            <CardText style={styles.wrapper}>
                {userRoles && userRoles.siteRoles && NotEmptyObject(userRoles.siteRoles)
                    ? Object.values(userRoles.siteRoles).map((siteRole, index) => (
                          <Checkbox
                              key={`${siteRole.site.id}${siteRole.role.id}`}
                              label={`${siteRole.site.name}: ${siteRole.role.label}`}
                              checked={
                                  !!checkedToDelete[`s:${siteRole.site.id}${siteRole.role.id}`]
                              }
                              onCheck={() =>
                                  handleCheck({
                                      resource: 'usersiteroles',
                                      key: `s:${siteRole.site.id}${siteRole.role.id}`,
                                      id: siteRole.site.id,
                                      role_id: siteRole.role.id
                                  })
                              }
                          />
                      ))
                    : 'User currently has no explicit site roles.'}
            </CardText>
            {NotEmptyObject(checkedToDelete) && (
                <div>
                    <Divider />
                    <CardText>
                        <CardActions>
                            <RaisedButton
                                label="Remove Roles"
                                secondary={true}
                                onClick={triggerDeleteDialog}
                            />
                        </CardActions>
                    </CardText>
                </div>
            )}
        </Card>
    );
};
UserCard.propTypes = {
    user: PropTypes.object.isRequired,
    userRoles: PropTypes.object.isRequired,
    checkedToDelete: PropTypes.object.isRequired,
    handleCheck: PropTypes.func.isRequired,
    triggerDeleteDialog: PropTypes.func.isRequired
};

export default UserCard;
