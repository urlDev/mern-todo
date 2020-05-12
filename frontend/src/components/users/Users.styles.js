import styled from 'styled-components';

export const UsersContainer = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  color: #047581;
  margin: auto;
  h1 {
    margin-bottom: 15px;
    text-align: center;
  }

  button {
    width: 100%;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    background: rgba(176, 174, 225, 1);
    color: white;
    padding: 10px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    margin-bottom: 50px;
  }

  button ~ button {
    background: red;
  }
`;
