
import React from 'react';
import {pink500, pink900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DomainIcon from 'material-ui/svg-icons/action/language';
import RoleIcon from 'material-ui/svg-icons/social/public';

import { jsonServerRestClient, Admin, Delete, Resource, fetchUtils } from 'admin-on-rest';

import { DomainCreate, DomainEdit, DomainList, DomainRemove, DomainShow } from './domains';
import { RoleCreate, RoleEdit, RoleList, RoleRemove, RoleShow } from './roles';
import limitUpdateFields from './utils'


const GEJsonServerRestClient = limitUpdateFields(
    jsonServerRestClient('http://core-management-layer:8000')
)

const App = () => (
    <Admin title='Girl Effect Management Portal' theme={getMuiTheme(muiTheme)} restClient={GEJsonServerRestClient}>
        <Resource name='domains' icon={DomainIcon} list={DomainList} show={DomainShow} create={DomainCreate} edit={DomainEdit} remove={Delete} options={{label: 'Domains'}} />
        <Resource name='roles' icon={RoleIcon} list={RoleList} show={RoleShow} create={RoleCreate} edit={RoleEdit} remove={Delete} options={{label: 'Roles'}} />
    </Admin>
);


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pink500,
        accent1Color: pink900
    }
});


export default App;
