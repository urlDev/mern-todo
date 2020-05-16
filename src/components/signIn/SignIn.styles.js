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
  }
  button {
    margin-top: 10px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  margin: 20px 0;
  color: #551a8b;
  :active,
  :focus,
  :hover {
    color: rgba(176, 174, 225, 1);
  }
`;
