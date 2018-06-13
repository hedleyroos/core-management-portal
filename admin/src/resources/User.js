/**
 * Generated User.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    BooleanField,
    DateField,
    ReferenceField,
    NumberField,
    Show,
    SimpleShowLayout,
    ReferenceManyField,
    SimpleForm,
    Edit,
    TextInput,
    BooleanInput,
    DateInput,
    ReferenceInput,
    SelectInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';

import FieldSelectDatagrid from '../grids/FieldSelectDatagrid';
import PermissionsStore from '../auth/PermissionsStore';
import EmptyField from '../fields/EmptyField';
import ObjectField from '../fields/ObjectField';
import UserFilter from '../filters/UserFilter';

const validationEditUser = values => {
    const errors = {};
    return errors;
}

const hiddenFields = ['created_at', 'updated_at', 'avatar', 'country_code'];

export const UserList = props => (
    <List {...props} title="User List" filters={<UserFilter />} >
        <FieldSelectDatagrid defaultHiddenFields={hiddenFields} bodyOptions={ { showRowHover: true } }>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="email" />
            <BooleanField source="is_active" />
            <DateField source="date_joined" />
            <DateField source="last_login" />
            <BooleanField source="email_verified" />
            <BooleanField source="msisdn_verified" />
            <TextField source="msisdn" />
            <TextField source="gender" />
            <DateField source="birth_date" />
            <TextField source="avatar" />
            {PermissionsStore.getResourcePermission('countries', 'list') ? (
                <ReferenceField label="Country" source="country_code" reference="countries" linkType="show" allowEmpty>
                    <TextField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('organisationalunits', 'list') ? (
                <ReferenceField label="Organisationalunit" source="organisational_unit_id" reference="organisationalunits" linkType="show" allowEmpty>
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <DateField source="created_at" />
            <DateField source="updated_at" />
            {PermissionsStore.getResourcePermission('users', 'edit') ? <EditButton /> : null}
            <ShowButton />
            {PermissionsStore.getResourcePermission('users', 'remove') ? <DeleteButton />: null}
        </FieldSelectDatagrid>
    </List>
)

export const UserShow = props => (
    <Show {...props} title="User Show">
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="email" />
            <BooleanField source="is_active" />
            <DateField source="date_joined" />
            <DateField source="last_login" />
            <BooleanField source="email_verified" />
            <BooleanField source="msisdn_verified" />
            <TextField source="msisdn" />
            <TextField source="gender" />
            <DateField source="birth_date" />
            <TextField source="avatar" />
            {PermissionsStore.getResourcePermission('countries', 'list') ? (
                <ReferenceField label="Country" source="country_code" reference="countries" linkType="show" allowEmpty>
                    <TextField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('organisationalunits', 'list') ? (
                <ReferenceField label="Organisationalunit" source="organisational_unit_id" reference="organisationalunits" linkType="show" allowEmpty>
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <DateField source="created_at" />
            <DateField source="updated_at" />
            {PermissionsStore.getResourcePermission('userdomainroles', 'list') ? (
                <ReferenceManyField label="Domain Roles" reference="userdomainroles" target="user_id">
                    <Datagrid bodyOptions={ { showRowHover: true } }>
                        <ReferenceField label="Domain" source="domain_id" reference="domains" linkType="show" allowEmpty>
                            <NumberField source="name" />
                        </ReferenceField>
                        <ReferenceField label="Role" source="role_id" reference="roles" linkType="show" allowEmpty>
                            <NumberField source="label" />
                        </ReferenceField>
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('usersiteroles', 'list') ? (
                <ReferenceManyField label="Site Roles" reference="usersiteroles" target="user_id">
                    <Datagrid bodyOptions={ { showRowHover: true } }>
                        <ReferenceField label="Site" source="site_id" reference="sites" linkType="show" allowEmpty>
                            <NumberField source="name" />
                        </ReferenceField>
                        <ReferenceField label="Role" source="role_id" reference="roles" linkType="show" allowEmpty>
                            <NumberField source="label" />
                        </ReferenceField>
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('usersitedata', 'list') ? (
                <ReferenceManyField label="Site Data" reference="usersitedata" target="user_id">
                    <Datagrid bodyOptions={ { showRowHover: true } }>
                        <ReferenceField label="Site" source="site_id" reference="sites" linkType="show" allowEmpty>
                            <NumberField source="name" />
                        </ReferenceField>
                        <ObjectField source="data" addLabel />
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
        </SimpleShowLayout>
    </Show>
)

export const UserEdit = props => (
    <Edit {...props} title="User Edit">
        <SimpleForm validate={validationEditUser}>
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="email" />
            <BooleanInput source="is_active" />
            <BooleanInput source="email_verified" />
            <BooleanInput source="msisdn_verified" />
            <TextInput source="msisdn" />
            <TextInput source="gender" />
            <DateInput source="birth_date" />
            <TextInput source="avatar" />
            <ReferenceInput label="Country" source="country_code" reference="countries" perPage={0} allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            {PermissionsStore.getResourcePermission('userdomainroles', 'list') ? (
                <ReferenceManyField label="Domain Roles" reference="userdomainroles" target="user_id">
                    <Datagrid bodyOptions={ { showRowHover: true } }>
                        <ReferenceField label="Domain" source="domain_id" reference="domains" linkType="show" allowEmpty>
                            <NumberField source="name" />
                        </ReferenceField>
                        <ReferenceField label="Role" source="role_id" reference="roles" linkType="show" allowEmpty>
                            <NumberField source="label" />
                        </ReferenceField>
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('usersiteroles', 'list') ? (
                <ReferenceManyField label="Site Roles" reference="usersiteroles" target="user_id">
                    <Datagrid bodyOptions={ { showRowHover: true } }>
                        <ReferenceField label="Site" source="site_id" reference="sites" linkType="show" allowEmpty>
                            <NumberField source="name" />
                        </ReferenceField>
                        <ReferenceField label="Role" source="role_id" reference="roles" linkType="show" allowEmpty>
                            <NumberField source="label" />
                        </ReferenceField>
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('usersitedata', 'list') ? (
                <ReferenceManyField label="Site Data" reference="usersitedata" target="user_id">
                    <Datagrid bodyOptions={ { showRowHover: true } }>
                        <ReferenceField label="Site" source="site_id" reference="sites" linkType="show" allowEmpty>
                            <NumberField source="name" />
                        </ReferenceField>
                        <ObjectField source="data" addLabel />
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
        </SimpleForm>
    </Edit>
)

/** End of Generated Code **/