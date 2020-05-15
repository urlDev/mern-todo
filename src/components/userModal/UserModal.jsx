import React, { useContext, useState } from 'react';
import axios from 'axios';
import { TodoContext } from '../../Context';

import { NotificationManager } from 'react-notifications';

import { HeaderContainer } from '../header/Header.styles';
import { UserModalContainer } from './UserModal.styles';
import { Button } from '../button/Button.styles';
import { Input } from '../form/Form.styles';

const UserModal = () => {
  const { modalOpen, closeModal, loadUser, users } = useContext(TodoContext);

  const [input, setInput] = useState({});

  const handleChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: input.name || users.name,
      email: input.email || users.email,
      password: input.password,
    };

    const token = localStorage.getItem('userToken').slice(1, -1);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const url = `https://urldev-mern-todo.herokuapp.com`;
      const response = await axios.patch(`${url}/users`, userData, config);
      const { data } = await response;
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(data));
      loadUser(data);
      closeModal();
      NotificationManager.success(
        'Account has been updated',
        'Successful!',
        1000
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {modalOpen && (
        <UserModalContainer>
          <HeaderContainer
            style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h1>Update your account</h1>
            <span style={{ cursor: 'pointer' }} onClick={closeModal}>
              ⤫
            </span>
          </HeaderContainer>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              defaultValue={users.name}
            />
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              defaultValue={users.email}
            />
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="on"
              onChange={handleChange}
              required
            />
            <Button> Update </Button>
          </form>
        </UserModalContainer>
      )}
    </>
  );
};

export default UserModal;
