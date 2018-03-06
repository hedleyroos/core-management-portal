import React from 'react';
import { jsonServerRestClient, Admin, Delete, Resource, fetchUtils } from 'admin-on-rest';

import { DomainCreate, DomainEdit, DomainList, DomainRemove, DomainShow } from './domains';
import authClient from './authClient';


const App = () => (
    <Admin title='Girl Effect Management Portal'
            authClient={authClient}
            restClient={jsonServerRestClient('http://172.18.0.6:8000')}>
        <Resource name='domains' list={DomainList} show={DomainShow} create={DomainCreate} edit={DomainEdit} remove={Delete} />
    </Admin>
);


export default App;
