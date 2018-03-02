import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const DomainList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
        </Datagrid>
    </List>
);
