import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  width: 90px;
  height: 30px;
  background: rgba(176, 174, 225, 1);
  border: none;
  color: white;
  border-radius: 3px;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  &:active,
  &:focus {
    outline: none;
  }
`;
