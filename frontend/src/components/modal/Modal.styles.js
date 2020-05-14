import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 200px;
  width: 700px;
  background: #047581;
  border-radius: 3px;
  z-index: 5;
  color: white;
  form {
    padding: 20px 20px;
  }
  input {
    width: calc(100% - 15px - 90px);
    margin-right: 15px;
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
`;
