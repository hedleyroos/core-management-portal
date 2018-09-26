/**
 * Generated Country.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    SimpleList,
    Show,
    Datagrid,
    Responsive,
    SimpleShowLayout,
    List,
    TextField,
    ShowButton
} from 'react-admin';

import CountryFilter from '../filters/CountryFilter';

export const CountryList = props => (
    <List {...props} title="Country List" filters={<CountryFilter />} bulkActionButtons={false}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => `Code: ${record.code}`}
                    secondaryText={record => `Name: ${record.name}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="code" sortable={false} />
                    <TextField source="name" sortable={false} />
                    <ShowButton />
                </Datagrid>
            }
        />
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
