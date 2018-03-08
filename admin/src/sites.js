import React from 'react';
import {
    BooleanField, BooleanInput, Create, Datagrid, DateField, DeleteButton, DisabledInput, Edit,
    EditButton, List, required, ReferenceField, ReferenceInput, Show, ShowButton, SimpleForm, SimpleShowLayout, SelectInput,
    TextField, TextInput
} from 'admin-on-rest';

import { ShowActions, ListActions } from './defaults.js'


const SiteTitle = ({ record }) => {
    return <span>Site {record ? `'${record.name}'` : ''}</span>;
};

export const SiteList = (props) => (
    <List actions={<ListActions />} title='Sites' {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='description' />
            <TextField source='client_id' />
            <ReferenceField label='Domain' source='domain_id' reference='domains' linkType='show'>
                <TextField source='name' />
            </ReferenceField>
            <BooleanField source='is_active' />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const SiteShow = (props) => (
    <Show actions={<ShowActions />} title={<SiteTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source='id' />
            <DateField label='Created' source='created_at' />
            <DateField label='Updated' source='updated_at' />
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='description' />
            <TextField source='client_id' />
            <ReferenceField label='Domain' source='id' reference='domains' linkType='show'>
                <TextField source='name' />
            </ReferenceField>
            <BooleanField source='is_active' />
        </SimpleShowLayout>
    </Show>
);

export const SiteCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='name' validate={required} />
            <TextInput source='description' validate={required} options={{ multiLine: true }} />
            <TextInput source='client_id' validate={required} />
            <ReferenceInput label='Domain' source='domain_id' reference='domains' allowEmpty>
                <SelectInput optionText='name' validate={required} />
            </ReferenceInput>
            <BooleanInput label='Active' source='is_active' />
        </SimpleForm>
    </Create>
);

export const SiteEdit = (props) => (
    <Edit title={<SiteTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label='Id' source='id' />
            <TextInput source='name' validate={required} />
            <TextInput source='description' validate={required} options={{ multiLine: true }} />
            <TextInput source='client_id' validate={required} />
            <ReferenceInput label='Domain' source='domain_id' reference='domains'>
                <SelectInput optionText='name' />
            </ReferenceInput>
            <BooleanInput label='Active' source='is_active' />
        </SimpleForm>
    </Edit>
);
