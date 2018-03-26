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
    TextInput,
    BooleanInput,
    NumberField,
    DateField,
    TextField,
    BooleanField,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';

const validationCreateUserSiteData = values => {
    const errors = {};
    if (!values.site_id) {
        errors.site_id = ["site_id is required"];
    }
    if (!values.user_id) {
        errors.user_id = ["user_id is required"];
    }
    return errors;
}

const validationEditUserSiteData = values => {
    const errors = {};
    return errors;
}

export const UserSiteDataShow = props => (
    <Show {...props} title="UserSiteData Show">
        <SimpleShowLayout>
            <ReferenceField label="Site" source="site_id" reference="sites" linkType="show" allowEmpty>
                <NumberField source="id" />
            </ReferenceField>
            <DateField source="created_at" />
            <ReferenceField label="User" source="user_id" reference="users" linkType="show" allowEmpty>
                <TextField source="id" />
            </ReferenceField>
            <DateField source="consented_at" />
            <DateField source="updated_at" />
            <BooleanField source="blocked" />
        </SimpleShowLayout>
    </Show>
)

export const UserSiteDataCreate = props => (
    <Create {...props} title="UserSiteData Create">
        <SimpleForm validate={validationCreateUserSiteData}>
            <ReferenceInput label="Site" source="site_id" reference="sites" allowEmpty>
                <SelectInput source="id" />
            </ReferenceInput>
            <TextInput source="consented_at" />
            <ReferenceInput label="User" source="user_id" reference="users" allowEmpty>
                <SelectInput source="id" />
            </ReferenceInput>
            <BooleanInput source="blocked" />
        </SimpleForm>
    </Create>
)

export const UserSiteDataList = props => (
    <List {...props} title="UserSiteData List">
        <Datagrid>
            <ReferenceField label="Site" source="site_id" reference="sites" linkType="show" allowEmpty>
                <NumberField source="id" />
            </ReferenceField>
            <DateField source="created_at" />
            <ReferenceField label="User" source="user_id" reference="users" linkType="show" allowEmpty>
                <TextField source="id" />
            </ReferenceField>
            <DateField source="consented_at" />
            <DateField source="updated_at" />
            <BooleanField source="blocked" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const UserSiteDataEdit = props => (
    <Edit {...props} title="UserSiteData Edit">
        <SimpleForm validate={validationCreateUserSiteData}>
            <TextInput source="consented_at" />
            <BooleanInput source="blocked" />
        </SimpleForm>
    </Edit>
)

