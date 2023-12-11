import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;

  img {
    width: 3rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;
