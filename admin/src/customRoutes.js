import React from 'react';
import { Route } from 'react-router-dom';

import catchAll from './catchAll';
import ContextChanger from './pages/ContextChanger';
import LeavingPage from './pages/LeavingPage';
import OIDCCallback from './auth/OIDCCallback';
// import ManageRoles from './pages/ManageRoles';

export default [
    <Route exact path="/oidc/callback" component={OIDCCallback} noLayout />,
    <Route exact path="/contextchanger" component={ContextChanger} noLayout />,
    <Route exact path="/leaving" component={LeavingPage} noLayout />,
    <Route exact path="/catchAll" component={catchAll} />,
    // <Route exact path="/manageinvitationroles/:invitation_id" component={ManageRoles} />,
    // <Route exact path="/manageuserroles/:user_id" component={ManageRoles} />
];
