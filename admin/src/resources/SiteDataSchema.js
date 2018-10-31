/**
 * Generated SiteDataSchema.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import {
    SelectInput,
    Show,
    LongTextInput,
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
import ObjectField from '../fields/ObjectField';
import PermissionsStore from '../auth/PermissionsStore';

import SiteDataSchemaEditToolbar from '../customActions/SiteDataSchemaEditToolbar';
import SiteDataSchemaListActions from '../customActions/SiteDataSchemaListActions';

import SiteDataSchemaFilter from '../filters/SiteDataSchemaFilter';

import UnlimitedDropdownInput from '../inputs/UnlimitedDropdownInput';
import FieldSelectDatagrid from '../grids/FieldSelectDatagrid';

const validationCreateSiteDataSchema = values => {
    const errors = {};
    if (!values.site_id) {
        errors.site_id = ['site_id is required'];
    }
    if (!values.schema) {
        errors.schema = ['schema is required'];
    }
    return errors;
};

const validationEditSiteDataSchema = values => {
    const errors = {};
    return errors;
};

export const SiteDataSchemaList = props => (
    <List
        {...props}
        title="SiteDataSchema List"
        filters={<SiteDataSchemaFilter />}
        actions={<SiteDataSchemaListActions />}
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
            <ObjectField source="schema" sortable={false} addLabel />
            <DateField source="created_at" sortable={false} />
            <DateField source="updated_at" sortable={false} />
            {PermissionsStore.getResourcePermission('sitedataschemas', 'edit') ? (
                <EditButton />
            ) : null}
            <ShowButton />
            {PermissionsStore.getResourcePermission('sitedataschemas', 'remove') ? (
                <DeleteButton />
            ) : null}
        </FieldSelectDatagrid>
    </List>
);

export const SiteDataSchemaCreate = props => (
    <Create {...props} title="SiteDataSchema Create">
        <SimpleForm validate={validationCreateSiteDataSchema} redirect="show">
            {PermissionsStore.getResourcePermission('sites', 'list') && (
                <UnlimitedDropdownInput
                    label="Site"
                    source="site_id"
                    reference="sites"
                    optionText="name"
                />
            )}
            <LongTextInput
                source="schema"
                format={value => (value instanceof Object ? JSON.stringify(value) : value)}
                parse={value => {
                    try {
                        return JSON.parse(value);
                    } catch (e) {
                        return value;
                    }
                }}
            />
        </SimpleForm>
    </Create>
);

export const SiteDataSchemaShow = props => (
    <Show {...props} title="SiteDataSchema Show">
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
            <ObjectField source="schema" addLabel />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const SiteDataSchemaEdit = props => (
    <Edit {...props} title="SiteDataSchema Edit">
        <SimpleForm validate={validationEditSiteDataSchema} toolbar={<SiteDataSchemaEditToolbar />}>
            <LongTextInput
                source="schema"
                format={value => (value instanceof Object ? JSON.stringify(value) : value)}
                parse={value => {
                    try {
                        return JSON.parse(value);
                    } catch (e) {
                        return value;
                    }
                }}
            />
        </SimpleForm>
    </Edit>
);

/** End of Generated Code **/
