import "./Checkbox.css";

const Checkbox = () => {
    return (
        <div className="checkbox-container">
            <input type="checkbox" className="todo-hide" name="checkbox"/>
            <label htmlFor="checkbox">Hide Complete ToDo</label>
        </div>
    );
}

export default Checkbox;