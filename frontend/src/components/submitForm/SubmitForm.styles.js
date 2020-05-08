import styled from 'styled-components';

export const SubmitContainer = styled.div`
  margin-top: 15px;
  padding: 0px 20px 30px 20px;
  input {
    width: calc(100% - 15px - 90px);
    margin-right: 15px;
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
    width: 90px;
    height: 30px;
    background: rgba(176, 174, 225, 1);
    border: none;
    color: white;
    border-radius: 3px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
  }
`;
