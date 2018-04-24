import React, { Component } from 'react';
import restClient, { GET_MANY_REFERENCE } from '../swaggerRestServer';

class RelatedAggregateManyByField extends Component {
    constructor(props) {
        super(props);
        this.state = { sort: props.sort, data: {}, ids: [] };
    }

    componentWillMount() {
        this.getRelatedData();
    }

    getRelatedData = () => {
        const { record, target, reference, by, showNotification } = this.props;
        restClient(GET_MANY_REFERENCE, 'users', {})
            .then(response => {
                const state = {
                    data:
                        response.data.length > 0
                            ? response.data.reduce((mapping, current) => {
                                  mapping[current.id] = current;
                                  return mapping;
                              }, {})
                            : {},
                    ids: response.data.map(res => res.id)
                };
                this.setState(state);
            })
            .catch(e => {
                console.error(e);
                showNotification('Error: Related Aggregate Call Failed!');
            });
    };

    render() {
        const {
            resource,
            reference,
            children,
            basePath,
            isLoading
        } = this.props;
        if (React.Children.count(children) !== 1) {
            throw new Error(
                '<RelatedAggregateManyByField> only accepts a single child component.'
            );
        }
        return React.cloneElement(children, {
            resource: reference,
            ids: this.state.ids,
            data: this.state.data,
            currentSort: this.state.sort
        });
    }
}

RelatedAggregateManyByField.defaultProps = {
    sort: { field: 'id', order: 'DESC' }
};

export default RelatedAggregateManyByField;
