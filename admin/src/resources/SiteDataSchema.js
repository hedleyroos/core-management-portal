/**
 * Generated SiteDataSchema.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import {
    List,
    Datagrid,
    ReferenceField,
    NumberField,
    DateField,
    SimpleForm,
    Create,
    ReferenceInput,
    SelectInput,
    LongTextInput,
    Show,
    SimpleShowLayout,
    Edit,
    DeleteButton,
    EditButton,
    ShowButton
} from 'admin-on-rest';
import PermissionsStore from '../auth/PermissionsStore';
import EmptyField from '../fields/EmptyField';
import ObjectField from '../fields/ObjectField';
import SiteDataSchemaFilter from '../filters/SiteDataSchemaFilter';

const validationCreateSiteDataSchema = values => {
    const errors = {};
    if (!values.site_id) {
        errors.site_id = ["site_id is required"];
    }
    if (!values.schema) {
        errors.schema = ["schema is required"];
    }
    return errors;
}

const validationEditSiteDataSchema = values => {
    const errors = {};
    return errors;
}

export const SiteDataSchemaList = props => (
    <List {...props} title="SiteDataSchema List" filters={<SiteDataSchemaFilter />}>
        <Datagrid bodyOptions={ { showRowHover: true } }>
            {PermissionsStore.getResourcePermission('sites', 'list') ? (
                <ReferenceField label="Site" source="site_id" reference="sites" linkType="show" allowEmpty>
                    <NumberField source="name" />
                </ReferenceField>
            ) : (
                <EmptyField />
            )}
            <ObjectField source="schema" addLabel />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            {PermissionsStore.getResourcePermission('sitedataschemas', 'edit') ? <EditButton /> : null}
            <ShowButton />
            {PermissionsStore.getResourcePermission('sitedataschemas', 'remove') ? <DeleteButton />: null}
        </Datagrid>
    </List>
)

export const SiteDataSchemaCreate = props => (
    <Create {...props} title="SiteDataSchema Create">
        <SimpleForm validate={validationCreateSiteDataSchema}>
            <ReferenceInput label="Site" source="site_id" reference="sites" perPage={0} allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <LongTextInput source="schema" format={value => value instanceof Object ? JSON.stringify(value) : value} parse={value => { try { return JSON.parse(value); } catch (e) { return value; } }} />
        </SimpleForm>
    </Create>
)

export const SiteDataSchemaShow = props => (
    <Show {...props} title="SiteDataSchema Show">
        <SimpleShowLayout>
            {PermissionsStore.getResourcePermission('sites', 'list') ? (
                <ReferenceField label="Site" source="site_id" reference="sites" linkType="show" allowEmpty>
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
)

export const SiteDataSchemaEdit = props => (
    <Edit {...props} title="SiteDataSchema Edit">
        <SimpleForm validate={validationEditSiteDataSchema}>
            <LongTextInput source="schema" format={value => value instanceof Object ? JSON.stringify(value) : value} parse={value => { try { return JSON.parse(value); } catch (e) { return value; } }} />
        </SimpleForm>
    </Edit>
)

/** End of Generated Code **/