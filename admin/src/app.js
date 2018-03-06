import React from 'react';
import { jsonServerRestClient, Admin, Delete, Resource, fetchUtils } from 'admin-on-rest';
import DomainIcon from 'material-ui/svg-icons/action/language';

import { DomainCreate, DomainEdit, DomainList, DomainRemove, DomainShow } from './domains';
import authClient from './authClient';
import limitUpdateFields from './utils'


const GEJsonServerRestClient = limitUpdateFields(jsonServerRestClient('http://172.18.0.6:8000'))

const App = () => (
    <Admin title='Girl Effect Management Portal'
            authClient={authClient}
            restClient={GEJsonServerRestClient}>
        <Resource name='domains' icon={DomainIcon} list={DomainList} show={DomainShow} create={DomainCreate} edit={DomainEdit} remove={Delete} />
    </Admin>
);


export default App;
