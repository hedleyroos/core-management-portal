/**
 * NOTE! This components is basically a carbon copy of `DatagridCell.js`
 * in Admin on Rest. The `DatagridCell.js` is not exported and
 * therefore not accessable.
 */

import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';

const DatagridCell = ({
    className,
    field,
    record,
    basePath,
    resource,
    style,
    defaultStyle,
    ...rest
}) => {
    return (
        <TableCell className={className} {...rest}>
            {React.cloneElement(field, { record, basePath, resource })}
        </TableCell>
    );
};

DatagridCell.propTypes = {
    field: PropTypes.element,
    record: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    basePath: PropTypes.string,
    resource: PropTypes.string,
    style: PropTypes.object,
    defaultStyle: PropTypes.shape({
        td: PropTypes.object,
        'td:first-child': PropTypes.object,
    }),
};

DatagridCell.muiName = 'TableCell';

export default DatagridCell;