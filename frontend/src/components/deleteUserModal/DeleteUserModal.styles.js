import styled from 'styled-components';

export const DeleteUserModalContainer = styled.div`
  height: 200px;
  width: 700px;
  background: #047581;
  border-radius: 3px;
  padding: 20px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    color: white;
    font-family: 'Josefin Sans', sans-serif;
  }
  button {
    background: red;
    border-radius: 3px;
    width: 100%;
    color: white;
    font-weight: bold;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
`;
