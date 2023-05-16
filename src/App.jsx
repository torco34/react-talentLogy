import { Body } from "./ejercicio1/Body";
import { Ejercicio10 } from "./ejercicio10/Ejercicio10";
import { Ejercicio11 } from "./ejercicio11/Ejercicio11";
import { Card } from "./ejercicio12/Card";
import { Ejerct2 } from "./ejercicio2/Ejerct2";
import { Ejercici3 } from "./ejercicio3/Ejercici3";
import { Ejercicio4 } from "./ejercicio4/Ejercicio4";
import { Ejercicio5 } from "./ejercicio5/Ejercicio5";
import { Ejercicio6 } from "./ejercicio6/Ejercicio6";
import { Ejercicio7 } from "./ejercicio7/Ejercicio7";
import { Ejercicio8 } from "./ejercicio8/Ejercicio8";
import { Ejercicio9 } from "./ejercicio9/Ejercicio9";

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
      <div className="container border">
        <Ejercicio4 />
      </div>
      <div className="container border">
        <Ejercicio5 />
      </div>
      <div className="container border">
        <Ejercicio6 />
      </div>
      <div className="container border pt-4">
        <p>
          Crear un componente que reciba como propiedad una fecha y muestre la
          cantidad de días que faltan para esa fecha.
        </p>
        <Ejercicio7 />
      </div>

      <div className="container border pt-4">
        <p>
          Crear un componente que reciba como propiedad un número y muestre un
          contador que se incrementa en uno cada segundo.
        </p>
        <Ejercicio8 />
      </div>
      <div className="container border pt-4">
        <p>
          Crear un componente que reciba como propiedad una lista de nombres y
          muestre un input para filtrar los nombres por letras.
        </p>
        <Ejercicio9 />
      </div>

      <div className="container border pt-4">
        <h2>Ejercicio 10</h2>
        <p>
          Crear un componente que reciba como propiedad una lista de imágenes y
          muestre un carrusel para navegar entre ellas.
        </p>
        <Ejercicio10 />
      </div>
      <div className="container border pt-4">
        <h2>Ejercicio 11</h2>
        <p>
          Crear un componente que reciba como propiedad un arreglo de objetos
          con información de usuarios y muestre una lista con sus nombres y
          correos electrónicos. Al hacer clic en un usuario de la lista, debe
          mostrarse su información detallada en una sección aparte.
        </p>
        <Ejercicio11 />
      </div>
      <div className="container border pt-4">
        <h2>Ejercicio 12</h2>
        <p>
          Crear un componente que reciba como propiedad un arreglo de objetos
          con información de usuarios y muestre una lista con sus nombres y
          correos electrónicos. Al hacer clic en un usuario de la lista, debe
          mostrarse su información detallada en una sección aparte.
        </p>
        <Card />
      </div>
    </>
  );
}

export default App;
