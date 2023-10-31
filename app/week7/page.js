"use client";

import React, { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.trim();
        setSelectedItemName(cleanedItemName);
    }

    return (
        <main className="max-w-2x1 mx-auto p-4">
            <div className="flex">
                <div className="w-1/2 pr-4">
                    <h1 className="text-3x1 mb-4">Shopping List</h1>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2 pl-4">
                    <h1 className="text-3x1 mb-4">Meal Ideas</h1>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    )
}

export default Page;