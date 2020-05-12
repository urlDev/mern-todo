import React, { useContext, useState } from 'react';
import axios from 'axios';
import { TodoContext } from '../../Context';

import { HeaderContainer } from '../header/Header.styles';
import { UserModalContainer } from './UserModal.styles';

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

    try {
      const response = await axios.patch(
        `http://localhost:3001/users/${users.id}`,
        userData
      );
      const { data } = await response;
      loadUser(data);
      closeModal();
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
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              defaultValue={users.name}
            />
            <label htmlFor="signup-email">Email</label>
            <input
              type="email"
              name="email"
              id="signin-email"
              placeholder="Email"
              onChange={handleChange}
              defaultValue={users.email}
            />
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              name="password"
              id="signup-password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <button type="submit"> Update </button>
          </form>
        </UserModalContainer>
      )}
    </>
  );
};

export default UserModal;
