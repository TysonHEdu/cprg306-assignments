import React from 'react';
import items from './items.json';

const Item = ({name, quantity, category, onSelect}) => {
    return (
        <li className="border p-4 w-1/3 m-3" onClick={onSelect}>
            Name: {name}, Quantity: {quantity}, Category: {category}
        </li>
    )
}

export default Item;