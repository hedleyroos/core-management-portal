const limitUpdateFields = requestHandler => (type, resource, params) => {
    if (type === 'UPDATE') {
        if (resource === 'domains') {
            delete params.data.id
            delete params.data.parent_id
            delete params.data.created_at
            delete params.data.updated_at
        }
    }

    return requestHandler(type, resource, params);
};

export default limitUpdateFields;
