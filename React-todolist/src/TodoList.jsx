import React, { useState } from "react";
import "./TodoList.css";

function Todo(props) {
  return (
    <li>
      <button
        className="remove-btn"
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        x
      </button>
      <span> {props.todo} </span>
    </li>
  );
}

function TodoList() {
  const [inputList, setInputList] = useState("");
  const [items, setitems] = useState([]);

  const inputEvent = (e) => {
    let val = e.target.value;
    setInputList(val);
  };

  const listOfItems = () => {
    // console.log(myTodoList);
    setitems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    // console.log("DELETED");
    setitems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container-div">
      <div className="center-div">
        <h1>Shopping List</h1>
        <div className="add-item">
          <input
            type="text"
            placeholder="Add a item"
            onChange={inputEvent}
            value={inputList}
          />
          <button className="Add-btn" onClick={listOfItems}>
            +
          </button>
        </div>
        <ol>
          {items.map((todo, index) => {
            return (
              <Todo key={index} id={index} todo={todo} onSelect={deleteItems} />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default TodoList;
