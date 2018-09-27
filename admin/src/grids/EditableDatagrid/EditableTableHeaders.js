import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DatagridHeaderCell from './DatagridHeaderCell';

export const EditableTableHeaders = ({
    currentSort,
    updateSort,
    resource,
    children,
    styles
}) => (
    <TableHead>
        <TableRow>
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
    </TableHead>
);

EditableTableHeaders.muiName = 'TableHeader';

export default EditableTableHeaders;
