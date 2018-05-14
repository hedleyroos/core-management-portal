import React from 'react';
import { Datagrid } from 'admin-on-rest';

const FieldSelectDatagrid = props => {
    return <div><span>test</span><Datagrid {...props}>{props.children}</Datagrid></div>;
};

export default FieldSelectDatagrid;
