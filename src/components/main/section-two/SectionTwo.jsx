import "./SectionTwo.css";
import Todo from "./todo/Todo";

const SectionTwo = ({ store, deleteTodo, markAsDoneTodo }) => {
  return (
    <section className="section-two">
      {store.map((todo) => (
        <Todo todo={todo} deleteTodo={deleteTodo} markAsDoneTodo={markAsDoneTodo} />
      ))}
    </section>
  );
};

export default SectionTwo;
