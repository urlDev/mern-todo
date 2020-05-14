import styled from 'styled-components';

export const Input = styled.input`
  width: calc(100% - 15px - 90px);
  margin-right: 15px;
  border: none;
  background: none;
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
`;
