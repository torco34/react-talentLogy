import { useState } from "react";
import "./index.css";
export const List = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
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
          <h2>Lista</h2>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          {/* Render any other detailed user information here */}
        </div>
      )}
    </div>
  );
};
