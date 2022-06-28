import { useEffect, useState } from 'react';
import { userApi } from '../api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userApi.getUsers().then(setUsers);
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
