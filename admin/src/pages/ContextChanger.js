import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { ViewTitle } from 'admin-on-rest/lib/mui';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardText from 'material-ui/Card/CardText';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { pink500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import { muiTheme, styles } from '../Theme';
import PermissionsStore from '../auth/PermissionsStore';
import restClient, { OPERATIONAL, GET_ONE } from '../swaggerRestServer';
import {
    makeIDMapping,
    getUntilDone,
    getSitesForContext,
    getDomainAndSiteIds,
    createTreeData
} from '../utils';
import DomainTreeInput from '../inputs/DomainTreeInput';

class ContextChanger extends Component {
    constructor(props) {
        super(props);
        this.currentContext = PermissionsStore.getCurrentContext();
        this.contexts = PermissionsStore.getAllContexts();
        this.state = {
            changing: false,
            value: this.currentContext.key,
            redirect: !(this.currentContext && this.contexts),
            validToken: true,
            treeData: null
        };
        this.getPlaces = this.getPlaces.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleAPIError = this.handleAPIError.bind(this);
    }

    componentDidMount() {
        if (!this.state.places) {
            this.getPlaces();
        }
    }

    getPlaces() {
        const ids = getDomainAndSiteIds();
        const resource = ids.domains.length > 0 ? 'domain' : 'site';
        getUntilDone(`${resource}s`, {
            [`${resource}_ids`]: ids[`${resource}s`].join(',')
        })
            .then(data => {
                if (resource === 'domain') {
                    const domains = makeIDMapping(data, 'd:');
                    getUntilDone('sites', {
                        site_ids: ids.sites.join(',')
                    })
                        .then(data => {
                            const sites = makeIDMapping(data, 's:');
                            this.setState({
                                treeData: createTreeData({ ...domains, ...sites }, 'domain_id', 's')
                            });
                        })
                        .catch(error => {
                            this.handleAPIError(error);
                        });
                } else {
                    const sites = makeIDMapping(data, 's:');
                    this.setState({
                        treeData: createTreeData({ ...sites }, 'domain_id', 's')
                    });
                }
            })
            .catch(error => {
                this.handleAPIError(error);
            });
    }

    handleChange(value) {
        this.setState({ value });
    }

    async handleSelection() {
        this.setState({ changing: true });
        if (this.state.value !== this.currentContext.key) {
            const { value } = this.state;
            const [contextType, contextID] = value.split(':');
            const place = await restClient(GET_ONE, contextType === 'd' ? 'domains' : 'sites', {
                id: contextID
            });
            const newContext = { key: value, obj: place.data };
            const userID = jwtDecode(localStorage.getItem('id_token')).sub;
            try {
                const permissions = await restClient(
                    OPERATIONAL,
                    contextType === 'd' ? 'user_domain_permissions' : 'user_site_permissions',
                    {
                        pathParameters: [userID, contextID]
                    }
                );
                const siteIDs = await getSitesForContext(newContext);
                PermissionsStore.loadPermissions(
                    permissions.data,
                    this.contexts,
                    newContext,
                    siteIDs
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
        console.error(error);
    }

    render() {
        const { changing, redirect, value, treeData } = this.state;
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
                                    {treeData ? (
                                        <DomainTreeInput
                                            source="context"
                                            treeData={treeData}
                                            value={value}
                                            onChange={this.handleChange}
                                            onlyDomains={false}
                                            useReduxFormField={false}
                                        />
                                    ) : (
                                        <CircularProgress />
                                    )}
                                </CardText>
                                <CardActions>
                                    <FlatButton
                                        label="Back"
                                        onClick={() => this.handleSelection()}
                                    />
                                    <RaisedButton
                                        label="Confirm"
                                        primary={true}
                                        onClick={() => this.handleSelection()}
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

export default ContextChanger;
