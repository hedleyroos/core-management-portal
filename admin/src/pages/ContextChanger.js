import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ViewTitle } from 'admin-on-rest/lib/mui';
import Avatar from 'material-ui/Avatar';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardText from 'material-ui/Card/CardText';
import ContextSwitchIcon from 'material-ui/svg-icons/communication/swap-calls';
import CircularProgress from 'material-ui/CircularProgress';
import DropDownMenu from 'material-ui/DropDownMenu/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { pink500, pink300 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import { muiTheme, styles } from '../Theme';
import { contextChangeGMPContext, contextDomainsAndSitesAdd } from '../actions/context';
import PermissionsStore from '../auth/PermissionsStore';
import restClient, { OPERATIONAL, GET_LIST } from '../swaggerRestServer';
import { makeIDMapping } from '../utils';

const mapStateToProps = state => {
    return {
        domainsAndSites: state.context.domainsAndSites,
        GMPContext: state.context.GMPContext
    };
};

const mapDispatchToProps = dispatch => {
    return {
        domainsAndSitesAdd: domainsAndSites => dispatch(contextDomainsAndSitesAdd(domainsAndSites)),
        changeContext: newContext => dispatch(contextChangeGMPContext(newContext))
    };
};

class ContextChanger extends Component {
    constructor(props) {
        super(props);
        const permissions = PermissionsStore.getPermissionFlags();
        if (!this.props.GMPContext) {
            this.props.domainsAndSitesAdd(permissions.contexts);
            this.props.changeContext(permissions.currentContext);
        }
        this.state = {
            changing: false,
            value: this.props.GMPContext || permissions.currentContext,
            redirect: false,
            validToken: true
        };
        this.getPlaces = this.getPlaces.bind(this);
        this.getPlaces('domain', this.props.domainsAndSites || permissions.contexts);
        this.getPlaces('site', this.props.domainsAndSites || permissions.contexts);
        this.handleChange = this.handleChange.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleAPIError = this.handleAPIError.bind(this);
    }

    getPlaces(placeName, domainsAndSites) {
        const ids = domainsAndSites
            .reduce((ids, place) => {
                if (place.indexOf(placeName[0]) >= 0) {
                    ids.push(parseInt(place.split(':')[1], 10));
                }
                return ids;
            }, [])
            .join(',');
        if (ids.length > 0) {
            restClient(GET_LIST, `${placeName}s`, {
                pagination: {
                    perPage: 0
                },
                filter: { [`${placeName}_ids`]: ids }
            })
                .then(response => {
                    this.setState({ [`${placeName}s`]: makeIDMapping(response.data) });
                })
                .catch(error => {
                    this.handleAPIError(error);
                });
        }
    }

    handleChange(event, index, value) {
        this.setState({ value });
    }

    async handleBack(changed) {
        this.setState({ changing: true });
        if (changed) {
            const { value } = this.state;
            this.props.changeContext(value);
            const splitName = value.split(':');
            const user_id = jwtDecode(localStorage.getItem('id_token')).sub;
            try {
                const permissions = await restClient(
                    OPERATIONAL,
                    splitName[0].indexOf('d') >= 0
                        ? 'user_domain_permissions'
                        : 'user_site_permissions',
                    {
                        pathParameters: [user_id, splitName[1]]
                    }
                );
                PermissionsStore.loadPermissions(
                    permissions.data,
                    this.props.domainsAndSites,
                    value
                );
            } catch (error) {
                this.handleAPIError(error);
            }
        }
        this.setState({ redirect: true });
    }

    handleAPIError(error) {
        if (error.message === 'Token expired') {
            localStorage.removeItem('id_token');
            localStorage.removeItem('permissions');
            this.setState({ validToken: false });
        }
        throw new Error(error);
    }

    render() {
        const { domainsAndSites } = this.props;
        const { changing, redirect, value, domains, sites } = this.state;
        return redirect ? (
            <Redirect push to="/" />
        ) : (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={{ ...styles.main, backgroundColor: pink500 }}>
                    <Card style={styles.cardCentered}>
                        {changing ? (
                            <CardText>
                                <CircularProgress style={{ margin: '7rem' }} />
                            </CardText>
                        ) : (
                            <div>
                                <ViewTitle title="Context Changer" />
                                <CardText>Select the Domain or Site.</CardText>
                                <CardText>
                                    {domains || sites ? (
                                        <DropDownMenu value={value} onChange={this.handleChange}>
                                            {domainsAndSites
                                                ? domainsAndSites.map(place => {
                                                      const splitPlace = place.split(':');
                                                      const text =
                                                          splitPlace[0].indexOf('d') >= 0
                                                              ? domains
                                                                  ? domains[
                                                                        parseInt(splitPlace[1], 10)
                                                                    ].name
                                                                  : place
                                                              : sites
                                                                  ? sites[
                                                                        parseInt(splitPlace[1], 10)
                                                                    ].name
                                                                  : place;
                                                      return (
                                                          <MenuItem
                                                              key={place}
                                                              value={place}
                                                              primaryText={text}
                                                          />
                                                      );
                                                  })
                                                : null}
                                        </DropDownMenu>
                                    ) : (
                                        <CircularProgress />
                                    )}
                                </CardText>
                                <CardActions>
                                    <FlatButton
                                        label="Back"
                                        onClick={() => this.handleBack(false)}
                                    />
                                    <RaisedButton
                                        label="Confirm"
                                        primary={true}
                                        onClick={() => this.handleBack(true)}
                                    />
                                </CardActions>
                            </div>
                        )}
                    </Card>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContextChanger);
