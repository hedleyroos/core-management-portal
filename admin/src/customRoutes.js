import React from 'react';
import { Route } from 'react-router-dom';

import OIDCCallback from './OIDCCallback';

export default [
    <Route exact path="/oidc/callback" component={OIDCCallback} noLayout />,
];
