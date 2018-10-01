import classnames from 'classnames';
import React, { Component } from 'react';
import { sanitizeListRestProps } from 'react-admin';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';
import DatagridBody from 'ra-ui-materialui/lib/list/DatagridBody';

import { EditableTableHeaders } from './EditableTableHeaders';
import { datagridStyles } from '../../theme';

class EditableDatagrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: !props.onDragEnd ? props.children : null
        };
        this.updateSort = this.updateSort.bind(this);
        this.handleSelectAll = this.handleSelectAll.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    updateSort(event) {
        event.stopPropagation();
        this.props.setSort(event.currentTarget.dataset.sort);
    }

    handleSelectAll(event) {
        const { onSelect, ids, selectedIds } = this.props;
        if (event.target.checked) {
            onSelect(
                ids.reduce(
                    (idList, id) => (idList.includes(id) ? idList : idList.concat(id)),
                    selectedIds
                )
            );
        } else {
            onSelect([]);
        }
    }

    onDragEnd = ({ destination, source }) => {
        if (!destination || !source || destination.index === source.index) return;
        if (this.props.onDragEnd) {
            this.props.onDragEnd({ destination, source });
        } else {
            let children = Array.from(this.state.children);
            const [removed] = children.splice(source.index, 1);
            children.splice(destination.index, 0, removed);
            this.setState({
                children
            });
        }
    };

    render() {
        const {
            basePath,
            data,
            children,
            classes,
            className,
            currentSort,
            hasBulkActions,
            hover,
            ids,
            isLoading,
            resource,
            rowStyle,
            selectedIds,
            setSort,
            onSelect,
            onToggleItem,
            total,
            version,
            managedChildren,
            ...rest
        } = this.props;

        if (!isLoading && (ids.length === 0 || total === 0)) {
            return null;
        }

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable-1" type="TABLE" direction="horizontal">
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <Table
                                className={classnames(classes.table, className)}
                                {...sanitizeListRestProps(rest)}
                            >
                                <EditableTableHeaders
                                    classes={classes}
                                    currentSort={currentSort}
                                    handleSelectAll={this.handleSelectAll}
                                    hasBulkActions={hasBulkActions}
                                    ids={ids}
                                    resource={resource}
                                    selectedIds={selectedIds}
                                    updateSort={this.updateSort}
                                >
                                    {this.state.children || managedChildren}
                                    {provided.placeholder}
                                </EditableTableHeaders>
                                <DatagridBody
                                    basePath={basePath}
                                    classes={classes}
                                    data={data}
                                    hasBulkActions={hasBulkActions}
                                    hover={hover}
                                    ids={ids}
                                    isLoading={isLoading}
                                    onToggleItem={onToggleItem}
                                    resource={resource}
                                    rowStyle={rowStyle}
                                    selectedIds={selectedIds}
                                    version={version}
                                >
                                    {this.state.children || managedChildren}
                                </DatagridBody>
                            </Table>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}
EditableDatagrid.defaultProps = {
    data: {},
    ids: []
};

export default withStyles(datagridStyles)(EditableDatagrid);
