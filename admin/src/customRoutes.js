import React from 'react';
import { Route } from 'react-router-dom';

import OIDCCallback from './auth/OIDCCallback';
import ManageUserRoles from './pages/ManageUserRoles';
import ContextChanger from './pages/ContextChanger';

export default [
    <Route exact path="/oidc/callback" component={OIDCCallback} noLayout />,
    <Route exact path="/contextchanger" component={ContextChanger} noLayout />,
    <Route exact path="/manageuserroles" component={ManageUserRoles} />
];
