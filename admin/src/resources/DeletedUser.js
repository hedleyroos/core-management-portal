/**
 * Generated DeletedUser.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    SimpleList,
    Show,
    NumberField,
    SimpleForm,
    ReferenceField,
    DateField,
    Create,
    Datagrid,
    Responsive,
    TextInput,
    SimpleShowLayout,
    List,
    Edit,
    ReferenceManyField,
    TextField,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import DateTimeInput from '../inputs/DateTimeInput';
import PermissionsStore from '../auth/PermissionsStore';

import DeletedUserEditToolbar from '../customActions/DeletedUserEditToolbar';
import DeletedUserListActions from '../customActions/DeletedUserListActions';

import DeletedUserFilter from '../filters/DeletedUserFilter';

import FieldSelectDatagrid from '../grids/FieldSelectDatagrid';

const validationCreateDeletedUser = values => {
    const errors = {};
    if (!values.id) {
        errors.id = ['id is required'];
    }
    if (!values.username) {
        errors.username = ['username is required'];
    }
    if (!values.reason) {
        errors.reason = ['reason is required'];
    }
    return errors;
};

const validationEditDeletedUser = values => {
    const errors = {};
    return errors;
};

export const DeletedUserList = props => (
    <List
        {...props}
        title="DeletedUser List"
        filters={<DeletedUserFilter />}
        actions={<DeletedUserListActions />}
        bulkActionButtons={false}
    >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => `Username: ${record.username}`}
                    secondaryText={record => `Email: ${record.email}`}
                />
            }
            medium={
                <FieldSelectDatagrid>
                    <TextField source="id" sortable={false} />
                    <TextField source="username" sortable={false} />
                    <TextField source="email" sortable={false} />
                    <TextField source="msisdn" sortable={false} />
                    <TextField source="reason" sortable={false} />
                    <DateField source="created_at" sortable={false} />
                    <DateField source="updated_at" sortable={false} />
                    <DateField source="deleted_at" sortable={false} />
                    {PermissionsStore.getResourcePermission('users', 'list') ? (
                        <ReferenceField
                            label="User"
                            source="deleter_id"
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
                    {PermissionsStore.getResourcePermission('deletedusers', 'edit') ? (
                        <EditButton />
                    ) : null}
                    <ShowButton />
                    {PermissionsStore.getResourcePermission('deletedusers', 'remove') ? (
                        <DeleteButton />
                    ) : null}
                </FieldSelectDatagrid>
            }
        />
    </List>
);

export const DeletedUserCreate = props => (
    <Create {...props} title="DeletedUser Create">
        <SimpleForm validate={validationCreateDeletedUser} redirect="show">
            <TextInput source="id" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="msisdn" />
            <TextInput source="reason" />
        </SimpleForm>
    </Create>
);

export const DeletedUserShow = props => (
    <Show {...props} title="DeletedUser Show">
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="email" />
            <TextField source="msisdn" />
            <TextField source="reason" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <DateField source="deleted_at" />
            {PermissionsStore.getResourcePermission('users', 'list') ? (
                <ReferenceField
                    label="User"
                    source="deleter_id"
                    reference="users"
                    linkType="show"
                    allowEmpty
                >
                    <TextField source="username" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('deletedusersites', 'list') ? (
                <ReferenceManyField
                    label="Sites which the user visited"
                    reference="deletedusersites"
                    target="deleted_user_id"
                >
                    <Datagrid>
                        {PermissionsStore.getResourcePermission('sites', 'list') ? (
                            <ReferenceField
                                label="Site"
                                source="site_id"
                                reference="sites"
                                linkType="show"
                                allowEmpty
                            >
                                <NumberField source="name" />
                            </ReferenceField>
                        ) : (
                            <EmptyField />
                        )}
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                        <DateField source="deletion_requested_at" />
                        <TextField source="deletion_requested_via" />
                        <DateField source="deletion_confirmed_at" />
                        <TextField source="deletion_confirmed_via" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
        </SimpleShowLayout>
    </Show>
);

export const DeletedUserEdit = props => (
    <Edit {...props} title="DeletedUser Edit">
        <SimpleForm validate={validationEditDeletedUser} toolbar={<DeletedUserEditToolbar />}>
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="msisdn" />
            <TextInput source="reason" />
            <DateTimeInput source="deleted_at" />
            {PermissionsStore.getResourcePermission('deletedusersites', 'list') ? (
                <ReferenceManyField
                    label="Sites which the user visited"
                    reference="deletedusersites"
                    target="deleted_user_id"
                >
                    <Datagrid>
                        {PermissionsStore.getResourcePermission('sites', 'list') ? (
                            <ReferenceField
                                label="Site"
                                source="site_id"
                                reference="sites"
                                linkType="show"
                                allowEmpty
                            >
                                <NumberField source="name" />
                            </ReferenceField>
                        ) : (
                            <EmptyField />
                        )}
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                        <DateField source="deletion_requested_at" />
                        <TextField source="deletion_requested_via" />
                        <DateField source="deletion_confirmed_at" />
                        <TextField source="deletion_confirmed_via" />
                    </Datagrid>
                </ReferenceManyField>
            ) : null}
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
