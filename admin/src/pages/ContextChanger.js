import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ViewTitle } from 'admin-on-rest/lib/mui';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import DropDownMenu from 'material-ui/DropDownMenu/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { pink500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import { muiTheme, styles } from '../Theme';
import { contextChangeGMPContext, contextDomainsAndSitesAdd } from '../actions/context';
import PermissionsStore from '../auth/PermissionsStore';
import restClient, { OPERATIONAL } from '../swaggerRestServer';

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
            value: this.props.GMPContext || permissions.currentContext,
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({ value });
    }

    async handleBack(changed) {
        if (changed) {
            const { value } = this.state;
            this.props.changeContext(value);
            const splitName = value.split(':');
            const user_id = jwtDecode(localStorage.getItem('id_token')).sub;
            const permissions = await restClient(
                OPERATIONAL,
                splitName[0].indexOf('d') >= 0
                    ? 'user_domain_permissions'
                    : 'user_site_permissions',
                {
                    pathParameters: [user_id, splitName[1]]
                }
            );
            PermissionsStore.loadPermissions(permissions.data, this.props.domainsAndSites, value);
        }
        this.setState({ redirect: true });
    }

    render() {
        const { domainsAndSites } = this.props;
        return this.state.redirect ? (
            <Redirect push to="/" />
        ) : (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={{ ...styles.main, backgroundColor: pink500 }}>
                    <Card>
                        <ViewTitle title="Context Changer" />
                        <CardText>Select the Domain or Site.</CardText>
                        <CardText>
                            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                                {domainsAndSites
                                    ? domainsAndSites.map(place => (
                                          <MenuItem key={place} value={place} primaryText={place} />
                                      ))
                                    : null}
                            </DropDownMenu>
                        </CardText>
                        <CardText>
                            <FlatButton label="Back" onClick={() => this.handleBack(false)} />
                            <RaisedButton
                                label="Confirm"
                                primary={true}
                                onClick={() => this.handleBack(true)}
                            />
                        </CardText>
                    </Card>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContextChanger);
