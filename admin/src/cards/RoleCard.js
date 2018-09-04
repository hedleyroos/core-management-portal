import React from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import { styles } from '../Theme';
import ConfirmDialog from '../pages/ConfirmDialog';

const RoleCard = ({
    type,
    object,
    title,
    domainRoles,
    siteRoles,
    handleCheck,
    handleOpen,
    handleClose,
    open,
    amountSelectedToDelete
}) => (
    <Card>
        <CardTitle title={title} subtitle={`ID: ${object.id}`} />
        <Divider />
        <CardHeader title="Domain Roles" />
        <CardText style={styles.wrapper}>
            {domainRoles.length > 0
                ? domainRoles.map(([key, domainRole], index) => (
                      <Checkbox
                          key={key}
                          label={`${domainRole.domain.name}: ${domainRole.role.label}`}
                          checked={domainRole.checked}
                          onCheck={() => handleCheck(key)}
                      />
                  ))
                : `${type} currently has no explicit domain roles.`}
        </CardText>
        <Divider />
        <CardHeader title="Site Roles" />
        <CardText style={styles.wrapper}>
            {siteRoles.length > 0
                ? siteRoles.map(([key, siteRole], index) => (
                      <Checkbox
                          key={key}
                          label={`${siteRole.site.name}: ${siteRole.role.label}`}
                          checked={siteRole.checked}
                          onCheck={() => handleCheck(key)}
                      />
                  ))
                : `${type} currently has no explicit site roles.`}
        </CardText>
        {amountSelectedToDelete > 0 && (
            <React.Fragment>
                <Divider />
                <CardText>
                    <CardActions>
                        <RaisedButton label="Remove Roles" secondary={true} onClick={handleOpen} />
                    </CardActions>
                </CardText>
            </React.Fragment>
        )}
        <ConfirmDialog
            open={open}
            handleClose={handleClose}
            cancelLabel="No"
            submitLabel="Delete"
            text="Are you sure you want to delete the selected roles?"
        />
    </Card>
);

RoleCard.propTypes = {
    type: PropTypes.string,
    object: PropTypes.object.isRequired,
    title: PropTypes.string,
    domainRoles: PropTypes.array.isRequired,
    siteRoles: PropTypes.array.isRequired,
    handleCheck: PropTypes.func.isRequired,
    handleOpen: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool,
    amountSelectedToDelete: PropTypes.number
};

RoleCard.defaultProps = {
    type: 'Model',
    open: false,
    amountSelectedToDelete: 0
};

export default RoleCard;
