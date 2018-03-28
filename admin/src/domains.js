import React from 'react';
import {
    Create, Datagrid, DateField, DeleteButton, DisabledInput, Edit, EditButton,
    List, required, Show, ShowButton, SimpleForm, SimpleShowLayout, TextField,
    TextInput, RichTextField
} from 'admin-on-rest';

import { ShowActions, ListActions } from './defaults.js'


const DomainTitle = ({ record }) => {
    return <span>Domain {record ? `'${record.name}'` : ''}</span>;
};

export const DomainList = (props) => (
    <List actions={<ListActions />} title='Domains' {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='description' />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const DomainShow = (props) => (
    <Show actions={<ShowActions />} title={<DomainTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source='id' />
            <DateField label='Created' source='created_at' />
            <DateField label='Updated' source='updated_at' />
            <TextField source='name' />
            <RichTextField source='description' />
        </SimpleShowLayout>
    </Show>
);

export const DomainCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='name' validate={required} />
            <TextInput source='description' validate={required} options={{ multiLine: true }} />
        </SimpleForm>
    </Create>
);

export const DomainEdit = (props) => (
    <Edit title={<DomainTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="name" validate={required} />
            <TextInput source='description' validate={required} options={{ multiLine: true }} />
        </SimpleForm>
    </Edit>
);
