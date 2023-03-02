import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSubmitChange(e) {
    e.preventDefault()
    
    const newArrayData = [...items, newItem];
    setItems(newArrayData)
  }
  const itemsToDisplay = items
    .filter((item) => {
      return item.name.includes(search) //item.name.toLowerCase.includes(search.toLowerCase())
    })
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addNewItem} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
