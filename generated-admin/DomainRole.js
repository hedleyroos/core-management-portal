import React from 'react';
import {
    List,
    Show,
    Edit,
    Create,
    Datagrid,
    SimpleShowLayout,
    SimpleForm,
    BooleanField,
    NumberField,
    DateField,
    BooleanInput,
    NumberInput,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';

const validationCreateDomainRole = values => {
    const errors = {};
    if (!values.role_id) {
        errors.role_id = ["role_id is required"];
    }
    if (!values.domain_id) {
        errors.domain_id = ["domain_id is required"];
    }
    return errors;
}

const validationEditDomainRole = values => {
    const errors = {};
    return errors;
}

export const DomainRoleShow = props => (
    <Show {...props} title="DomainRole Show">
        <SimpleShowLayout>
            <BooleanField source="grant_implicitly" />
            <ReferenceField label="Role" source="role_id" reference="roles" linkType="show" allowEmpty>
                <NumberField source="id" />
            </ReferenceField>
            <DateField source="created_at" />
            <ReferenceField label="Domain" source="domain_id" reference="domains" linkType="show" allowEmpty>
                <NumberField source="id" />
            </ReferenceField>
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
)

export const DomainRoleCreate = props => (
    <Create {...props} title="DomainRole Create">
        <SimpleForm validate={validationCreateDomainRole}>
            <BooleanInput source="grant_implicitly" />
            <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
                <SelectInput source="id" />
            </ReferenceInput>
            <ReferenceInput label="Domain" source="domain_id" reference="domains" allowEmpty>
                <SelectInput source="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
)

export const DomainRoleList = props => (
    <List {...props} title="DomainRole List">
        <Datagrid>
            <BooleanField source="grant_implicitly" />
            <ReferenceField label="Role" source="role_id" reference="roles" linkType="show" allowEmpty>
                <NumberField source="id" />
            </ReferenceField>
            <DateField source="created_at" />
            <ReferenceField label="Domain" source="domain_id" reference="domains" linkType="show" allowEmpty>
                <NumberField source="id" />
            </ReferenceField>
            <DateField source="updated_at" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const DomainRoleEdit = props => (
    <Edit {...props} title="DomainRole Edit">
        <SimpleForm validate={validationCreateDomainRole}>
            <BooleanInput source="grant_implicitly" />
        </SimpleForm>
    </Edit>
)

