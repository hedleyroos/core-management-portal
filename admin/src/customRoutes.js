import React from 'react';
import { Route } from 'react-router-dom';

import OIDCCallback from './auth/OIDCCallback';
import ManageUserRoles from './pages/ManageUserRoles';

export default [
    <Route exact path="/oidc/callback" component={OIDCCallback} />,
    <Route exact path="/manageuserroles" component={ManageUserRoles} />
];
