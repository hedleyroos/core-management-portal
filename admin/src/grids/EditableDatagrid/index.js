import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Table from '@material-ui/core/Table';

import DatagridBody from './DatagridBody';
import { EditableTableHeaders } from './EditableTableHeaders';
import { styles } from '../../theme';

class EditableDatagrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: !props.onDragEnd ? props.children : null
        };
        this.updateSort = this.updateSort.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    updateSort(event) {
        event.stopPropagation();
        this.props.setSort(event.currentTarget.dataset.sort);
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
            resource,
            ids,
            data,
            currentSort,
            basePath,
            headerOptions,
            rowOptions,
            rowStyle,
            isLoading,
            managedChildren
        } = this.props;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable-1" type="TABLE" direction="horizontal">
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <Table>
                                <EditableTableHeaders
                                    resource={resource}
                                    currentSort={currentSort}
                                    updateSort={this.updateSort}
                                    headerOptions={headerOptions}
                                    styles={styles}
                                >
                                    {this.state.children || managedChildren}
                                    {provided.placeholder}
                                </EditableTableHeaders>
                                <DatagridBody
                                    resource={resource}
                                    ids={ids}
                                    data={data}
                                    basePath={basePath}
                                    styles={styles}
                                    rowStyle={rowStyle}
                                    isLoading={isLoading}
                                    rowOptions={rowOptions}
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

export default EditableDatagrid;
