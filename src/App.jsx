import { Ejercicio10 } from "./ejercicio10/Ejercicio10";
import { Ejercicio11 } from "./ejercicio11/Ejercicio11";
import { Card } from "./ejercicio12/Card";
import { Ejercicio13 } from "./ejercicio13/Ejercicio13";
import { Ejercicio14 } from "./ejercicio14/Ejercicio14";
import { Ejercicio15 } from "./ejercicio15/Ejercicio15";
// import { Ejerct2 } from "./ejercicio2/Ejercicio2";
import { Ejercici3 } from "./ejercicio3/Ejercici3";
import { Ejercicio4 } from "./ejercicio4/Ejercicio4";
import { Ejercicio5 } from "./ejercicio5/Ejercicio5";
import { Ejercicio6 } from "./ejercicio6/Ejercicio6";
import { Ejercicio7 } from "./ejercicio7/Ejercicio7";
import { Ejercicio8 } from "./ejercicio8/Ejercicio8";
import { Ejercicio9 } from "./ejercicio9/Ejercicio9";
import { Ejercicio16 } from "./ejercicio16/Ejercicio16";
import { Ejercicio17 } from "./ejercicio17/Ejercicio17";
import { Galeria } from "./ejercicio18/Galeria";
import { Index } from "./pages/Index";

function App() {
  return (
    <>
      <header className="header  p-3">
        <h2>Ejercicio con React.js</h2>
      </header>

      <div className="container border">
        <Index />
      </div>
      <div className="container">{/* <Ejerct2 /> */}</div>
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
      <div className="container border pt-4">
        <h2>Ejercicio 13</h2>
        <p>
          Crear un componente que reciba como propiedad un arreglo de objetos
          con información de usuarios y muestre una lista con sus nombres y
          correos electrónicos. Al hacer clic en un usuario de la lista, debe
          mostrarse su información detallada en una sección aparte.
        </p>
        <Ejercicio13 />
      </div>
      <div className="container border pt-4">
        <h2>Ejercicio 14</h2>
        <p>
          User Crear un componente que muestre una lista de países y al
          seleccionar uno de ellos, muestre información detallada sobre su
          cultura, historia, idioma y lugares turísticos.
        </p>
        <Ejercicio14 />
      </div>
      <div className="container border pt-4">
        <h2>Ejercicio 15</h2>
        <p>
          User Crear un componente que muestre una lista de países y al
          seleccionar uno de ellos, muestre información detallada sobre su
          cultura, historia, idioma y lugares turísticos.
        </p>
        <Ejercicio15 />
      </div>

      <div className="container border pt-4">
        <h2>Ejercicio 16</h2>
        <p>
          User Crear un componente que muestre una lista de países y al
          seleccionar uno de ellos, muestre información detallada sobre su
          cultura, historia, idioma y lugares turísticos.
        </p>
        <Ejercicio16 />
      </div>
      <div className="container border pt-4">
        <h2>Ejercicio 16</h2>
        <p></p>
        <Ejercicio17 />
      </div>

      <div className="container border pt-4">
        <h2>Ejercicio 18</h2>
        <p>
          Crear un componente que muestre una lista de fotos y permita
          seleccionar y eliminar fotos de la lista.
        </p>
        <Galeria />
      </div>
    </>
  );
}

export default App;
