/**
 * Generated InvitationRedirectUrl.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    Datagrid,
    Show,
    List,
    TextField,
    DateField,
    TextInput,
    SimpleShowLayout,
    NumberField,
    UrlField,
    Create,
    SimpleForm,
    Edit
} from 'react-admin';

import InvitationRedirectUrlListActions from '../customActions/InvitationRedirectUrlListActions';
import InvitationRedirectUrlShowActions from '../customActions/InvitationRedirectUrlShowActions';
import InvitationRedirectUrlEditActions from '../customActions/InvitationRedirectUrlEditActions';

import InvitationRedirectUrlFilter from '../filters/InvitationRedirectUrlFilter';

const validationCreateInvitationRedirectUrl = values => {
    const errors = {};
    if (!values.url) {
        errors.url = ['url is required'];
    }
    if (!values.description) {
        errors.description = ['description is required'];
    }
    return errors;
};

const validationEditInvitationRedirectUrl = values => {
    const errors = {};
    return errors;
};

export const InvitationRedirectUrlList = props => (
    <List
        {...props}
        title="InvitationRedirectUrl List"
        actions={<InvitationRedirectUrlListActions />}
        filters={<InvitationRedirectUrlFilter />}
    >
        <Datagrid>
            <NumberField source="id" sortable={false} />
            <UrlField source="url" sortable={false} />
            <TextField source="description" sortable={false} />
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
        </Datagrid>
    </List>
);

export const InvitationRedirectUrlCreate = props => (
    <Create {...props} title="InvitationRedirectUrl Create">
        <SimpleForm validate={validationCreateInvitationRedirectUrl} redirect="show">
            <TextInput source="url" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const InvitationRedirectUrlShow = props => (
    <Show
        {...props}
        title="InvitationRedirectUrl Show"
        actions={<InvitationRedirectUrlShowActions />}
    >
        <SimpleShowLayout>
            <NumberField source="id" />
            <UrlField source="url" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const InvitationRedirectUrlEdit = props => (
    <Edit
        {...props}
        title="InvitationRedirectUrl Edit"
        actions={<InvitationRedirectUrlEditActions />}
    >
        <SimpleForm validate={validationEditInvitationRedirectUrl}>
            <TextInput source="url" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
