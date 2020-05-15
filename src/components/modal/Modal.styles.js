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
    border-bottom: 1px solid white;
    color: white;
    ::placeholder {
      padding: 1px;
      color: white;
    }
  }
  @media (max-width: 550px) {
    width: 300px;
    input {
      width: 100%;
      margin: 0;
    }

    button {
      margin-left: calc(260px - 78px + 12px - 20px);
      margin-top: 15px;
    }
    h1 {
      font-size: 20px;
    }
  }
`;
