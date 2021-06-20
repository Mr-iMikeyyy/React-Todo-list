import React, { useState } from "react";

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
          {listArray.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
