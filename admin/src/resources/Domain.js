/**
 * Generated Domain.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    List,
    Datagrid,
    NumberField,
    ReferenceField,
    TextField,
    DateField,
    SimpleForm,
    Create,
    ReferenceInput,
    SelectInput,
    TextInput,
    Show,
    SimpleShowLayout,
    ReferenceManyField,
    Edit,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';
import EmptyField from '../fields/EmptyField';
import {
    DomainFilter
} from '../filters/DomainFilter';
import TableField from '../fields/TableField';
import permissionsStore from '../auth/PermissionsStore';

const validationCreateDomain = values => {
    const errors = {};
    if (!values.name) {
        errors.name = ["name is required"];
    }
    return errors;
}

const validationEditDomain = values => {
    const errors = {};
    return errors;
}

export const DomainList = props => (
    <List {...props} title="Domain List" filters={<DomainFilter />}>
        <Datagrid bodyOptions={ { showRowHover: true } }>
            <NumberField source="id" />
            <ReferenceField label="Parent" source="parent_id" reference="domains" linkType="show" allowEmpty>
                <NumberField source="name" />
            </ReferenceField>
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            {permissionsStore.getResourcePermission('domains', 'edit') ? <EditButton /> : null}
            <ShowButton />
            {permissionsStore.getResourcePermission('domains', 'remove') ? <DeleteButton />: null}
        </Datagrid>
    </List>
)

export const DomainCreate = props => (
    <Create {...props} title="Domain Create">
        <SimpleForm validate={validationCreateDomain}>
            <ReferenceInput label="Parent" source="parent_id" reference="domains" perPage={0} allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
)

export const DomainShow = props => (
    <Show {...props} title="Domain Show">
        <SimpleShowLayout>
            <NumberField source="id" />
            <ReferenceField label="Parent" source="parent_id" reference="domains" linkType="show" allowEmpty>
                <NumberField source="name" />
            </ReferenceField>
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TableField label="Users" url="users_with_roles_for_domain" linkField="username" linkedResource="users" />
            {permissionsStore.getResourcePermission('domains', 'list') ? (
                <ReferenceManyField label="Child Domains" reference="domains" target="parent_id">
                    <Datagrid bodyOptions={ { showRowHover: true } }>
                        <NumberField source="id" />
                        <TextField source="name" />
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
            {permissionsStore.getResourcePermission('domainroles', 'list') ? (
                <ReferenceManyField label="Roles" reference="domainroles" target="domain_id">
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

export const DomainEdit = props => (
    <Edit {...props} title="Domain Edit">
        <SimpleForm validate={validationEditDomain}>
            <ReferenceInput label="Parent" source="parent_id" reference="domains" perPage={0} allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="description" />
            <TableField label="Users" url="users_with_roles_for_domain" linkField="username" linkedResource="users" />
            {permissionsStore.getResourcePermission('domains', 'list') ? (
                <ReferenceManyField label="Child Domains" reference="domains" target="parent_id">
                    <Datagrid bodyOptions={ { showRowHover: true } }>
                        <NumberField source="id" />
                        <TextField source="name" />
                        <DateField source="created_at" />
                        <DateField source="updated_at" />
                    </Datagrid>
                </ReferenceManyField>
            ) : (
                <EmptyField />
            )}
            {permissionsStore.getResourcePermission('domainroles', 'list') ? (
                <ReferenceManyField label="Roles" reference="domainroles" target="domain_id">
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