import styled from 'styled-components';

export const UsersContainer = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  color: #047581;
  margin: auto;
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 30px;
    text-align: center;
  }

  button {
    margin: 0 auto 15px auto;
    width: 200px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    background: rgba(176, 174, 225, 1);
    color: white;
    padding: 10px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
  }

  button ~ button {
    background: red;
  }
`;
