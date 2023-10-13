import { useState } from "react";
import "./Main.css";
import SectionOne from "./section-one/SectionOne";
import SectionTwo from "./section-two/SectionTwo";

const Main = () => {
  const [store, setStore] = useState([]);
  const addItemToStore = (newItem) => {
    setStore([...store, newItem]);
  };

  const deleteTodo = (id) => {
    const filteredStore = store.filter((todo) => todo.id !== id);
    setStore(filteredStore);
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
        store={store}
        deleteTodo={deleteTodo}
        markAsDoneTodo={markAsDoneTodo}
      />
    </main>
  );
};

export default Main;
