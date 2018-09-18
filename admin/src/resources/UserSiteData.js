/**
 * Generated UserSiteData.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    List,
    ReferenceField,
    TextField,
    NumberField,
    DateField,
    SimpleForm,
    Create,
    ReferenceInput,
    SelectInput,
    LongTextInput,
    Show,
    SimpleShowLayout,
    Edit,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';
import PermissionsStore from '../auth/PermissionsStore';
import EmptyField from '../fields/EmptyField';
import ObjectField from '../fields/ObjectField';
import UserSiteDataFilter from '../filters/UserSiteDataFilter';
import UnlimitedDropdownInput from '../inputs/UnlimitedDropdownInput';
import FieldSelectDatagrid from '../grids/FieldSelectDatagrid';

const validationCreateUserSiteData = values => {
    const errors = {};
    if (!values.user_id) {
        errors.user_id = ['user_id is required'];
    }
    if (!values.site_id) {
        errors.site_id = ['site_id is required'];
    }
    if (!values.data) {
        errors.data = ['data is required'];
    }
    return errors;
};

const validationEditUserSiteData = values => {
    const errors = {};
    return errors;
};

export const UserSiteDataList = props => (
    <List {...props} title="UserSiteData List" filters={<UserSiteDataFilter />}>
        <FieldSelectDatagrid bodyOptions={{ showRowHover: true }}>
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
            {PermissionsStore.getResourcePermission('sites', 'list') ? (
                <ReferenceField
                    label="Site"
                    source="site_id"
                    reference="sites"
                    sortable={false}
                    linkType="show"
                    allowEmpty
                >
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <ObjectField source="data" sortable={false} addLabel />
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
            {PermissionsStore.getResourcePermission('usersitedata', 'edit') ? <EditButton /> : null}
            <ShowButton />
            {PermissionsStore.getResourcePermission('usersitedata', 'remove') ? (
                <DeleteButton />
            ) : null}
        </FieldSelectDatagrid>
    </List>
);

export const UserSiteDataCreate = props => (
    <Create {...props} title="UserSiteData Create">
        <SimpleForm validate={validationCreateUserSiteData} redirect="show">
            {PermissionsStore.getResourcePermission('users', 'list') && (
                <UnlimitedDropdownInput
                    label="User"
                    source="user_id"
                    reference="users"
                    optionText="username"
                    filter={{ site_ids: '' }}
                />
            )}
            {PermissionsStore.getResourcePermission('sites', 'list') && (
                <ReferenceInput
                    label="Site"
                    source="site_id"
                    reference="sites"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="name" />
                </ReferenceInput>
            )}
            <LongTextInput
                source="data"
                format={value => (value instanceof Object ? JSON.stringify(value) : value)}
                parse={value => {
                    try {
                        return JSON.parse(value);
                    } catch (e) {
                        return value;
                    }
                }}
            />
        </SimpleForm>
    </Create>
);

export const UserSiteDataShow = props => (
    <Show {...props} title="UserSiteData Show">
        <SimpleShowLayout>
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
            <ObjectField source="data" addLabel />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const UserSiteDataEdit = props => (
    <Edit {...props} title="UserSiteData Edit">
        <SimpleForm validate={validationEditUserSiteData}>
            <LongTextInput
                source="data"
                format={value => (value instanceof Object ? JSON.stringify(value) : value)}
                parse={value => {
                    try {
                        return JSON.parse(value);
                    } catch (e) {
                        return value;
                    }
                }}
            />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
