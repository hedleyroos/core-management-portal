import React from 'react';
import { TableHeader, TableRow } from 'material-ui/Table';

import DatagridHeaderCell from './DatagridHeaderCell';

export const EditableTableHeaders = ({
    currentSort,
    updateSort,
    resource,
    children,
    headerOptions,
    muiTheme,
    styles
}) => (
    <TableHeader displaySelectAll={false} adjustForCheckbox={false} {...headerOptions}>
        <TableRow style={muiTheme.tableRow}>
            {React.Children.map(
                children,
                (field, index) =>
                    field ? (
                        <DatagridHeaderCell
                            key={field.props.source || index}
                            index={index}
                            field={field}
                            defaultStyle={
                                index === 0 ? styles.header['th:first-child'] : styles.header.th
                            }
                            currentSort={currentSort}
                            isSorting={field.props.source === currentSort.field}
                            updateSort={updateSort}
                            resource={resource}
                        />
                    ) : null
            )}
        </TableRow>
    </TableHeader>
);

EditableTableHeaders.muiName = 'TableHeader';

export default EditableTableHeaders;
