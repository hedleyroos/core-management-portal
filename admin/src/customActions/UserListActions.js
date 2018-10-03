/**
 * Generated ListActions.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { CardActions, RefreshButton } from 'react-admin';

const UserListActions = ({
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

export default UserListActions;

/** End of Generated Code **/
