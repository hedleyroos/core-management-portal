
import React from 'react';
import {pink500, pink300} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DomainIcon from 'material-ui/svg-icons/action/language';
import RoleIcon from 'material-ui/svg-icons/social/public';
import SiteIcon from 'material-ui/svg-icons/action/explore';

import { Admin, Delete, fetchUtils, Resource } from 'admin-on-rest';

import { DomainCreate, DomainEdit, DomainList, DomainShow } from './domains';
import { RoleCreate, RoleEdit, RoleList, RoleShow } from './roles';
import { SiteCreate, SiteEdit, SiteList, SiteShow } from './sites';
import { SiteRolesCreate, SiteRolesEdit, SiteRolesList, SiteRolesShow } from './siteroles';
import swaggerRestServer from './swaggerRestServer';
import authClient from './authClient';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const id_token = localStorage.getItem('id_token');
    options.headers.set('Authorization', `Bearer ${id_token}`);
    return fetchUtils.fetchJson(url, options);
}

const restClient = swaggerRestServer('//core-management-layer:8000', httpClient)

const App = () => (
    <Admin title='Girl Effect Management Portal' theme={getMuiTheme(muiTheme)} restClient={restClient} authClient={authClient}>
        <Resource name='domains' icon={DomainIcon} list={DomainList} show={DomainShow} create={DomainCreate} edit={DomainEdit} remove={Delete} options={{label: 'Domains'}} />
        <Resource name='roles' icon={RoleIcon} list={RoleList} show={RoleShow} create={RoleCreate} edit={RoleEdit} remove={Delete} options={{label: 'Roles'}} />
        <Resource name='sites' icon={SiteIcon} list={SiteList} show={SiteShow} create={SiteCreate} edit={SiteEdit} remove={Delete} options={{label: 'Sites'}} />
        <Resource name='siteroles' icon={SiteIcon} list={SiteRolesList} show={SiteRolesShow} create={SiteRolesCreate} edit={SiteRolesEdit} remove={Delete} options={{label: 'Site roles'}} />
    </Admin>
);


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pink500,
        accent1Color: pink300
    }
});


export default App;
