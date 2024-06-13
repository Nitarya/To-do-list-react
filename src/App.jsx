import React from "react";
import { useState } from "react";
import ToDoLists from "./ToDoLists";
import "./App.css";

function App() {
  const [inputList, setInputList] = useState("buy apple");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li> {inputList} </li> */}
            {Items.map((itemVal) => {
            return <ToDoLists text={itemVal} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
