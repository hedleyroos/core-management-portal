/**
 * Generated AdminNote.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    SimpleList,
    SimpleForm,
    Create,
    ReferenceInput,
    TextField,
    SelectInput,
    Show,
    List,
    ReferenceField,
    DateField,
    Datagrid,
    Responsive,
    SimpleShowLayout,
    TextInput,
    Edit,
    NumberField,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';

import AdminNoteEditToolbar from '../customActions/AdminNoteEditToolbar';

import AdminNoteFilter from '../filters/AdminNoteFilter';

const validationCreateAdminNote = values => {
    const errors = {};
    if (!values.user_id) {
        errors.user_id = ['user_id is required'];
    }
    if (!values.note) {
        errors.note = ['note is required'];
    }
    return errors;
};

const validationEditAdminNote = values => {
    const errors = {};
    return errors;
};

export const AdminNoteList = props => (
    <List {...props} title="AdminNote List" filters={<AdminNoteFilter />} bulkActionButtons={false}>
        <Responsive
            small={<SimpleList primaryText={record => `Note: ${record.note}`} />}
            medium={
                <Datagrid>
                    <NumberField source="id" sortable={false} />
                    {PermissionsStore.getResourcePermission('users', 'list') ? (
                        <ReferenceField
                            label="User"
                            source="user_id"
                            reference="users"
                            sortable={false}
                            linkType="show"
                            allowEmpty
                        >
                            <TextField source="username" />
                        </ReferenceField>
                    ) : (
                        <EmptyField />
                    )}
                    {PermissionsStore.getResourcePermission('users', 'list') ? (
                        <ReferenceField
                            label="User"
                            source="creator_id"
                            reference="users"
                            sortable={false}
                            linkType="show"
                            allowEmpty
                        >
                            <TextField source="username" />
                        </ReferenceField>
                    ) : (
                        <EmptyField />
                    )}
                    <TextField source="note" sortable={false} />
                    <DateField source="created_at" sortable={false} />
                    <DateField source="updated_at" sortable={false} />
                    <EditButton />
                    <ShowButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
);

export const AdminNoteCreate = props => (
    <Create {...props} title="AdminNote Create">
        <SimpleForm validate={validationCreateAdminNote} redirect="show">
            {PermissionsStore.getResourcePermission('users', 'list') && (
                <ReferenceInput
                    label="User"
                    source="user_id"
                    reference="users"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="username" />
                </ReferenceInput>
            )}
            <TextInput source="note" />
        </SimpleForm>
    </Create>
);

export const AdminNoteShow = props => (
    <Show {...props} title="AdminNote Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            {PermissionsStore.getResourcePermission('users', 'list') ? (
                <ReferenceField
                    label="User"
                    source="user_id"
                    reference="users"
                    linkType="show"
                    allowEmpty
                >
                    <TextField source="username" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('users', 'list') ? (
                <ReferenceField
                    label="User"
                    source="creator_id"
                    reference="users"
                    linkType="show"
                    allowEmpty
                >
                    <TextField source="username" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <TextField source="note" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const AdminNoteEdit = props => (
    <Edit {...props} title="AdminNote Edit">
        <SimpleForm validate={validationEditAdminNote} toolbar={<AdminNoteEditToolbar />}>
            <TextInput source="note" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
