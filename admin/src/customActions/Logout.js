import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import MenuItem from 'material-ui/MenuItem';
import ExitIcon from 'material-ui/svg-icons/action/power-settings-new';

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

const Logout = ({ logout }) => (
    <MenuItem className="logout" leftIcon={<ExitIcon />} primaryText="Logout" onClick={logout} />
);

export default connect(
    null,
    mapDispatchToProps
)(Logout);
