/**
 * Generated Country.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    Show,
    SimpleShowLayout,
    ShowButton
} from 'admin-on-rest';
import CountryFilter from '../filters/CountryFilter';

export const CountryList = props => (
    <List {...props} title="Country List" filters={<CountryFilter />}>
        <Datagrid bodyOptions={ { showRowHover: true } }>
            <TextField source="code" />
            <TextField source="name" />
            <ShowButton />
        </Datagrid>
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