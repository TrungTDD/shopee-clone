import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ededed;
  padding: 1.4rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FilterHeading = styled.div``;

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 1px;
  background-color: white;
  font-size: 1.2rem;

  &.active {
    background-color: #f05635;
    color: white;
  }
`;

export const SelectPrice = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 2px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 1px;
  &.active {
    color: #ee4d2d;
  }
`;

export const FilterPagination = styled.div`
  display: flex;
  align-items: center;
`;

export const PageController = styled.div`
  display: flex;
  margin-right: 1rem;
`;

export const CurrentPageTitle = styled.div`
  color: #ee4d2d;
  font-size: 1.2rem;
`;

export const AllPageTitle = styled.div`
  font-size: 1.2rem;
`;

export const PageButton = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({ disabled }) => (disabled ? '#F0F0F0' : '#fff')};
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  svg {
    width: 0.8rem;
    height: 0.8rem;
    fill: ${({ disabled }) => (disabled ? '#8A8A8A' : '#E1E1E1')};
  }
`;
