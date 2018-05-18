/**
 * Generated Site.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    List,
    Datagrid,
    NumberField,
    ReferenceField,
    TextField,
    BooleanField,
    DateField,
    SimpleForm,
    Create,
    ReferenceInput,
    SelectInput,
    TextInput,
    BooleanInput,
    Show,
    SimpleShowLayout,
    ReferenceManyField,
    Edit,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';
import TableField from '../fields/TableField';
import permissionsStore from '../auth/PermissionsStore';
import EmptyField from '../fields/EmptyField';
import SiteFilter from '../filters/SiteFilter';

const validationCreateSite = values => {
    const errors = {};
    if (!values.domain_id) {
        errors.domain_id = ["domain_id is required"];
    }
    if (!values.name) {
        errors.name = ["name is required"];
    }
    return errors;
}

const validationEditSite = values => {
    const errors = {};
    return errors;
}

export const SiteList = props => (
    <List {...props} title="Site List" filters={<SiteFilter />}>
        <Datagrid bodyOptions={ { showRowHover: true } }>
            <NumberField source="id" />
            {permissionsStore.getResourcePermission('clients', 'list') ? (
                <ReferenceField label="Client" source="client_id" reference="clients" linkType="show" allowEmpty>
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {permissionsStore.getResourcePermission('domains', 'list') ? (
                <ReferenceField label="Domain" source="domain_id" reference="domains" linkType="show" allowEmpty>
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <TextField source="name" />
            <TextField source="description" />
            <BooleanField source="is_active" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            {permissionsStore.getResourcePermission('sites', 'edit') ? <EditButton /> : null}
            <ShowButton />
            {permissionsStore.getResourcePermission('sites', 'remove') ? <DeleteButton />: null}
        </Datagrid>
    </List>
)

export const SiteCreate = props => (
    <Create {...props} title="Site Create">
        <SimpleForm validate={validationCreateSite}>
            <ReferenceInput label="Client" source="client_id" reference="clients" perPage={0} allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Domain" source="domain_id" reference="domains" perPage={0} allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <BooleanInput source="is_active" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
)

export const SiteShow = props => (
    <Show {...props} title="Site Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            {permissionsStore.getResourcePermission('clients', 'list') ? (
                <ReferenceField label="Client" source="client_id" reference="clients" linkType="show" allowEmpty>
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            {permissionsStore.getResourcePermission('domains', 'list') ? (
                <ReferenceField label="Domain" source="domain_id" reference="domains" linkType="show" allowEmpty>
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <TextField source="name" />
            <TextField source="description" />
            <BooleanField source="is_active" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
	    <TableField label="Users" url="users_with_roles_for_site" linkField="username" linkedResource="users" />
            {permissionsStore.getResourcePermission('siteroles', 'list') ? (
                <ReferenceManyField label="Roles" reference="siteroles" target="site_id">
                    <Datagrid bodyOptions={ { showRowHover: true } }>
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
        </SimpleShowLayout>
    </Show>
)

export const SiteEdit = props => (
    <Edit {...props} title="Site Edit">
        <SimpleForm validate={validationEditSite}>
            <ReferenceInput label="Client" source="client_id" reference="clients" perPage={0} allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Domain" source="domain_id" reference="domains" perPage={0} allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="description" />
            <BooleanInput source="is_active" />
	    <TableField label="Users" url="users_with_roles_for_site" linkField="username" linkedResource="users" />
            {permissionsStore.getResourcePermission('siteroles', 'list') ? (
                <ReferenceManyField label="Roles" reference="siteroles" target="site_id">
                    <Datagrid bodyOptions={ { showRowHover: true } }>
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
        </SimpleForm>
    </Edit>
)

/** End of Generated Code **/