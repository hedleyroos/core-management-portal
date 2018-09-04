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
import { teal800 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import { muiTheme, styles } from '../Theme';
import PermissionsStore from '../auth/PermissionsStore';
import { apiErrorHandler } from '../utils';
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
            validToken: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleAPIError = this.handleAPIError.bind(this);
    }

    handleChange(value) {
        this.setState({ value });
    }

    handleSelection(back) {
        this.setState({ changing: true });
        if (!back && this.state.value !== this.currentContext.key) {
            const { value } = this.state;
            const userID = jwtDecode(localStorage.getItem('id_token')).sub;
            PermissionsStore.getAndLoadPermissions({ userID, currentContext: value })
                .then(result => {
                    this.setState({ redirect: true });
                })
                .catch(error => {
                    this.handleAPIError(error);
                });
        } else {
            this.setState({ redirect: true });
        }
    }

    handleAPIError(error) {
        const validToken = apiErrorHandler(error);
        this.setState({ validToken });
    }

    render() {
        const { changing, redirect, value } = this.state;
        const treeData = PermissionsStore.getTreeData();
        return redirect ? (
            <Redirect push to="/" />
        ) : (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={{ ...styles.main, backgroundColor: teal800 }}>
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
                                        onClick={() => this.handleSelection(true)}
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
