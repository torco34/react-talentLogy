// import React from 'react';
import PropTypes from "prop-types";
import "./Cart.css";
export const Cart = ({ cartItems, removeFromCart }) => {
  function calculPrice() {
    const total = cartItems.reduce((acumulador, item) => {
      return acumulador + item.price;
    }, 0);
    return total;
  }
  return (
    <div className="carrit">
      <h2>Carrito de Compras</h2>
      <h2>Total $:{calculPrice()}</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="card p-4 cardCarrito">
                  <img src={item.image} alt="imgen" />
                  <h3> {item.name}</h3>
                  <p>Precio: {item.price}</p>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="btn btn-secondary"
                  >
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
