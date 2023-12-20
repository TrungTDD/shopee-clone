import { NavLink } from 'react-router-dom';
import { Button } from 'src/assets/styles/utils';
import BaseInputNumber from 'src/components/BaseInputNumber/BaseInputNumber';
import styled from 'styled-components';

export const AllCategories = styled.div`
  margin-bottom: 2rem;
`;

export const CategoryHeading = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const MenuIcon = styled.div`
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const MenuTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Categories = styled.ul`
  list-style-type: none;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const CategoryTitle = styled(NavLink)`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.4rem;
  a {
    .active {
      color: green;
    }
  }
  &:hover {
    color: red;
  }
  &:active {
    font-weight: 700;
    color: #ee4d2d;
  }
`;

// FILTER SECTION
export const Filter = styled.div`
  margin-bottom: 2rem;
`;

export const FilterHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  gap: 1rem;
`;

export const FilterIcon = styled.div`
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const FilterTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const FormFilterPrice = styled.div`
  margin-bottom: 3.2rem;
`;

export const FormTitle = styled.div``;

export const FormController = styled.form``;

export const FormInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const FormInputPrice = styled(BaseInputNumber)`
  width: 8rem;
  padding: 1px 5px 2px;
`;

export const PriceErrorMessage = styled.div`
  color: #ff424f;
  font-size: 1rem;
  padding: 1rem 0;
`;

export const FormLine = styled.div`
  height: 1px;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 0.4rem;
`;

export const FormButton = styled(Button)`
  width: 100%;
  padding: 0.5rem;
  background-color: #f05732;
  margin: 2rem 0 0;
`;

export const RemoverFilter = styled(FormButton)``;
