/**
 * Generated Country.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { List, Datagrid, TextField, Show, SimpleShowLayout, ShowButton } from 'admin-on-rest';
import CountryFilter from '../filters/CountryFilter';
import EditableDatagrid from '../grids/EditableDatagrid';

export const CountryList = props => (
    <List {...props} title="Country List" filters={<CountryFilter />}>
        <EditableDatagrid bodyOptions={{ showRowHover: true }}>
            <TextField source="code" sortable={false} />
            <TextField source="name" sortable={false} />
            <ShowButton />
        </EditableDatagrid>
    </List>
);

export const CountryShow = props => (
    <Show {...props} title="Country Show">
        <SimpleShowLayout>
            <TextField source="code" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);

/** End of Generated Code **/
