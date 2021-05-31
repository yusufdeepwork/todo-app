import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id, deleteItem } = props;
  return <div>{content}<button className="deleteButton" onClick={()=> deleteItem(props.id)}>Sil</button></div>;
}

export default Todo;
