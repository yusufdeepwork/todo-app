import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id, deleteItem } = props;
  const [isCompleted, setIsCompleted] = React.useState(false);

  return <div onClick={() => setIsCompleted(true)}><text style={{ textDecoration: isCompleted ? "line-through" : "" }}>{content}</text><button className="deleteButton" onClick={()=> deleteItem(id)}>Sil</button></div>;
}

export default Todo;
