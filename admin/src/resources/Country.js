/**
 * Generated Country.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    Datagrid,
    Show,
    List,
    TextField,
    Responsive,
    SimpleShowLayout,
    SimpleList
} from 'react-admin';

import CountryListActions from '../customActions/CountryListActions';
import CountryShowActions from '../customActions/CountryShowActions';

import CountryFilter from '../filters/CountryFilter';

export const CountryList = props => (
    <List
        {...props}
        title="Country List"
        actions={<CountryListActions />}
        filters={<CountryFilter />}
    >
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
                </Datagrid>
            }
        />
    </List>
);

export const CountryShow = props => (
    <Show {...props} title="Country Show" actions={<CountryShowActions />}>
        <SimpleShowLayout>
            <TextField source="code" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);

/** End of Generated Code **/
