import { useState } from "react";
import Products from "./Products";
import { Carrito } from "./Carrito";

export const Card = () => {
  const [cart, setCart] = useState(Products);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div>
      <h2>Lista de Productos</h2>
      {Products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <img src={product} alt="imgen" />
          <button onClick={() => addToCart(product)}>
            Agregar al ..carrito
          </button>
        </div>
      ))}
      <div className="border">
        <Carrito cartItems={cart} />
      </div>
    </div>
  );
};
