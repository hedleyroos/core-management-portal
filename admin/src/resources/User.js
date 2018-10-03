/**
 * Generated User.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    SelectInput,
    DateField,
    ReferenceField,
    Edit,
    UrlField,
    TextField,
    List,
    Responsive,
    BooleanInput,
    Datagrid,
    SimpleList,
    SimpleShowLayout,
    Show,
    NumberField,
    DateInput,
    TextInput,
    SimpleForm,
    ReferenceInput,
    BooleanField,
    ReferenceManyField,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ObjectField from '../fields/ObjectField';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';

import UserEditToolbar from '../customActions/UserEditToolbar';
import UserListActions from '../customActions/UserListActions';
import UserShowActions from '../customActions/UserShow';

import UserFilter from '../filters/UserFilter';

import IdenticonField from '../fields/IdenticonField';
import FieldSelectDatagrid from '../grids/FieldSelectDatagrid';

const validationEditUser = values => {
    const errors = {};
    return errors;
};

export const UserListNoSites = props => (
    <Card>
        <CardContent>
            <Typography variant="title">User List</Typography>
            <Typography>
                There are no sites linked to the current context. Users Page not available.
            </Typography>
        </CardContent>
    </Card>
);

export const UserList = props => (
    <List
        {...props}
        title="User List"
        filters={<UserFilter />}
        actions={<UserListActions />}
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
                    <IdenticonField source="id" />
                    <TextField source="username" sortable={false} />
                    <TextField source="first_name" sortable={false} />
                    <TextField source="last_name" sortable={false} />
                    <TextField source="email" sortable={false} />
                    <BooleanField source="is_active" sortable={false} />
                    <DateField source="date_joined" sortable={false} />
                    <DateField source="last_login" sortable={false} />
                    <BooleanField source="email_verified" sortable={false} />
                    <BooleanField source="msisdn_verified" sortable={false} />
                    <TextField source="msisdn" sortable={false} />
                    <TextField source="gender" sortable={false} />
                    <DateField source="birth_date" sortable={false} />
                    <UrlField source="avatar" sortable={false} />
                    {PermissionsStore.getResourcePermission('countries', 'list') ? (
                        <ReferenceField
                            label="Country"
                            source="country_code"
                            reference="countries"
                            sortable={false}
                            linkType="show"
                            allowEmpty
                        >
                            <TextField source="name" />
                        </ReferenceField>
                    ) : (
                        <EmptyField />
                    )}
                    {PermissionsStore.getResourcePermission('organisations', 'list') ? (
                        <ReferenceField
                            label="Organisation"
                            source="organisation_id"
                            reference="organisations"
                            sortable={false}
                            linkType="show"
                            allowEmpty
                        >
                            <NumberField source="name" />
                        </ReferenceField>
                    ) : (
                        <EmptyField />
                    )}
                    <DateField source="created_at" sortable={false} />
                    <DateField source="updated_at" sortable={false} />
                    {PermissionsStore.getResourcePermission('users', 'edit') ? (
                        <EditButton />
                    ) : null}
                    <ShowButton />
                    {PermissionsStore.getResourcePermission('users', 'remove') ? (
                        <DeleteButton />
                    ) : null}
                </FieldSelectDatagrid>
            }
        />
    </List>
);

export const UserShow = props => (
    <Show {...props} title="User Show" actions={<UserShowActions />}>
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
            <UrlField source="avatar" />
            {PermissionsStore.getResourcePermission('countries', 'list') ? (
                <ReferenceField
                    label="Country"
                    source="country_code"
                    reference="countries"
                    linkType="show"
                    allowEmpty
                >
                    <TextField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('organisations', 'list') ? (
                <ReferenceField
                    label="Organisation"
                    source="organisation_id"
                    reference="organisations"
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
            {PermissionsStore.getResourcePermission('userdomainroles', 'list') ? (
                <ReferenceManyField
                    label="Domain Roles"
                    reference="userdomainroles"
                    target="user_id"
                >
                    <Datagrid>
                        {PermissionsStore.getResourcePermission('domains', 'list') ? (
                            <ReferenceField
                                label="Domain"
                                source="domain_id"
                                reference="domains"
                                linkType="show"
                                allowEmpty
                            >
                                <NumberField source="name" />
                            </ReferenceField>
                        ) : (
                            <EmptyField />
                        )}
                        {PermissionsStore.getResourcePermission('roles', 'list') ? (
                            <ReferenceField
                                label="Role"
                                source="role_id"
                                reference="roles"
                                linkType="show"
                                allowEmpty
                            >
                                <NumberField source="label" />
                            </ReferenceField>
                        ) : (
                            <EmptyField />
                        )}
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('usersiteroles', 'list') ? (
                <ReferenceManyField label="Site Roles" reference="usersiteroles" target="user_id">
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
                        {PermissionsStore.getResourcePermission('roles', 'list') ? (
                            <ReferenceField
                                label="Role"
                                source="role_id"
                                reference="roles"
                                linkType="show"
                                allowEmpty
                            >
                                <NumberField source="label" />
                            </ReferenceField>
                        ) : (
                            <EmptyField />
                        )}
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
            {PermissionsStore.getResourcePermission('usersitedata', 'list') ? (
                <ReferenceManyField label="Site Data" reference="usersitedata" target="user_id">
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
);

export const UserEdit = props => (
    <Edit {...props} title="User Edit">
        <SimpleForm validate={validationEditUser} toolbar={<UserEditToolbar />}>
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
            {PermissionsStore.getResourcePermission('countries', 'list') && (
                <ReferenceInput
                    label="Country"
                    source="country_code"
                    reference="countries"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="name" />
                </ReferenceInput>
            )}
            {PermissionsStore.getResourcePermission('userdomainroles', 'list') ? (
                <ReferenceManyField
                    label="Domain Roles"
                    reference="userdomainroles"
                    target="user_id"
                >
                    <Datagrid>
                        {PermissionsStore.getResourcePermission('domains', 'list') ? (
                            <ReferenceField
                                label="Domain"
                                source="domain_id"
                                reference="domains"
                                linkType="show"
                                allowEmpty
                            >
                                <NumberField source="name" />
                            </ReferenceField>
                        ) : (
                            <EmptyField />
                        )}
                        {PermissionsStore.getResourcePermission('roles', 'list') ? (
                            <ReferenceField
                                label="Role"
                                source="role_id"
                                reference="roles"
                                linkType="show"
                                allowEmpty
                            >
                                <NumberField source="label" />
                            </ReferenceField>
                        ) : (
                            <EmptyField />
                        )}
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : null}
            {PermissionsStore.getResourcePermission('usersiteroles', 'list') ? (
                <ReferenceManyField label="Site Roles" reference="usersiteroles" target="user_id">
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
                        {PermissionsStore.getResourcePermission('roles', 'list') ? (
                            <ReferenceField
                                label="Role"
                                source="role_id"
                                reference="roles"
                                linkType="show"
                                allowEmpty
                            >
                                <NumberField source="label" />
                            </ReferenceField>
                        ) : (
                            <EmptyField />
                        )}
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : null}
            {PermissionsStore.getResourcePermission('usersitedata', 'list') ? (
                <ReferenceManyField label="Site Data" reference="usersitedata" target="user_id">
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
                        <ObjectField source="data" addLabel />
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : null}
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
