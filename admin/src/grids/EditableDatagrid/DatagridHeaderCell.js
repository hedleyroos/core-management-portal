/**
 * NOTE! This components is basically a carbon copy of `DatagridHeaderCell.js`
 * in React Admin wrapped in the Draggable component. The `DatagridHeaderCell.js` is not exported and
 * therefore not accessable.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shouldUpdate from 'recompose/shouldUpdate';
import compose from 'recompose/compose';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { FieldTitle, translate } from 'react-admin';
import { Draggable } from 'react-beautiful-dnd';

import { datagridStyles } from '../../theme';

let combinedStyles = datagridStyles;

export const DatagridHeaderCell = ({
    classes,
    className,
    field,
    index,
    currentSort,
    updateSort,
    resource,
    isSorting,
    translate,
    ...rest
}) => (
    <Draggable draggableId={`draggable-${index}`} index={index} type="TABLE">
        {(provided, snapshot) => {
            combinedStyles = {
                ...combinedStyles,
                ...provided.draggableProps.style
            };
            return (
                <th
                    className={classnames(className, field.props.headerClassName)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    {...rest}
                >
                    {field.props.sortable !== false &&
                    (field.props.sortBy || field.props.source) ? (
                        <Tooltip
                            title={translate('ra.action.sort')}
                            placement={
                                field.props.textAlign === 'right' ? 'bottom-end' : 'bottom-start'
                            }
                            enterDelay={300}
                        >
                            <TableSortLabel
                                active={
                                    currentSort.field === (field.props.sortBy || field.props.source)
                                }
                                direction={currentSort.order === 'ASC' ? 'asc' : 'desc'}
                                data-sort={field.props.sortBy || field.props.source}
                                onClick={updateSort}
                            >
                                <FieldTitle
                                    label={field.props.label}
                                    source={field.props.source}
                                    resource={resource}
                                />
                            </TableSortLabel>
                        </Tooltip>
                    ) : (
                        <FieldTitle
                            label={field.props.label}
                            source={field.props.source}
                            resource={resource}
                        />
                    )}
                </th>
            );
        }}
    </Draggable>
);

DatagridHeaderCell.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    field: PropTypes.element,
    currentSort: PropTypes.shape({
        sort: PropTypes.string,
        order: PropTypes.string
    }).isRequired,
    isSorting: PropTypes.bool,
    sortable: PropTypes.bool,
    resource: PropTypes.string,
    translate: PropTypes.func.isRequired,
    updateSort: PropTypes.func.isRequired
};

const enhance = compose(
    shouldUpdate(
        (props, nextProps) =>
            props.index !== nextProps.index ||
            props.isSorting !== nextProps.isSorting ||
            (nextProps.isSorting && props.currentSort.order !== nextProps.currentSort.order)
    ),
    translate,
    withStyles(combinedStyles)
);

export default enhance(DatagridHeaderCell);
