import React from 'react';
import {
    List,
    Show,
    Edit,
    Create,
    Datagrid,
    SimpleShowLayout,
    SimpleForm,
    BooleanField,
    TextField,
    NumberField,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';

export const ClientShow = props => (
    <Show {...props} title="Client Show">
        <SimpleShowLayout>
            <BooleanField source="require_consent" />
            <TextField source="client_id" />
            <TextField source="website_url" />
            <TextField source="terms_url" />
            <TextField source="logo" />
            <TextField source="_redirect_uris" />
            <TextField source="name" />
            <NumberField source="id" />
            <TextField source="response_type" />
            <TextField source="_post_logout_redirect_uris" />
            <TextField source="contact_email" />
            <BooleanField source="reuse_consent" />
        </SimpleShowLayout>
    </Show>
)

export const ClientList = props => (
    <List {...props} title="Client List">
        <Datagrid>
            <BooleanField source="require_consent" />
            <TextField source="client_id" />
            <TextField source="website_url" />
            <TextField source="terms_url" />
            <TextField source="logo" />
            <TextField source="_redirect_uris" />
            <TextField source="name" />
            <NumberField source="id" />
            <TextField source="response_type" />
            <TextField source="_post_logout_redirect_uris" />
            <TextField source="contact_email" />
            <BooleanField source="reuse_consent" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

