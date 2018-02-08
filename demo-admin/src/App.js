import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { AdminNoteList } from './adminnotes';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://localhost:8080/api/v1')}>
        <Resource name="adminnotes" list={AdminNoteList} />
    </Admin>
);

export default App;
