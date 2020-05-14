import styled from 'styled-components';

import { Button } from '../button/Button.styles';

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

  button ~ button {
    background: red;
  }
`;

export const StyledButton = styled(Button)`
  width: 200px;
  margin: 0 auto 15px auto;
`;
