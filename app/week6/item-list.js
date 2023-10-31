"use client"

import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => { 
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = items.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <h2 className="text-xl mb-4">Item List</h2>
      <button onClick={() => setSortBy('name')}>Sort by Name</button>
      <br/>
      <button onClick={() => setSortBy('category')}>Sort by Category</button>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;