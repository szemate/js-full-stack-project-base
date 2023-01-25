import { useEffect, useCallback, useState } from 'react';
import Header from '../layout/Header';
import UserForm from './UserForm';
import UserList from './UserList';
import * as usersApi from '../../api/usersApi';
import './UsersPage.scss';

export default function UsersPage() {
  const [state, setState] = useState({
    users: [],
    newUser: { name: '', email: '' },
    error: '',
    loading: true,
  });

  const getAllUsers = async () => {
    try {
      const data = await usersApi.getAllUsers();
      setState((prevState) => ({
        ...prevState,
        users: data.results,
        error: '',
        loading: false,
      }));
    } catch (err) {
      setState((prevState) => ({
        ...prevState,
        error: err.message,
        loading: false,
      }));
    }
  };

  const createUser = useCallback(async (data) => {
    try {
      const user = await usersApi.createUser(data);
      setState((prevState) => ({
        ...prevState,
        users: [...prevState.users, user],
        newUser: { name: '', email: '' },
        error: '',
      }));
    } catch (err) {
      setState((prevState) => ({
        ...prevState,
        error: err.message,
      }));
    }
  }, []);

  const deleteUserById = useCallback(async (id) => {
    try {
      await usersApi.deleteUserById(id);
      setState((prevState) => ({
        ...prevState,
        users: prevState.users.filter((user) => user.id !== id),
        error: '',
      }));
    } catch (err) {
      setState((prevState) => ({
        ...prevState,
        error: err.message,
      }));
    }
  }, []);

  const setNewUser = useCallback((key, value) => {
    setState((prevState) => ({
      ...prevState,
      newUser: {
        ...prevState.newUser,
        [key]: value,
      },
    }));
  }, []);

  useEffect(() => {
    getAllUsers();
  }, []);

  const error = state.error ? <div>{state.error}</div> : '';
  const loading = state.loading ? <div>Loading...</div> : '';

  return (
    <div>
      <Header />
      <UserForm
        newUser={state.newUser}
        setNewUser={setNewUser}
        createUser={createUser}
      />
      {error}
      {loading}
      <UserList
        users={state.users}
        deleteUserById={deleteUserById}
      />
    </div>
  );
}
