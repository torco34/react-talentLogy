import { Body } from "./ejercicio1/Body";
import { Ejerct2 } from "./ejercicio2/Ejerct2";
import { Ejercici3 } from "./ejercicio3/Ejercici3";
import { Ejercicio4 } from "./ejercicio4/Ejercicio4";

function App() {
  return (
    <>
      <header className="header text-center p-3">
        <h2>Ejercicio con React.js</h2>
      </header>
      <div className="container">
        <Body />
      </div>
      <div className="container">
        <Ejerct2 />
      </div>
      <div className="container">
        <Ejercici3 />
      </div>
      <div className="">
        <Ejercicio4/>
      </div>
    </>
  );
}

export default App;
