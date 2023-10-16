import "./SectionTwo.css";
import Todo from "./todo/Todo";

const SectionTwo = ({
  hideDone,
  store,
  deleteTodo,
  editingTodo,
  editTodo,
  markAsDoneTodo,
}) => {
  return (
    <section className="section-two">
      {
      store.map((todo) => 
        !hideDone || !todo.done ? (
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            editingTodo={editingTodo}
            editTodo={editTodo}
            markAsDoneTodo={markAsDoneTodo}
          />
        ) : null
      )}
    </section>
  );
};

export default SectionTwo;
