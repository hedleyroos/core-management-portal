/**
 * Generated Client.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    BooleanField,
    Show,
    UrlField,
    SimpleShowLayout,
    List,
    TextField,
    NumberField,
    ShowButton
} from 'react-admin';

import ClientFilter from '../filters/ClientFilter';

import FieldSelectDatagrid from '../grids/FieldSelectDatagrid';

export const ClientList = props => (
    <List {...props} title="Client List" filters={<ClientFilter />} bulkActionButtons={false}>
        <FieldSelectDatagrid>
            <NumberField source="id" sortable={false} />
            <TextField source="_post_logout_redirect_uris" sortable={false} />
            <TextField source="_redirect_uris" sortable={false} />
            <TextField source="client_id" sortable={false} />
            <TextField source="contact_email" sortable={false} />
            <UrlField source="logo" sortable={false} />
            <TextField source="name" sortable={false} />
            <BooleanField source="require_consent" sortable={false} />
            <TextField source="response_type" sortable={false} />
            <BooleanField source="reuse_consent" sortable={false} />
            <UrlField source="terms_url" sortable={false} />
            <UrlField source="website_url" sortable={false} />
            <ShowButton />
        </FieldSelectDatagrid>
    </List>
);

export const ClientShow = props => (
    <Show {...props} title="Client Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="_post_logout_redirect_uris" />
            <TextField source="_redirect_uris" />
            <TextField source="client_id" />
            <TextField source="contact_email" />
            <UrlField source="logo" />
            <TextField source="name" />
            <BooleanField source="require_consent" />
            <TextField source="response_type" />
            <BooleanField source="reuse_consent" />
            <UrlField source="terms_url" />
            <UrlField source="website_url" />
        </SimpleShowLayout>
    </Show>
);

/** End of Generated Code **/
