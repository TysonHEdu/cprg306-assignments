import React from 'react';

const Item = ({name,quantity,category} ) => {
    return (
        <li className="border p-4 w-1/3 m-3">
            Name:{name}, Quantity: {quantity}, Category: {category}
        </li>
    )
}

export default Item;