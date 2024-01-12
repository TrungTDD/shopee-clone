import styled from 'styled-components';

export const NavBarContainer = styled.div`
  background-color: #f25632;
`;

export const Container = styled.div``;

export const SearchBarContainer = styled.div`
  background-color: #fff;
`;

export const SearchBarCart = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 2rem 0rem;
`;

export const Banner = styled.div`
  display: flex;
  flex: 0 0 50%;
  align-items: center;
  gap: 2rem;
`;

export const LogoCart = styled.div`
  svg {
    fill: #f25632;
    width: 10rem;
  }
  &:after {
    border-right: 1px solid #f25632;
  }
`;

export const CartTitle = styled.div`
  color: #f25632;
  font-size: 2rem;
`;

export const Search = styled.div``;

export const FormSearch = styled.form`
  display: flex;
  flex: 0 0 50%;
  align-items: stretch;
`;

export const InputSearch = styled.input`
  padding: 1rem;
  width: 100%;
  border: 2px solid #f25632;
  outline: none;
`;

export const SubmitButton = styled.button`
  padding: 0rem 3rem;
  background-color: #f4563a;
  border: transparent;
  cursor: pointer;
  svg {
    width: 1.2rem;
    fill: white;
  }
`;
