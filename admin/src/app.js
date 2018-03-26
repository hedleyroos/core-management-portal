import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// redux, react-router, redux-form, saga, and material-ui
// form the 'kernel' on which admin-on-rest runs
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {pink500, pink300} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DomainIcon from 'material-ui/svg-icons/action/language';
import RoleIcon from 'material-ui/svg-icons/social/public';
import SiteIcon from 'material-ui/svg-icons/action/explore';
import AppBar from 'material-ui/AppBar';
import createOidcMiddleware, { createUserManager, OidcProvider } from 'redux-oidc';
import { reducer as oidcReducer } from 'redux-oidc';

// prebuilt admin-on-rest features
import {
    adminReducer,
    localeReducer,
    crudSaga,
    simpleRestClient,
    Delete,
    TranslationProvider,
    declareResources,
} from 'admin-on-rest';

// your app components
import { DomainCreate, DomainEdit, DomainList, DomainShow } from './domains';

// user manager configuration object, see oidc-client-js documentation for details
const config = {
    client_id: 'my-client',
    redirect_uri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/callback`,
    response_type: 'id_token token',
    scope: 'openid profile',
    authority: 'http://myIdentityProvider.com',
    post_logout_redirect_uri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/login`,
    silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/silent_renew.html`,
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true
}

// create a Redux app
const reducer = combineReducers({
    oidc: oidcReducer,
    admin: adminReducer,
    locale: localeReducer(),
    form: formReducer,
    routing: routerReducer,
});
const userManager = createUserManager(config);
const sagaMiddleware = createSagaMiddleware();
const oidcMiddleware = createOidcMiddleware(userManager, () => true, false, '/callback');
const history = createHistory();
const store = createStore(reducer, undefined, compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),
    applyMiddleware(oidcMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));
store.dispatch(declareResources([{ name: 'posts' }, { name: 'comments' }, { name: 'users' }]));
const restClient = simpleRestClient('http://path.to.my.api/');
sagaMiddleware.run(crudSaga(restClient));

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pink500,
        accent1Color: pink300
    }
});

// bootstrap redux and the routes
const App = () => (
    <Provider store={store}>
        <OidcProvider store={store} userManager={userManager}>
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <AppBar title="My Admin" />
                    <Switch>
                        <Route exact path="/domains" hasCreate render={(routeProps) => <DomainList resource="domains" {...routeProps} />} />
                        <Route exact path="/domains/create" render={(routeProps) => <DomainCreate resource="domains" {...routeProps} />} />
                        <Route exact path="/domains/:id" hasShow hasDelete render={(routeProps) => <DomainEdit resource="domains" {...routeProps} />} />
                        <Route exact path="/domains/:id/show" hasEdit render={(routeProps) => <DomainShow resource="domains" {...routeProps} />} />
                    </Switch>
                </MuiThemeProvider>
            </ConnectedRouter>
        </OidcProvider>
    </Provider>
);

export default App;
