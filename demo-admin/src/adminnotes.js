import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const AdminNoteList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="data" />
        </Datagrid>
    </List>
);