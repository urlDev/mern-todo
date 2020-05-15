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

    border-bottom: 1px solid white;
    color: white;

    ::placeholder {
      padding: 1px;
      color: white;
    }
  }

  button {
    margin-top: 40px;
  }

  @media (max-width: 550px) {
    width: 300px;
    h1 {
      font-size: 20px;
    }
  }
`;
