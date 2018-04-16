/**
 * Generated Client.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    List,
    Datagrid,
    NumberField,
    TextField,
    BooleanField,
    Show,
    SimpleShowLayout,
    DeleteButton,
    ShowButton
} from 'admin-on-rest';
import {
    ClientFilter
} from '../filters/ClientFilter';

export const ClientList = props => (
    <List {...props} title="Client List" filters={<ClientFilter />}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="_post_logout_redirect_uris" />
            <TextField source="_redirect_uris" />
            <TextField source="client_id" />
            <TextField source="contact_email" />
            <TextField source="logo" />
            <TextField source="name" />
            <BooleanField source="require_consent" />
            <TextField source="response_type" />
            <BooleanField source="reuse_consent" />
            <TextField source="terms_url" />
            <TextField source="website_url" />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const ClientShow = props => (
    <Show {...props} title="Client Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="_post_logout_redirect_uris" />
            <TextField source="_redirect_uris" />
            <TextField source="client_id" />
            <TextField source="contact_email" />
            <TextField source="logo" />
            <TextField source="name" />
            <BooleanField source="require_consent" />
            <TextField source="response_type" />
            <BooleanField source="reuse_consent" />
            <TextField source="terms_url" />
            <TextField source="website_url" />
        </SimpleShowLayout>
    </Show>
)

/** End of Generated Code **/