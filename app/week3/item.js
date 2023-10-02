import React from 'react';

const Item = ({name,quantity,category} ) => {
    return (
        <li className="border p-4 w-1/3 m-3">
            <strong>Name:</strong> {name}, <strong>Quantity:</strong> {quantity}, <strong>Category:</strong> {category}
        </li>
    )
}

export default Item;