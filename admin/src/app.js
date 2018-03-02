import React from 'react';
import { jsonServerRestClient, Admin, Resource, fetchUtils } from 'admin-on-rest';

import { DomainList } from './domains';
import authClient from './authClient';


const App = () => (
    <Admin title='Girl Effect Management Portal'
            authClient={authClient}
            restClient={jsonServerRestClient('http://172.18.0.6:8000')}>
        <Resource name="domains" list={DomainList} />
    </Admin>
);


export default App;
