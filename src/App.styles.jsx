import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  width: 500px;
  border-radius: 3px;
  background: white;
  display: flex;
  flex-direction: column;
  @media (max-width: 550px) {
    width: 300px;
    h1 {
      font-size: 20px;
    }
  }
`;
