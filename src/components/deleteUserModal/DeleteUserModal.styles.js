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
  @media (max-width: 768px) {
    width: 500px;
  }
  @media (max-width: 550px) {
    width: 300px;
    h1 {
      font-size: 20px;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  button {
    background: none;
    width: 100%;
    cursor: pointer;
  }

  button ~ button {
    background: red;
  }
  @media (max-width: 550px) {
    button {
      width: calc(260px / 2);
    }
    width: 260px;
    margin: 0 auto;
  }
`;
