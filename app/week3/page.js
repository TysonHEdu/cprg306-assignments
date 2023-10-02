import React from "react";
import ItemList from "./item-list";

const Page = () => {
    return (
        <main className="max-w-2x1 mx-auto p-4">
            <h1 className="text-3x1 mb-4">Shopping List</h1>
            <ItemList />
        </main>
    )
}

export default Page;