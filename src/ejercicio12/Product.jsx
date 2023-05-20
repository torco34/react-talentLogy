import PropTypes from "prop-types";

export const Product = ({ product, addToCart }) => {
  return (
    <div>
      <div className="">
        <h3>{product.name}</h3>
        <img src={product.image} />
        <p>Precio: {product.price}</p>
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};