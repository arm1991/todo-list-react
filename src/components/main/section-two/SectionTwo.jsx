// import { useState } from "react"
import "./SectionTwo.css"
import Todo from "./todo/Todo";


const SectionTwo = ({ store }) => {
    return (
        <section className="section-two">
            {store.map((todo) => (
                <Todo key={todo.id} title={todo.title} />
            ))}
        </section>
    );
}

export default SectionTwo;