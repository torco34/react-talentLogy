import { useState } from "react";
import { Cart } from "./Cart";
import { Product } from "./Product";
import products from "./products";
import { BsFillCartFill } from "react-icons/bs";
// import { BsFillCartFill } from "react-icons/fa";
import "./Cart.css";
export const Ejercicio12 = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };
  return (
    <div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <h2 className="text-center text-info">Carrito de compras</h2>
      <BsFillCartFill />
      <div className=" cart">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};
