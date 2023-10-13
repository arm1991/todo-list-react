import "./Header.css";
import Checkbox from "./checkbox/Checkbox";
import Title from "./title/Title";

const Header = ({ changeHideDone }) => {
  return (
    <header>
      <Checkbox changeHideDone={changeHideDone} />
      <Title />
    </header>
  );
};

export default Header;
