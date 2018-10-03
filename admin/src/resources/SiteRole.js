/**
 * Generated SiteRole.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    BooleanField,
    SelectInput,
    BooleanInput,
    Show,
    SimpleForm,
    ReferenceField,
    DateField,
    Create,
    ReferenceInput,
    SimpleShowLayout,
    List,
    Edit,
    NumberField,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';
import EmptyField from '../fields/EmptyField';
import PermissionsStore from '../auth/PermissionsStore';

import SiteRoleEditToolbar from '../customActions/SiteRoleEditToolbar';
import SiteRoleListActions from '../customActions/SiteRoleListActions';

import SiteRoleFilter from '../filters/SiteRoleFilter';

import FieldSelectDatagrid from '../grids/FieldSelectDatagrid';

const validationCreateSiteRole = values => {
    const errors = {};
    if (!values.site_id) {
        errors.site_id = ['site_id is required'];
    }
    if (!values.role_id) {
        errors.role_id = ['role_id is required'];
    }
    return errors;
};

const validationEditSiteRole = values => {
    const errors = {};
    return errors;
};

export const SiteRoleList = props => (
    <List
        {...props}
        title="SiteRole List"
        filters={<SiteRoleFilter />}
        actions={<SiteRoleListActions />}
        bulkActionButtons={false}
    >
        <FieldSelectDatagrid>
            {PermissionsStore.getResourcePermission('sites', 'list') ? (
                <ReferenceField
                    label="Site"
                    source="site_id"
                    reference="sites"
                    sortable={false}
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
                    sortable={false}
                    linkType="show"
                    allowEmpty
                >
                    <NumberField source="label" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <BooleanField source="grant_implicitly" sortable={false} />
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
            {PermissionsStore.getResourcePermission('siteroles', 'edit') ? <EditButton /> : null}
            <ShowButton />
            {PermissionsStore.getResourcePermission('siteroles', 'remove') ? (
                <DeleteButton />
            ) : null}
        </FieldSelectDatagrid>
    </List>
);

export const SiteRoleCreate = props => (
    <Create {...props} title="SiteRole Create">
        <SimpleForm validate={validationCreateSiteRole} redirect="show">
            {PermissionsStore.getResourcePermission('sites', 'list') && (
                <ReferenceInput
                    label="Site"
                    source="site_id"
                    reference="sites"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="name" />
                </ReferenceInput>
            )}
            {PermissionsStore.getResourcePermission('roles', 'list') && (
                <ReferenceInput
                    label="Role"
                    source="role_id"
                    reference="roles"
                    perPage={0}
                    allowEmpty
                >
                    <SelectInput optionText="label" />
                </ReferenceInput>
            )}
            <BooleanInput source="grant_implicitly" />
        </SimpleForm>
    </Create>
);

export const SiteRoleShow = props => (
    <Show {...props} title="SiteRole Show">
        <SimpleShowLayout>
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
            <BooleanField source="grant_implicitly" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const SiteRoleEdit = props => (
    <Edit {...props} title="SiteRole Edit">
        <SimpleForm validate={validationEditSiteRole} toolbar={<SiteRoleEditToolbar />}>
            <BooleanInput source="grant_implicitly" />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
