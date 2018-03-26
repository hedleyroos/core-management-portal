import React from 'react';
import {
    List,
    Show,
    Edit,
    Create,
    Datagrid,
    SimpleShowLayout,
    SimpleForm,
    NumberInput,
    NumberField,
    DateField,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';

const validationCreateRoleResourcePermission = values => {
    const errors = {};
    if (!values.permission_id) {
        errors.permission_id = ["permission_id is required"];
    }
    if (!values.role_id) {
        errors.role_id = ["role_id is required"];
    }
    if (!values.resource_id) {
        errors.resource_id = ["resource_id is required"];
    }
    return errors;
}

export const RoleResourcePermissionShow = props => (
    <Show {...props} title="RoleResourcePermission Show">
        <SimpleShowLayout>
            <ReferenceField label="Permission" source="permission_id" reference="permissions" linkType="show" allowEmpty>
                <NumberField source="id" />
            </ReferenceField>
            <ReferenceField label="Role" source="role_id" reference="roles" linkType="show" allowEmpty>
                <NumberField source="id" />
            </ReferenceField>
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <ReferenceField label="Resource" source="resource_id" reference="resources" linkType="show" allowEmpty>
                <NumberField source="id" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
)

export const RoleResourcePermissionCreate = props => (
    <Create {...props} title="RoleResourcePermission Create">
        <SimpleForm validate={validationCreateRoleResourcePermission}>
            <ReferenceInput label="Permission" source="permission_id" reference="permissions" allowEmpty>
                <SelectInput source="id" />
            </ReferenceInput>
            <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
                <SelectInput source="id" />
            </ReferenceInput>
            <ReferenceInput label="Resource" source="resource_id" reference="resources" allowEmpty>
                <SelectInput source="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
)

export const RoleResourcePermissionList = props => (
    <List {...props} title="RoleResourcePermission List">
        <Datagrid>
            <ReferenceField label="Permission" source="permission_id" reference="permissions" linkType="show" allowEmpty>
                <NumberField source="id" />
            </ReferenceField>
            <ReferenceField label="Role" source="role_id" reference="roles" linkType="show" allowEmpty>
                <NumberField source="id" />
            </ReferenceField>
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <ReferenceField label="Resource" source="resource_id" reference="resources" linkType="show" allowEmpty>
                <NumberField source="id" />
            </ReferenceField>
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

