import React from 'react';
import {
    List,
    Show,
    Edit,
    Create,
    Datagrid,
    SimpleShowLayout,
    SimpleForm,
    TextInput,
    NumberInput,
    TextField,
    NumberField,
    DateField,
    DisabledInput,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';

const validationCreateInvitationDomainRole = values => {
    const errors = {};
    if (!values.invitation_id) {
        errors.invitation_id = ["invitation_id is required"];
    }
    if (!values.role_id) {
        errors.role_id = ["role_id is required"];
    }
    if (!values.domain_id) {
        errors.domain_id = ["domain_id is required"];
    }
    return errors;
}

export const InvitationDomainRoleShow = props => (
    <Show {...props} title="InvitationDomainRole Show">
        <SimpleShowLayout>
            <ReferenceField label="Invitation" source="invitation_id" reference="invitations" linkType="show" allowEmpty>
                <TextField source="id" />
            </ReferenceField>
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

export const InvitationDomainRoleCreate = props => (
    <Create {...props} title="InvitationDomainRole Create">
        <SimpleForm validate={validationCreateInvitationDomainRole}>
            <ReferenceInput label="Invitation" source="invitation_id" reference="invitations" allowEmpty>
                <SelectInput source="id" />
            </ReferenceInput>
            <ReferenceInput label="Role" source="role_id" reference="roles" allowEmpty>
                <SelectInput source="id" />
            </ReferenceInput>
            <ReferenceInput label="Domain" source="domain_id" reference="domains" allowEmpty>
                <SelectInput source="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
)

export const InvitationDomainRoleList = props => (
    <List {...props} title="InvitationDomainRole List">
        <Datagrid>
            <ReferenceField label="Invitation" source="invitation_id" reference="invitations" linkType="show" allowEmpty>
                <TextField source="id" />
            </ReferenceField>
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

