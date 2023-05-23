// import React from 'react';
import PropTypes from "prop-types";
import "./Cart.css";
export const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="carrit">
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Precio: {item.price}
              <img src={item.image} alt="imgen" />
              <button onClick={() => removeFromCart(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

// export default Cart;
