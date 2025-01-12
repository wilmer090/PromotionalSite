import React from 'react';

const ListComponent = ({data, renderItem}) => {
    return <>{data.map((item, index) => renderItem(item, index))}</>;
}

export default ListComponent;