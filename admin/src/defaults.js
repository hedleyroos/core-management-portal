import React from 'react';
import { CreateButton, DeleteButton, EditButton, ListButton, RefreshButton } from 'admin-on-rest';
import { CardActions } from 'material-ui/Card';


const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right'
};

export const ListActions = ({ resource, filters, displayedFilters, filterValues, basePath, showFilter }) => (
    <CardActions style={cardActionStyle}>
        {filters && React.cloneElement(filters, { resource, showFilter, displayedFilters, filterValues, context: 'button' }) }
        <CreateButton basePath={basePath} />
        <RefreshButton />
    </CardActions>
);

export const ShowActions = ({ basePath, data }) => (
    <CardActions style={cardActionStyle}>
        <EditButton basePath={basePath} record={data} />
        <ListButton basePath={basePath} />
        <DeleteButton basePath={basePath} record={data} />
        <RefreshButton />
    </CardActions>
);
