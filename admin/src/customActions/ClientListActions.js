/**
 * Generated ListActions.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { CardActions, RefreshButton } from 'react-admin';

const ClientListActions = ({
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
        <RefreshButton />
    </CardActions>
);

export default ClientListActions;

/** End of Generated Code **/
