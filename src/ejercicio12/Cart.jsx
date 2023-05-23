// import React from 'react';
import PropTypes from "prop-types";
import "./Cart.css";
export const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="carrit bg-info">
      <h2>Carrito de compras</h2>
      <h2>Total $:</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="bg-info">
          <ul className="">
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="card p-4">
                  <img src={item.image} alt="imgen" />
                  {item.name}
                  {item.price}
                  <button onClick={() => removeFromCart(index)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
