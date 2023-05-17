import { List } from "./List";

export const Ejercicio11 = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];
  return (
    <div>
      <List users={users} />
    </div>
  );
};
