import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [newListItem, setNewListItem] = useState("");
  const [listArray, setListArray] = useState([]);

  function handleClick() {
    setListArray((prevValue) => {
      return [...prevValue, newListItem];
    });
    setNewListItem("");
  }

  function handleChange(event) {
    const inputValue = event.target.value;
    setNewListItem(inputValue);
  }

  function deleteItem(id) {
    setListArray((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={newListItem} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listArray.map((todoItem, index) => (
            <ToDoItem
              text={todoItem}
              key={index}
              index={index}
              wantsDeleted={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
