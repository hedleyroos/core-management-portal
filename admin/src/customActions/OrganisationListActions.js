/**
 * Generated ListActions.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { CardActions, CreateButton, RefreshButton } from 'react-admin';

import PermissionsStore from '../auth/PermissionsStore';

const OrganisationListActions = ({
    basePath,
    displayedFilters,
    filters,
    filterValues,
    resource,
    showFilter
}) => (
    <CardActions>
        {filters &&
            React.cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button'
            })}
        {PermissionsStore.getResourcePermission('organisations', 'create') && (
            <CreateButton basePath={basePath} />
        )}
        <RefreshButton />
    </CardActions>
);

export default OrganisationListActions;

/** End of Generated Code **/
