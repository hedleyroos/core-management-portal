/**
 * Generated Organisationalunit.js code. Edit at own risk.
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
    DeleteButton,
    ShowButton
} from 'admin-on-rest';
import EmptyField from '../fields/EmptyField';
import permissionsStore from '../auth/PermissionsStore';

export const OrganisationalunitList = props => (
    <List {...props} title="Organisationalunit List">
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

export const OrganisationalunitShow = props => (
    <Show {...props} title="Organisationalunit Show">
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