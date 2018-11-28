/**
 * Generated DeletionMethod.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    SimpleForm,
    Show,
    Edit,
    NumberField,
    LongTextInput,
    DateField,
    Datagrid,
    SimpleShowLayout,
    List,
    TextField,
    TextInput,
    Create,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';
import PermissionsStore from '../auth/PermissionsStore';
import ObjectField from '../fields/ObjectField';

import DeletionMethodEditToolbar from '../customActions/DeletionMethodEditToolbar';
import DeletionMethodListActions from '../customActions/DeletionMethodListActions';

import DeletionMethodFilter from '../filters/DeletionMethodFilter';

const validationCreateDeletionMethod = values => {
    const errors = {};
    if (!values.label) {
        errors.label = ['label is required'];
    }
    if (!values.data_schema) {
        errors.data_schema = ['data_schema is required'];
    }
    if (!values.description) {
        errors.description = ['description is required'];
    }
    return errors;
};

const validationEditDeletionMethod = values => {
    const errors = {};
    return errors;
};

export const DeletionMethodList = props => (
    <List
        {...props}
        title="DeletionMethod List"
        filters={<DeletionMethodFilter />}
        actions={<DeletionMethodListActions />}
        bulkActionButtons={false}
    >
        <Datagrid>
            <NumberField source="id" sortable={false} />
            <TextField source="label" sortable={false} />
            <ObjectField source="data_schema" sortable={false} addLabel />
            <TextField source="description" sortable={false} />
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
            {PermissionsStore.getResourcePermission('deletionmethods', 'edit') ? (
                <EditButton />
            ) : null}
            <ShowButton />
            {PermissionsStore.getResourcePermission('deletionmethods', 'remove') ? (
                <DeleteButton />
            ) : null}
        </Datagrid>
    </List>
);

export const DeletionMethodCreate = props => (
    <Create {...props} title="DeletionMethod Create">
        <SimpleForm validate={validationCreateDeletionMethod} redirect="show">
            <TextInput source="label" />
            <LongTextInput
                source="data_schema"
                format={value => (value instanceof Object ? JSON.stringify(value) : value)}
                parse={value => {
                    try {
                        return JSON.parse(value);
                    } catch (e) {
                        return value;
                    }
                }}
            />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const DeletionMethodShow = props => (
    <Show {...props} title="DeletionMethod Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="label" />
            <ObjectField source="data_schema" addLabel />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const DeletionMethodEdit = props => (
    <Edit {...props} title="DeletionMethod Edit">
        <SimpleForm validate={validationEditDeletionMethod} toolbar={<DeletionMethodEditToolbar />}>
            <TextInput source="label" />
            <LongTextInput
                source="data_schema"
                format={value => (value instanceof Object ? JSON.stringify(value) : value)}
                parse={value => {
                    try {
                        return JSON.parse(value);
                    } catch (e) {
                        return value;
                    }
                }}
            />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
