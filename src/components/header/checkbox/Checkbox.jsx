import "./Checkbox.css";

const Checkbox = ({ changeHideDone }) => {
  const checkboxChange = () => {
    changeHideDone();
  };
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className="todo-hide"
        name="checkbox"
        onChange={checkboxChange}
      />
      <label htmlFor="checkbox">Hide Complete ToDo</label>
    </div>
  );
};

export default Checkbox;
