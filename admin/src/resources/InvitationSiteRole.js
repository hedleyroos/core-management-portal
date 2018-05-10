/**
 * Generated InvitationSiteRole.js code. Edit at own risk.
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
import {
    InvitationSiteRoleFilter
} from '../filters/InvitationSiteRoleFilter';
import permissionsStore from '../auth/PermissionsStore';

const validationCreateInvitationSiteRole = values => {
    const errors = {};
    if (!values.invitation_id) {
        errors.invitation_id = ["invitation_id is required"];
    }
    if (!values.site_id) {
        errors.site_id = ["site_id is required"];
    }
    if (!values.role_id) {
        errors.role_id = ["role_id is required"];
    }
    return errors;
}

export const InvitationSiteRoleList = props => (
    <List {...props} title="InvitationSiteRole List" filters={<InvitationSiteRoleFilter />}>
        <Datagrid bodyOptions={ { showRowHover: true } }>
            <ReferenceField label="Invitation" source="invitation_id" reference="invitations" linkType="show" allowEmpty>
                <TextField source="email" />
            </ReferenceField>
            <ReferenceField label="Site" source="site_id" reference="sites" linkType="show" allowEmpty>
                <NumberField source="name" />
            </ReferenceField>
            <ReferenceField label="Role" source="role_id" reference="roles" linkType="show" allowEmpty>
                <NumberField source="label" />
            </ReferenceField>
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <ShowButton />
            {permissionsStore('invitationsiteroles', 'delete') ? <DeleteButton />: null}
        </Datagrid>
    </List>
)

export const InvitationSiteRoleCreate = props => (
    <Create {...props} title="InvitationSiteRole Create">
        <SimpleForm validate={validationCreateInvitationSiteRole}>
            <ReferenceInput label="Invitation" source="invitation_id" reference="invitations" perPage={0} allowEmpty>
                <SelectInput optionText="email" />
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

export const InvitationSiteRoleShow = props => (
    <Show {...props} title="InvitationSiteRole Show">
        <SimpleShowLayout>
            <ReferenceField label="Invitation" source="invitation_id" reference="invitations" linkType="show" allowEmpty>
                <TextField source="email" />
            </ReferenceField>
            <ReferenceField label="Site" source="site_id" reference="sites" linkType="show" allowEmpty>
                <NumberField source="name" />
            </ReferenceField>
            <ReferenceField label="Role" source="role_id" reference="roles" linkType="show" allowEmpty>
                <NumberField source="label" />
            </ReferenceField>
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
)

/** End of Generated Code **/