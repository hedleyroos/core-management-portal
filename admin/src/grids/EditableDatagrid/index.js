import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Table } from 'material-ui/Table';

import DatagridBody from './DatagridBody';
import { EditableTableHeaders } from './EditableTableHeaders';
import { muiTheme } from '../../Theme';

const defaultStyles = {
    table: {
        tableLayout: 'auto'
    },
    tbody: {
        height: 'inherit'
    },
    header: {
        th: {
            padding: 0
        },
        'th:first-child': {
            padding: '0 0 0 12px'
        }
    },
    cell: {
        td: {
            padding: '0 12px',
            whiteSpace: 'normal'
        },
        'td:first-child': {
            padding: '0 12px 0 16px',
            whiteSpace: 'normal'
        }
    }
};

class EditableDatagrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: this.props.children
        };
        this.updateSort = this.updateSort.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragUpdate = this.onDragUpdate.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    updateSort(event) {
        event.stopPropagation();
        this.props.setSort(event.currentTarget.dataset.sort);
    }

    onDragStart = () => {
        console.log('Drag Start');
    };

    onDragUpdate = () => {
        console.log('Drag Update');
    };

    onDragEnd = ({ destination, source }) => {
        if (!destination || !source || destination.index === source.index) return;
        let children = this.state.children;
        const newIndex =
            destination.index > children.length ? children.length - 1 : destination.index;
        let back = [],
            front = [];
        const direction = destination.index > source.index;
        children.map((value, index) => {
            if (index !== source.index) {
                if (value.props && value.props.source) {
                    if (direction ? index <= newIndex : index < newIndex) {
                        back.push(value);
                    } else if (direction ? index > newIndex : index >= newIndex) {
                        front.push(value);
                    }
                } else {
                    front.push(value);
                }
            }
            return null;
        });
        children = [...back, children[source.index], ...front];
        this.setState({
            children
        });
    };

    render() {
        const {
            resource,
            ids,
            data,
            currentSort,
            basePath,
            styles = defaultStyles,
            options,
            headerOptions,
            bodyOptions,
            rowOptions,
            rowStyle,
            isLoading
        } = this.props;
        return (
            <DragDropContext
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}
            >
                <Droppable droppableId="droppable-1" type="TABLE" direction="horizontal">
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <Table
                                style={options && options.fixedHeader ? null : styles.table}
                                fixedHeader={false}
                                {...options}
                            >
                                <EditableTableHeaders
                                    resource={resource}
                                    currentSort={currentSort}
                                    updateSort={this.updateSort}
                                    muiTheme={muiTheme}
                                    headerOptions={headerOptions}
                                    styles={styles}
                                >
                                    {this.state.children}
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
                                    options={bodyOptions}
                                    rowOptions={rowOptions}
                                >
                                    {this.state.children}
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
