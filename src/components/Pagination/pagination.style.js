import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
`;

export const Pages = styled.div``;

export const PageButton = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1.8rem;
  font-size: 400;
  cursor: pointer;
  background-color: transparent;
  border: transparent;
  color: rgba(0, 0, 0, 0.3);

  &.active {
    background-color: #ee4d2d;
    border-radius: 2px;
    box-shadow: 0px 0px 2px 0.5px rgba(0, 0, 0, 0.3);
    color: white;
  }

  &:hover {
    color: #ee4d2d;
  }
`;

export const BasePaginationButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: transparent;
  svg {
    width: 1.6rem;
    fill: #d5d5d5;
  }
`;

export const PrevButton = styled(BasePaginationButton)``;

export const NextButton = styled(BasePaginationButton)``;
