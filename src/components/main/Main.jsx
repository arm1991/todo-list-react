// import store from "../../store";
import { useState } from "react";
import "./Main.css";
import SectionOne from "./section-one/SectionOne";
import SectionTwo from "./section-two/SectionTwo";

const Main = () => {
    const [store, setStore] = useState([]);
    const addItemToStore = (newItem) => {
        setStore([...store, newItem]);
    };
    return (
        <main>
            <SectionOne onAddItem={addItemToStore} />
            <SectionTwo store={store} />

        </main>
    );
}

export default Main;