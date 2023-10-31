"use client";

import React, { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return (
        <main className="max-w-2x1 mx-auto p-4">
            <h1 className="text-3x1 mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    )
}

export default Page;