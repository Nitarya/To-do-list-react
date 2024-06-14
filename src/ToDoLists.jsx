import React from "react";

const ToDoLists = (props) => {
    return (
        <>
        <div className="todo_style">
            
        <li onClick={() => {
          props.removeHandler(props.text)
        }}> {props.text} </li>
        </div>
        
        </>
  )
}

export default ToDoLists;