/**
 * NOTE! This components is basically a carbon copy of `DatagridHeaderCell.js`
 * in Admin on Rest. The `DatagridHeaderCell.js` is not exported and
 * therefore not accessable.
 */

import React from 'react';
import PropTypes from 'prop-types';
import defaultsDeep from 'lodash.defaultsdeep';
import shouldUpdate from 'recompose/shouldUpdate';
import FlatButton from 'material-ui/FlatButton';
import ContentSort from 'material-ui/svg-icons/content/sort';
import { FieldTitle } from 'admin-on-rest';
import { Draggable } from 'react-beautiful-dnd';

import { styles } from '../../Theme';


export const DatagridHeaderCell = ({
    field,
    index,
    defaultStyle,
    currentSort,
    updateSort,
    resource
}) => {
    const style = defaultsDeep(
        {},
        field.props.headerStyle,
        field.type.defaultProps ? field.type.defaultProps.headerStyle : {},
        defaultStyle
    );
    return (
        <Draggable draggableId={`draggable-${index}`} index={index} type="TABLE">
            {(provided, snapshot) => {
                const thStyle = {
                    ...style,
                    ...provided.draggableProps.style
                }
                return (
                    <th
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={thStyle}
                        {...provided.dragHandleProps}
                    >
                        {field.props.sortable !== false && field.props.source ? (
                            <FlatButton
                                labelPosition="before"
                                onClick={updateSort}
                                data-sort={field.props.source}
                                label={
                                    <FieldTitle
                                        label={field.props.label}
                                        source={field.props.source}
                                        resource={resource}
                                    />
                                }
                                icon={
                                    field.props.source === currentSort.field ? (
                                        <ContentSort
                                            style={
                                                currentSort.order === 'ASC'
                                                    ? { transform: 'rotate(180deg)' }
                                                    : {}
                                            }
                                        />
                                    ) : (
                                        false
                                    )
                                }
                                style={styles.sortButton}
                            />
                        ) : (
                            <span style={styles.nonSortableLabel}>
                                {
                                    <FieldTitle
                                        label={field.props.label}
                                        source={field.props.source}
                                        resource={resource}
                                    />
                                }
                            </span>
                        )}
                    </th>
                );
            }}
        </Draggable>
    );
};

DatagridHeaderCell.propTypes = {
    field: PropTypes.element,
    defaultStyle: PropTypes.shape({
        th: PropTypes.object,
        'th:first-child': PropTypes.object,
        sortButton: PropTypes.object,
        nonSortableLabel: PropTypes.object
    }),
    currentSort: PropTypes.shape({
        sort: PropTypes.string,
        order: PropTypes.string
    }),
    isSorting: PropTypes.bool,
    sortable: PropTypes.bool,
    resource: PropTypes.string,
    updateSort: PropTypes.func.isRequired
};

export default shouldUpdate(
    (props, nextProps) =>
        props.isSorting !== nextProps.isSorting ||
        (nextProps.isSorting && props.currentSort.order !== nextProps.currentSort.order)
)(DatagridHeaderCell);
