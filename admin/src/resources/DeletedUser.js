/**
 * Generated DeletedUser.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
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
import DateTimeInput from 'aor-datetime-input';
import DeletedUserFilter from '../filters/DeletedUserFilter';
const timezoneOffset = new Date().getTimezoneOffset();

const dateTimeFormatter = value => {
    // Value received is a date object in the DateTimeInput.
    if (timezoneOffset !== 0 && value) {
        value = new Date(value);
        value = new Date(value.valueOf() + timezoneOffset * 60000);
    }
    return value;
};

const dateTimeParser = value => {
    // Value received is a date object in the DateTimeInput.
    if (timezoneOffset !== 0 && value) {
        value = new Date(value.valueOf() - timezoneOffset * 60000);
    }
    return value;
};

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
    <List {...props} title="DeletedUser List" filters={<DeletedUserFilter />}>
        <Datagrid bodyOptions={{ showRowHover: true }}>
            <TextField source="id" sortable={false} />
            <TextField source="username" sortable={false} />
            <TextField source="email" sortable={false} />
            <TextField source="msisdn" sortable={false} />
            <TextField source="reason" sortable={false} />
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
            <DateField source="deleted_at" sortable={false} />
            {PermissionsStore.getResourcePermission('deleters', 'list') ? (
                <ReferenceField
                    label="Deleter"
                    source="deleter_id"
                    reference="deleters"
                    sortable={false}
                    linkType="show"
                    allowEmpty
                >
                    <TextField source="" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('deleteduser', 'edit') ? <EditButton /> : null}
            <ShowButton />
            {PermissionsStore.getResourcePermission('deleteduser', 'remove') ? (
                <DeleteButton />
            ) : null}
        </Datagrid>
    </List>
);

export const DeletedUserCreate = props => (
    <Create {...props} title="DeletedUser Create">
        <SimpleForm validate={validationCreateDeletedUser}>
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
            {PermissionsStore.getResourcePermission('deleters', 'list') ? (
                <ReferenceField
                    label="Deleter"
                    source="deleter_id"
                    reference="deleters"
                    linkType="show"
                    allowEmpty
                >
                    <TextField source="" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
        </SimpleShowLayout>
    </Show>
);

export const DeletedUserEdit = props => (
    <Edit {...props} title="DeletedUser Edit">
        <SimpleForm validate={validationEditDeletedUser}>
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="msisdn" />
            <TextInput source="reason" />
            <DateTimeInput source="deleted_at" format={dateTimeFormatter} parse={dateTimeParser} />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
