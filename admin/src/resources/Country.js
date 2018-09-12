/**
 * Generated Country.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    List,
    TextField,
    Responsive,
    SimpleList,
    Show,
    SimpleShowLayout,
    ShowButton
} from 'admin-on-rest';
import CountryFilter from '../filters/CountryFilter';
import FieldSelectDatagrid from '../grids/FieldSelectDatagrid';

export const CountryList = props => (
    <List {...props} title="Country List" filters={<CountryFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => `Code: ${record.code}`}
                    secondaryText={record => `Name: ${record.name}`}
                />
            }
            medium={
                <FieldSelectDatagrid bodyOptions={{ showRowHover: true }}>
                    <TextField source="code" sortable={false} />
                    <TextField source="name" sortable={false} />
                    <ShowButton />
                </FieldSelectDatagrid>
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
