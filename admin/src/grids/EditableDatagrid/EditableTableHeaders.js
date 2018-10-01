import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DatagridHeaderCell from './DatagridHeaderCell';

export const EditableTableHeaders = ({
    children,
    classes,
    currentSort,
    handleSelectAll,
    hasBulkActions,
    ids,
    resource,
    selectedIds,
    updateSort
}) => (
    <TableHead>
        <TableRow className={classes.row}>
            {hasBulkActions && (
                <TableCell padding="none">
                    <Checkbox
                        checked={
                            selectedIds.length > 0 &&
                            ids.length > 0 &&
                            !ids.find(it => selectedIds.indexOf(it) === -1)
                        }
                        className="select-all"
                        color="primary"
                        onChange={handleSelectAll}
                    />
                </TableCell>
            )}
            {React.Children.map(
                children,
                (field, index) =>
                    field ? (
                        <DatagridHeaderCell
                            className={classes.headerCell}
                            currentSort={currentSort}
                            field={field}
                            index={index}
                            isSorting={field.props.source === currentSort.field}
                            key={field.props.source || index}
                            resource={resource}
                            updateSort={updateSort}
                        />
                    ) : null
            )}
        </TableRow>
    </TableHead>
);

EditableTableHeaders.muiName = 'TableHead';

export default EditableTableHeaders;
