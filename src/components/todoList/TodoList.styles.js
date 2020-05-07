import styled from 'styled-components';

export const TodoContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  p {
    margin: 5px 0;
    padding: 5px 20px;
    display: flex;
    color: rgba(135, 197, 235, 1);
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    :nth-child(even) {
      background: rgba(176, 174, 225, 1);
      color: white;
    }
    span {
      cursor: pointer;
    }
  }
`;
