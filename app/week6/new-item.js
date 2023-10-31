"use client";

import React, { useState } from 'react';

export default function NewItem ({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce"); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    const inputStyle = {
        backgroundColor: "grey"
    };

    return (
        <div>
            <label>New Item</label>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        style={inputStyle}
                    />
                </label>
                <br />
                <label>
                    Quantity:
                    <input
                        type="number"
                        min="1"
                        max="99"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                        required
                        style={inputStyle}
                    />
                </label>
                <br />
                <label>
                    Category:
                    <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        style={inputStyle}
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
