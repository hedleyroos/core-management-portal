import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';

import { generateQueryString } from '../utils';

const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch(push('/leaving'));
        if (localStorage.getItem('id_token')) {
            const logoutQueryString = generateQueryString({
                id_token_hint: localStorage.getItem('id_token'),
                post_logout_redirect_uri: process.env.REACT_APP_PORTAL_URL
            });
            localStorage.clear();
            let logoutURL = `${process.env.REACT_APP_LOGOUT_URL}?${logoutQueryString}`;
            window.location.href = logoutURL;
        }
    }
});

const AuthLogoutButton = ({ classes, logout }) => (
    <MenuItem onClick={logout}>
        <ListItemIcon>
            <ExitIcon />
        </ListItemIcon>
        <ListItemText inset primary="Logout" />
    </MenuItem>
);

export default connect(
    null,
    mapDispatchToProps
)(AuthLogoutButton);
