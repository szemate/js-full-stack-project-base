import PropTypes from 'prop-types';
import { memo } from 'react';

function UserForm({ newUser, setNewUser, createUser }) {
  function handleSubmit(event) {
    event.preventDefault();
    createUser(newUser);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewUser(name, value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail Address"
          value={newUser.email}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

UserForm.propTypes = {
  newUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setNewUser: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
};

export default memo(UserForm);
