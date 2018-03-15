import React from 'react';
import {
    BooleanField, BooleanInput, Create, Datagrid, DateField, DeleteButton, DisabledInput, Edit,
    EditButton, List, required, ReferenceField, ReferenceInput, Show, ShowButton, SimpleForm,
    SimpleShowLayout, SelectInput, TextField
} from 'admin-on-rest';

import { ShowActions, ListActions } from './defaults.js'


const SiteRolesTitle = ({ record }) => {
    return <span>Site role</span>;
};

export const SiteRolesList = (props) => (
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

export const SiteRolesShow = (props) => (
    <Show actions={<ShowActions />} title={<SiteRolesTitle />} {...props}>
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
            <ReferenceInput label='Role' source='role_id' reference='roles' allowEmpty>
                <SelectInput optionText='label' validate={required} />
            </ReferenceInput>
            <ReferenceInput label='Site' source='site_id' reference='sites' allowEmpty>
                <SelectInput optionText='name' validate={required} />
            </ReferenceInput>
            <BooleanInput source='grant_implicitly' />
        </SimpleForm>
    </Create>
);

export const SiteRolesEdit = (props) => (
    <Edit title={<SiteRolesTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput label='Role' source='role_id' reference='roles' allowEmpty>
                <DisabledInput optionText='label' validate={required} />
            </ReferenceInput>
            <ReferenceInput label='Site' source='site_id' reference='sites' allowEmpty>
                <DisabledInput optionText='name' validate={required} />
            </ReferenceInput>
            <BooleanInput source='grant_implicitly' />
        </SimpleForm>
    </Edit>
);
