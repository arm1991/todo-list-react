import "./Todo.css";
import deleteImg from "./assets/delete.svg";
import editImg from "./assets/edit.svg";
import markAsDoneImg from "./assets/mark-as-done.svg";
import { useState } from "react";

const Todo = ({ todo, deleteTodo, editingTodo, editTodo, markAsDoneTodo }) => {
  let [input, setInput] = useState(todo.title);

  const saveEvent = () => {
    editTodo(todo.id, input);
    setInput("");
  };

  const deleteItem = () => {
    deleteTodo(todo.id);
  };

  const markAsDoneItem = () => {
    markAsDoneTodo(todo.id);
  };

  const editItem = () => {
    editingTodo(todo.id);
  };

  return (
    <div key={todo.id.toString()} className="lists">
      {!todo.isEditing ? (
        <>
          <h4 className={todo.done ? "done" : ""}>{todo.title}</h4>
          <div className="images">
            <img src={deleteImg} onClick={deleteItem} alt="delete" />
            <img src={editImg} onClick={editItem} alt="edit" />
            <img
              src={markAsDoneImg}
              onClick={markAsDoneItem}
              alt="mark as done"
            />
          </div>
        </>
      ) : (
        <>
          <input
            className="editing-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="editing-save" onClick={saveEvent}>
            save
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
