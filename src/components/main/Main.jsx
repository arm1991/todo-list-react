import { useState } from "react";
import "./Main.css";
import SectionOne from "./section-one/SectionOne";
import SectionTwo from "./section-two/SectionTwo";

const Main = ({ hideDone }) => {
  const [store, setStore] = useState([]);

  const addItemToStore = (newItem) => {
    setStore([...store, newItem]);
  };

  const deleteTodo = (id) => {
    const filteredStore = store.filter((todo) => todo.id !== id);
    setStore(filteredStore);
  };

  const editTodo = (id, input) => {
    const updatedStore = store.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: !todo.isEditing, title: input };
      }
      return todo;
    });
    setStore(updatedStore);
  };

  const editingTodo = (id) => {
    const updatedStore = store.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: !todo.isEditing };
      }
      return todo;
    });
    setStore(updatedStore);
  };

  const markAsDoneTodo = (id) => {
    const updatedStore = store.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setStore(updatedStore);
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
