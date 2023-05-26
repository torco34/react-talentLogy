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
  const [contador, setContador] = useState(0);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setContador(contador + 1);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    setContador(contador - 1);
  };
  function showCart() {
    if (cartShow) {
      setCartShow(false);
    } else {
      setCartShow(true);
    }
  }

  return (
    <div className="containerCarrito">
      <Container>
        <h2 className="text-center ">Carrito de compras</h2>
        <h2>Ejercico 12 </h2>
        <Row>
          <p>
            Crear un componente que reciba como propiedad un arreglo de objetos
            con información de productos y muestre una lista con su nombre,
            descripción y precio. Además, debe incluir un botón de "Agregar al
            carrito" que permita añadir productos a un carrito virtual.
          </p>
          <Col lg={8}>
            {" "}
            <div className="cart border-end border-dark  border-5">
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
            <div className="btnCarrito">
              <BsFillCartFill onClick={showCart} />
              <span>{contador}</span>
            </div>
            {!cartShow ? (
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
