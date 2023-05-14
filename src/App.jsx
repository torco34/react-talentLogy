import { Body } from "./ejercicio1/Body";
import { Ejerct2 } from "./ejercicio2/Ejerct2";
import { Ejercici3 } from "./ejercicio3/Ejercici3";

function App() {
  return (
    <>
      <header className="header">
        <h2>Ejercicio con React.js</h2>
      </header>
      <div className="">
        <Body />
      </div>
      <div>
        <Ejerct2 />
      </div>
      <Ejercici3 />
    </>
  );
}

export default App;
