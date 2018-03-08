import React from 'react';
import {
    BooleanField, BooleanInput, Create, Datagrid, DateField, DeleteButton, DisabledInput, Edit,
    EditButton, List, required, Show, ShowButton, SimpleForm, SimpleShowLayout,
    TextField, TextInput, RichTextField
} from 'admin-on-rest';

import { ShowActions, ListActions } from './defaults.js'


const RoleTitle = ({ record }) => {
    return <span>Role {record ? `'${record.name}'` : ''}</span>;
};

export const RoleList = (props) => (
    <List actions={<ListActions />} title='Roles' {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='label' />
            <TextField source='description' />
            <BooleanField source='requires_2fa' />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RoleShow = (props) => (
    <Show actions={<ShowActions />} title={<RoleTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source='id' />
            <DateField label='Created' source='created_at' />
            <DateField label='Updated' source='updated_at' />
            <TextField source='label' />
            <RichTextField source='description' />
            <BooleanField source='requires_2fa' />
        </SimpleShowLayout>
    </Show>
);

export const RoleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='label' validate={required} />
            <TextInput source='description' validate={required} options={{ multiLine: true }} />
            <BooleanInput label='2FA' source='requires_2fa' />
        </SimpleForm>
    </Create>
);

export const RoleEdit = (props) => (
    <Edit title={<RoleTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="name" validate={required} />
            <TextInput source='description' validate={required} options={{ multiLine: true }} />
            <BooleanInput label='2FA' source='requires_2fa' />
        </SimpleForm>
    </Edit>
);
