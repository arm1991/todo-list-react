import "./Todo.css";
import deleteImg from "./assets/delete.svg"
import editImg from "./assets/edit.svg"
import markAsDoneImg from "./assets/mark-as-done.svg"

const Todo = ({ id, title }) => (
    (
        <div key={id} className="lists">
            <h4>{title}</h4>
            <div className="images">
                <img src={deleteImg} alt="delete" />
                <img src={editImg} alt="edit" />
                <img src={markAsDoneImg} alt="mark as done" />
            </div>
        </div>
    )
);

export default Todo;