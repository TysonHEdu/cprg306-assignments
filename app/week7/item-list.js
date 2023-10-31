"use client"

import React, { useState } from 'react';
import Item from './item';  

export default function ItemList({ items, onItemSelect }) {
  // create a copy of the items prop
  const itemsCopy = [...items];

  // map JSON data to an array
  let itemsArray = itemsCopy.map((items) => ({ items }));

  // set up states for sorting
  let [sortBy, setSortBy] = useState('name');

  //Sort function
  itemsArray = itemsArray.sort((a, b) => {
    if (isNaN(parseInt(a[sortBy]))) {
      // sort alphabetically
      let nameA = a[sortBy].toUpperCase();
      let nameB = b[sortBy].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1
      }
      return 0;
    }  else {
       return a[sortBy] - b[sortBy]; 
      }
    }
  );

  return (
    <div>
      
      <h2 className="text-4xl text-center p-5"> Shopping List</h2>

      <div className="flex pl-10 pt-5 pb-5 pr-10 bg-gray-800">

        <div className="flex-1">
          <label>Sort by: </label>
          <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="quantity">Quantity</option>
          <option value="category">Category</option>  
          </select>
        </div>

      </div>

      <section className="grid grid-cols-3 gap-5 p-5">
        {itemsArray.map((item) => (
          <Item items={item} onSelect={onItemSelect} />
        ))}
      </section>

    </div>
  )
}
