const limitUpdateFields = requestHandler => (type, resource, params) => {
    if (type === 'UPDATE') {
        if (resource === 'domains') {
            delete params.data.id;
            delete params.data.parent_id;
            delete params.data.created_at;
            delete params.data.updated_at;
        }
        if (resource === 'roles') {
            delete params.data.id;
            delete params.data.created_at;
            delete params.data.updated_at;
        }
        if (resource === 'sites') {
            delete params.data.id;
        }
        if (resource === 'siteroles') {
            params.id = '2/1';
        }
    }

    if (type === 'GET_ONE') {
        if (resource === 'siteroles') {
            console.log(resource)
            params.id = '2/1';
        }
    }

    return requestHandler(type, resource, params);
};

export default limitUpdateFields;
