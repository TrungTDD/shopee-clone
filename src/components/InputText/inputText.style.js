import styled from 'styled-components';

export const FormControl = styled.div`
  width: 100%;
  height: 4rem;
  margin-bottom: 1rem;

  input {
    width: 100%;
    height: 4rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;

    padding: 1rem;
    &:focus {
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
    }
  }
`;
