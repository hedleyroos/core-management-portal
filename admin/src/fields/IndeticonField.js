import React from 'react';
import Blockie from 'react-blockies';

const IdenticonField = ({ source, record = {}, size = 10 }) => {
    const value = record[source];
    return (
        <span title={value}>
            <Blockie
                seed={value}
                size={size}
                color="#009688"
                bgColor="#f5f5f5"
                spotColor="#f5f5f5"
            />
        </span>
    );
};

export default IdenticonField;
