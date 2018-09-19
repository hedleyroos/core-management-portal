/**
 * Generated Invitationredirecturl.js code. Edit at own risk.
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
import InvitationredirecturlFilter from '../filters/InvitationredirecturlFilter';

const validationCreateInvitationredirecturl = values => {
    const errors = {};
    if (!values.url) {
        errors.url = ['url is required'];
    }
    if (!values.description) {
        errors.description = ['description is required'];
    }
    return errors;
};

const validationEditInvitationredirecturl = values => {
    const errors = {};
    return errors;
};

export const InvitationredirecturlList = props => (
    <List {...props} title="Invitationredirecturl List" filters={<InvitationredirecturlFilter />}>
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

export const InvitationredirecturlCreate = props => (
    <Create {...props} title="Invitationredirecturl Create">
        <SimpleForm validate={validationCreateInvitationredirecturl}>
            <TextInput source="url" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const InvitationredirecturlShow = props => (
    <Show {...props} title="Invitationredirecturl Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <UrlField source="url" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const InvitationredirecturlEdit = props => (
    <Edit {...props} title="Invitationredirecturl Edit">
        <SimpleForm validate={validationEditInvitationredirecturl}>
            <TextInput source="url" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
