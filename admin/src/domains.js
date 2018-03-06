import React from 'react';
import { CardActions } from 'material-ui/Card';
import {
    Create, CreateButton, Datagrid, DateField, DeleteButton, DisabledInput, Edit, EditButton, Filter, List, ListButton, RefreshButton, required, Show, ShowButton, SimpleForm,
    SimpleShowLayout, TextField, TextInput, RichTextField
} from 'admin-on-rest';


const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right'
};

const DomainListActions = ({ resource, filters, displayedFilters, filterValues, basePath, showFilter }) => (
    <CardActions style={cardActionStyle}>
        {filters && React.cloneElement(filters, { resource, showFilter, displayedFilters, filterValues, context: 'button' }) }
        <CreateButton basePath={basePath} />
        <RefreshButton />
    </CardActions>
);

const DomainShowActions = ({ basePath, data }) => (
    <CardActions style={cardActionStyle}>
        <EditButton basePath={basePath} record={data} />
        <ListButton basePath={basePath} />
        <DeleteButton basePath={basePath} record={data} />
        <RefreshButton />
    </CardActions>
);

const DomainTitle = ({ record }) => {
    return <span>Domain {record ? `'${record.name}'` : ''}</span>;
};

export const DomainList = (props) => (
    <List actions={<DomainListActions />} title='Domains' {...props}>
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
    <Show actions={<DomainShowActions />} title={<DomainTitle />} {...props}>
        <SimpleShowLayout>
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
