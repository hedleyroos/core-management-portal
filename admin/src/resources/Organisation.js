/**
 * Generated Organisation.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    List,
    Datagrid,
    NumberField,
    TextField,
    DateField,
    Show,
    SimpleShowLayout,
    ShowButton
} from 'admin-on-rest';
import OrganisationFilter from '../filters/OrganisationFilter';

export const OrganisationList = props => (
    <List {...props} title="Organisation List" filters={<OrganisationFilter />}>
        <Datagrid bodyOptions={ { showRowHover: true } }>
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <ShowButton />
        </Datagrid>
    </List>
)

export const OrganisationShow = props => (
    <Show {...props} title="Organisation Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
)

/** End of Generated Code **/