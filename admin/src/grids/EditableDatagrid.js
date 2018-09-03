import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { FieldTitle } from 'admin-on-rest';
import { Table, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

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
    },
    nonSortableLabel: {
        position: 'relative',
        paddingLeft: 16,
        paddingRight: 16,
        verticalAlign: 'middle',
        letterSpacing: 0,
        textTransform: 'uppercase',
        fontWeight: 500,
        fontSize: 14
    }
};

const HeaderThing = props => {
	const { expected, ...other } = props;
	console.log(props);
    console.log(other);
    return <th>yo2</th>;
};

class EditableDatagrid extends Component {
    constructor(props) {
        super(props);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragUpdate = this.onDragUpdate.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragStart = () => {
        console.log('Drag Start');
    };

    onDragUpdate = () => {
        console.log('Drag Update');
    };

    onDragEnd = () => {
        console.log('Drag End');
    };

    render() {
        const {
            resource,
            children,
            ids,
            data,
            currentSort,
            basePath,
            styles = defaultStyles,
            muiTheme,
            options,
            headerOptions
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
                            <Table fixedHeader={false} {...options}>
                                <TableHeader
                                    displaySelectAll={false}
                                    adjustForCheckbox={false}
                                    {...headerOptions}
                                >
                                    <TableRow>
                                        {React.Children.map(
                                            children,
                                            (field, index) =>
                                                field ? (
                                                    <Draggable
                                                        draggableId={`draggable-${index}`}
                                                        index={index}
                                                        type="TABLE"
                                                    >
                                                        {(provided, snapshot) => (
                                                            <HeaderThing
                                                                expected="Yo there"
                                                                ref={provided.innerRef}
                                                            />
                                                            // <TableHeaderColumn
                                                            //     ref={provided.innerRef}
                                                            //     {...provided.draggableProps}
                                                            //     {...provided.dragHandleProps}
                                                            // >
                                                            //     <span
                                                            //         ref={provided.innerRef}
                                                            //         {...provided.draggableProps}
                                                            //         {...provided.dragHandleProps}
                                                            //         style={styles.nonSortableLabel}
                                                            //     >
                                                            //         <FieldTitle
                                                            //             label={field.props.label}
                                                            //             source={field.props.source}
                                                            //             resource={resource}
                                                            //         />
                                                            //     </span>
                                                            // </TableHeaderColumn>
                                                        )}
                                                    </Draggable>
                                                ) : null
                                        )}
                                        {provided.placeholder}
                                    </TableRow>
                                </TableHeader>
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
