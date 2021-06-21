import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <li
        onClick={handleClick}
        style={{ textDecoration: isClicked ? "line-through" : "none" }}
      >
        {props.text}
      </li>
      <button
        className="delete-button"
        onClick={() => {
          props.wantsDeleted(props.id);
        }}
      >
        <span>Delete</span>
      </button>
    </div>
  );
}

export default ToDoItem;
