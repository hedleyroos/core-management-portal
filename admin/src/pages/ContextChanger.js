import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CircularProgress,
    Button,
    Typography
} from '@material-ui/core';
import ContextSwitchIcon from '@material-ui/icons/SwapCalls';

import { styles } from '../theme';
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
                    // Because of rendering happening before the server returns in React Admin,
                    // a simple unmounting of the Admin component will no longer work to reset
                    // the permissions. Here we redirect the window now to the portal.
                    window.location.href = process.env.REACT_APP_PORTAL_URL;
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
            <div style={{ ...styles.main }}>
                <Card style={styles.cardCentered}>
                    <div style={styles.avatarDiv}>
                        <Avatar style={{ ...styles.avatar }}>
                            <ContextSwitchIcon />
                        </Avatar>
                    </div>
                    <Typography variant="title" align="center" paragraph={true}>
                        Context Changer
                    </Typography>
                    {changing ? (
                        <CardContent>
                            <CircularProgress style={{ margin: '7rem' }} />
                        </CardContent>
                    ) : (
                        <React.Fragment>
                            <Typography>Select the Domain or Site.</Typography>
                            <CardContent>
                                {treeData ? (
                                    <DomainTreeInput
                                        source="context"
                                        treeData={treeData}
                                        value={value}
                                        onChange={this.handleChange}
                                        onlyDomains={false}
                                        useReduxFormField={false}
                                        customStyle={{
                                            fontSize: 16,
                                            height: 40,
                                            width: 256
                                        }}
                                    />
                                ) : (
                                    <CircularProgress />
                                )}
                                <CardActions style={styles.cardCentered}>
                                    <Button
                                        variant="contained"
                                        onClick={() => this.handleSelection(true)}
                                        fullWidth
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => this.handleSelection()}
                                        fullWidth
                                    >
                                        Confirm
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </React.Fragment>
                    )}
                </Card>
            </div>
        );
    }
}

export default ContextChanger;
