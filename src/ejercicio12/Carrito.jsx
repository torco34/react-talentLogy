import Products from "./Products";

export const Carrito = () => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {Products.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {Products.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Precio: ${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
