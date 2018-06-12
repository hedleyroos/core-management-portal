import React from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import { styles } from '../../Theme';
import { NotEmptyObject } from '../../utils';

const UserCard = props => {
    const { user, userRoles, handleDelete } = props;
    return (
        <Card>
            <CardTitle title={user.username} subtitle={`ID: ${user.id}`} />
            <Divider />
            <CardHeader title="Domain Roles" />
            <CardText style={styles.wrapper}>
                {userRoles && userRoles.domainRoles && NotEmptyObject(userRoles.domainRoles)
                    ? Object.values(userRoles.domainRoles).map((domainRole, index) => (
                          <Chip
                              key={index}
                              style={styles.chip}
                              onRequestDelete={() =>
                                  handleDelete({
                                      resource: 'userdomainroles',
                                      id: domainRole.domain.id,
                                      role_id: domainRole.role.id
                                  })
                              }
                          >
                              {`${domainRole.domain.name}: ${domainRole.role.label}`}
                          </Chip>
                      ))
                    : 'User currently has no explicit domain roles.'}
            </CardText>
            <Divider />
            <CardHeader title="Site Roles" />
            <CardText style={styles.wrapper}>
                {userRoles && userRoles.siteRoles && NotEmptyObject(userRoles.siteRoles)
                    ? Object.values(userRoles.siteRoles).map((siteRole, index) => (
                          <Chip
                              key={index}
                              style={styles.chip}
                              onRequestDelete={() =>
                                  handleDelete({
                                      resource: 'usersiteroles',
                                      id: siteRole.site.id,
                                      role_id: siteRole.role.id
                                  })
                              }
                          >
                              {`${siteRole.site.name}: ${siteRole.role.label}`}
                          </Chip>
                      ))
                    : 'User currently has no explicit site roles.'}
            </CardText>
        </Card>
    );
};
UserCard.propTypes = {
    user: PropTypes.object.isRequired,
    userRoles: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default UserCard;
