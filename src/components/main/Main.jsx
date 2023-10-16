import { useState } from "react";
import "./Main.css";
import SectionOne from "./section-one/SectionOne";
import SectionTwo from "./section-two/SectionTwo";

const Main = ({ hideDone }) => {
  const [store, setStore] = useState([]);

  const addItemToStore = (newItem) => {
    setStore((prev) => [...prev, newItem]);
  };

  const deleteTodo = (id) => {
    setStore((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, input) => { 
    setStore((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: !todo.isEditing, title: input };
        }
        return todo;
      });
    });
  };

  const editingTodo = (id) => {
    setStore((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: !todo.isEditing };
        }
        return todo;
      });
    });
  };

  const markAsDoneTodo = (id) => {
    setStore((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    });
  };

  return (
    <main>
      <SectionOne onAddItem={addItemToStore} />
      <SectionTwo
        hideDone={hideDone}
        store={store}
        deleteTodo={deleteTodo}
        editingTodo={editingTodo}
        editTodo={editTodo}
        markAsDoneTodo={markAsDoneTodo}
      />
    </main>
  );
};

export default Main;
