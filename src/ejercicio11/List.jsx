import { useState } from "react";
import "./index.css";
import { BsX } from "react-icons/bs";
export const List = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [close, setClose] = useState();
  // cerrar img
  function closed() {
    setSelectedUser(null);
  }
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };
  return (
    <div>
      <h2>User Lista</h2>
      <ul className="lista">
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div className="body">
          <span>
            <BsX onClick={closed} />
          </span>
         
          <h2>Lista</h2>
          <img src={selectedUser.img} alt="" />
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
        </div>
      )}
    </div>
  );
};
