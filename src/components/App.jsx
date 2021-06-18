import React, { useState } from "react";

function App() {
  const [newListItem, setNewListItem] = useState("");
  const [listArray, setListArray] = useState([]);
  const [listHtml, setListHtml] = useState("");

  function populateList() {
    for (var i = 0; i <= listArray.length; i++) {
      if (listArray[i] !== undefined && listArray[i] !== null) {
        const newHtml = "<li>" + listArray[i] + "</li>";

        console.log("BEFORE populate::::::::::::::::::::", newHtml);
        setListHtml((prevValue) => {
          return prevValue + newHtml;
        });
        console.log("AFTER populate::::::::::::::::::::", listHtml);
      }
    }
  }

  function handleClick() {
    const newValue = newListItem;
    setListArray((prevValue) => {
      return [...prevValue, newValue];
    });
    setNewListItem("");
    populateList();
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
        <ul>{listHtml}</ul>
      </div>
    </div>
  );
}

export default App;
