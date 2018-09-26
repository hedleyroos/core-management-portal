import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';

import { styles } from '../theme';
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
        <CardContent>
            <Typography variant="title" paragraph>
                {title}
            </Typography>
            <Typography>{`ID: ${object.id}`}</Typography>
            <Divider style={styles.divider} />
            <FormControl component="fieldset">
                <FormLabel component="legend">Domain Roles</FormLabel>
                <FormGroup>
                    {domainRoles.length > 0
                        ? domainRoles.map(([key, domainRole], index) => (
                              <FormControlLabel
                                  key={key}
                                  control={
                                      <Checkbox
                                          checked={domainRole.checked}
                                          onChange={() => handleCheck(key)}
                                          value={key}
                                      />
                                  }
                                  label={`${domainRole.domain.name}: ${domainRole.role.label}`}
                              />
                          ))
                        : `${type} currently has no explicit domain roles.`}
                </FormGroup>
            </FormControl>
            <Divider style={styles.divider} />
            <FormControl>
                <FormLabel component="legend">Site Roles</FormLabel>
                <FormGroup style={styles.wrapper}>
                    {siteRoles.length > 0
                        ? siteRoles.map(([key, siteRole], index) => (
                              <FormControlLabel
                                  key={key}
                                  control={
                                      <Checkbox
                                          checked={siteRole.checked}
                                          onChange={() => handleCheck(key)}
                                          value={key}
                                      />
                                  }
                                  label={`${siteRole.site.name}: ${siteRole.role.label}`}
                              />
                          ))
                        : `${type} currently has no explicit site roles.`}
                </FormGroup>
            </FormControl>
            {amountSelectedToDelete > 0 && (
                <React.Fragment>
                    <Divider style={styles.divider} />
                    <CardContent>
                        <CardActions>
                            <Button variant="contained" color="secondary" onClick={handleOpen}>
                                Remove Roles
                            </Button>
                        </CardActions>
                    </CardContent>
                </React.Fragment>
            )}
            <ConfirmDialog
                open={open}
                handleClose={handleClose}
                cancelLabel="No"
                submitLabel="Delete"
                text="Are you sure you want to delete the selected roles?"
            />
        </CardContent>
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
