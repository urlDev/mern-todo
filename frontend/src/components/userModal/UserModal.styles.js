import styled from 'styled-components';

export const UserModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  background: #047581;
  border-radius: 3px;
  z-index: 5;
  color: white;
  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 20px;
  }

  label {
    margin-bottom: 10px;
    color: white;
  }

  input {
    width: 100%;
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    background: none;
    ::placeholder {
      font-family: 'Raleway', sans-serif;
      padding: 1px;
      color: white;
    }
    :focus,
    :active {
      outline: none;
    }
  }

  button {
    cursor: pointer;
    width: 110px;
    background: rgba(176, 174, 225, 1);
    border: none;
    color: white;
    padding: 10px;
    border-radius: 3px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    margin-top: 40px;
  }
`;
