import PropTypes from 'prop-types';
import { memo } from 'react';

function UserItem({ user, deleteUserById }) {
  return (
    <div>
      <span>{user.name}</span>
      <span>
        &lt;
        {user.email}
        &gt;
      </span>
      <button type="button" onClick={() => deleteUserById(user.id)}>X</button>
    </div>
  );
}

function UserList({ users, deleteUserById }) {
  return (
    <ul>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          deleteUserById={deleteUserById}
        />
      ))}
    </ul>
  );
}

const userType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

UserItem.propTypes = {
  user: userType.isRequired,
  deleteUserById: PropTypes.func.isRequired,
};

UserList.propTypes = {
  users: PropTypes.arrayOf(userType).isRequired,
  deleteUserById: PropTypes.func.isRequired,
};

export default memo(UserList);
