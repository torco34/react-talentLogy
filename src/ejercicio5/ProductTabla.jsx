import Table from 'react-bootstrap/Table';

export const ProductTabla = ({ products }) => {
  return (
    <div className='border'>
      {" "}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.nombre}</td>
              <td>{product.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
