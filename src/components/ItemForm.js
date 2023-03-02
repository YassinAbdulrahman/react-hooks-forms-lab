import { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce");
  const [newItem , setNewItem] = useState({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory
  });
   
    function onChangeHandel(e) {
      setItemCategory(e.target.value)
      setNewItem({...newItem,category:e.target.value})
    }
  
    function handleinput(e) {
      setItemName(e.target.value)
      setNewItem({...newItem,name:e.target.value})
    }
  function handleSubmitChange(e){
    e.preventDefault()
    onItemFormSubmit({...newItem, id:uuid()})
  }
  return (
    <form className="NewItem" onSubmit={handleSubmitChange}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleinput} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={onChangeHandel}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
