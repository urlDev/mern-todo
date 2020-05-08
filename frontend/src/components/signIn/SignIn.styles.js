import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInSignUpContainer = styled.div`
  padding: 0 20px;
  flex-grow: 1;
  form {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  label {
    margin-bottom: 10px;
    color: #047581;
  }

  input {
    width: 100%;
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid rgba(176, 174, 225, 1);
    color: rgba(176, 174, 225, 1);
    ::placeholder {
      font-family: 'Raleway', sans-serif;
      padding: 1px;
      color: rgba(176, 174, 225, 1);
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
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  margin: 20px 0;
  :active,
  :focus,
  :hover {
    color: rgba(176, 174, 225, 1);
  }
`;
