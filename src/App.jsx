import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const changeHideDone = () => {
    setHideDone(!hideDone);
  };
  return (
    <>
      <Header changeHideDone={changeHideDone} />
      <Main hideDone={hideDone} />
    </>
  );
}

export default App;
