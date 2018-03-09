import React from 'react';
import {
    BooleanField, BooleanInput, Create, Datagrid, DateField, DeleteButton, DisabledInput, Edit,
    EditButton, List, required, ReferenceField, ReferenceInput, Show, ShowButton, SimpleForm, SimpleShowLayout, SelectInput,
    TextField, TextInput
} from 'admin-on-rest';

import { ShowActions, ListActions } from './defaults.js'


const SiteRoleTitle = ({ record }) => {
    return <span>Site role {record ? `'${record.site_id}/${record.role_id}'` : ''}</span>;
};

export const SiteRoleList = (props) => (
    <List actions={<ListActions />} title='Site roles' {...props}>
        <Datagrid>
            <ReferenceField label='Role' source='role_id' reference='roles' linkType='show'>
                <TextField source='label' />
            </ReferenceField>
            <ReferenceField label='Site' source='site_id' reference='sites' linkType='show'>
                <TextField source='name' />
            </ReferenceField>
            <BooleanField source='grant_implicitly' />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const SiteRoleShow = (props) => (
    <Show actions={<ShowActions />} title={<SiteRoleTitle />} {...props}>
        <SimpleShowLayout>
            <DateField label='Created' source='created_at' />
            <DateField label='Updated' source='updated_at' />
            <ReferenceField label='Role' source='role_id' reference='roles' linkType='show'>
                <TextField source='label' />
            </ReferenceField>
            <ReferenceField label='Site' source='site_id' reference='sites' linkType='show'>
                <TextField source='name' />
            </ReferenceField>
            <BooleanField source='grant_implicitly' />
        </SimpleShowLayout>
    </Show>
);

export const SiteRolesCreate = (props) => (
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

export const SiteRolesEdit = (props) => (
    <Edit title={<SiteRoleTitle />} {...props}>
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
