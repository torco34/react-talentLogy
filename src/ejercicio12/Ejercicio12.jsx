import { useState } from "react";
import { Product } from "./Product";
import products from "./products";
import "./Cart.css";
import { Cart } from "./Cart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillCartFill } from "react-icons/bs";
export const Ejercicio12 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartShow, setCartShow] = useState(false);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };
  function showCart() {
    if (cartShow) {
      setCartShow(false);
    } else {
      setCartShow(true);
    }
  }

  return (
    <div>
      <Container>
        <h2 className="text-center text-info">Carrito de compras</h2>
        <Row>
          <Col lg={8}>
            {" "}
            <div className=" cart">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </Col>
          <Col>
            <button onClick={showCart} className=" btnCarrito">
              <BsFillCartFill />
            </button>
            {!cartShow ? (
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
