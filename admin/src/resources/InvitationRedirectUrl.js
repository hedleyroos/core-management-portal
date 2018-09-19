/**
 * Generated InvitationRedirectUrl.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    List,
    Datagrid,
    NumberField,
    UrlField,
    TextField,
    DateField,
    SimpleForm,
    Create,
    TextInput,
    Show,
    SimpleShowLayout,
    Edit,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';
import PermissionsStore from '../auth/PermissionsStore';
import EmptyField from '../fields/EmptyField';
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
    <List {...props} title="InvitationRedirectUrl List" filters={<InvitationRedirectUrlFilter />}>
        <Datagrid bodyOptions={{ showRowHover: true }}>
            <NumberField source="id" sortable={false} />
            <UrlField source="url" sortable={false} />
            <TextField source="description" sortable={false} />
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
            {PermissionsStore.getResourcePermission('invitationredirecturls', 'edit') ? (
                <EditButton />
            ) : null}
            <ShowButton />
            {PermissionsStore.getResourcePermission('invitationredirecturls', 'remove') ? (
                <DeleteButton />
            ) : null}
        </Datagrid>
    </List>
);

export const InvitationRedirectUrlCreate = props => (
    <Create {...props} title="InvitationRedirectUrl Create">
        <SimpleForm validate={validationCreateInvitationRedirectUrl}>
            <TextInput source="url" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const InvitationRedirectUrlShow = props => (
    <Show {...props} title="InvitationRedirectUrl Show">
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
    <Edit {...props} title="InvitationRedirectUrl Edit">
        <SimpleForm validate={validationEditInvitationRedirectUrl}>
            <TextInput source="url" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
