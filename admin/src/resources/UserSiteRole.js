/**
 * Generated UserSiteRole.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    List,
    Datagrid,
    ReferenceField,
    TextField,
    NumberField,
    DateField,
    SimpleForm,
    Create,
    ReferenceInput,
    SelectInput,
    Show,
    SimpleShowLayout,
    DeleteButton,
    ShowButton
} from 'admin-on-rest';
import permissionsStore from '../auth/PermissionsStore';
import EmptyField from '../fields/EmptyField';
import UserSiteRoleFilter from '../filters/UserSiteRoleFilter';

const validationCreateUserSiteRole = values => {
    const errors = {};
    if (!values.user_id) {
        errors.user_id = ["user_id is required"];
    }
    if (!values.site_id) {
        errors.site_id = ["site_id is required"];
    }
    if (!values.role_id) {
        errors.role_id = ["role_id is required"];
    }
    return errors;
}

export const UserSiteRoleList = props => (
    <List {...props} title="UserSiteRole List" filters={<UserSiteRoleFilter />}>
        <Datagrid bodyOptions={ { showRowHover: true } }>
            {permissionsStore.getResourcePermission('users', 'list') ? (
                <ReferenceField label="User" source="user_id" reference="users" linkType="show" allowEmpty>
                    <TextField source="username" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {permissionsStore.getResourcePermission('sites', 'list') ? (
                <ReferenceField label="Site" source="site_id" reference="sites" linkType="show" allowEmpty>
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {permissionsStore.getResourcePermission('roles', 'list') ? (
                <ReferenceField label="Role" source="role_id" reference="roles" linkType="show" allowEmpty>
                    <NumberField source="label" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <ShowButton />
            {permissionsStore.getResourcePermission('usersiteroles', 'remove') ? <DeleteButton />: null}
        </Datagrid>
    </List>
)

export const UserSiteRoleCreate = props => (
    <Create {...props} title="UserSiteRole Create">
        <SimpleForm validate={validationCreateUserSiteRole}>
            <ReferenceInput label="User" source="user_id" reference="users" perPage={0} allowEmpty>
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ReferenceInput label="Site" source="site_id" reference="sites" perPage={0} allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Role" source="role_id" reference="roles" perPage={0} allowEmpty>
                <SelectInput optionText="label" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
)

export const UserSiteRoleShow = props => (
    <Show {...props} title="UserSiteRole Show">
        <SimpleShowLayout>
            {permissionsStore.getResourcePermission('users', 'list') ? (
                <ReferenceField label="User" source="user_id" reference="users" linkType="show" allowEmpty>
                    <TextField source="username" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {permissionsStore.getResourcePermission('sites', 'list') ? (
                <ReferenceField label="Site" source="site_id" reference="sites" linkType="show" allowEmpty>
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {permissionsStore.getResourcePermission('roles', 'list') ? (
                <ReferenceField label="Role" source="role_id" reference="roles" linkType="show" allowEmpty>
                    <NumberField source="label" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
)

/** End of Generated Code **/