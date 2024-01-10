import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
`;

export const CustomerSection = styled.ul`
  list-style-type: none;
  flex: 0 0 50%;
  display: flex;
  li {
    padding: 0 0.6rem;
    cursor: pointer;
    color: white;
    font-weight: 300;
    font-size: 1.4rem;

    &:not(:last-child) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
`;

export const AuthSection = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2rem;
`;

export const User = styled.div`
  display: flex;
  position: relative;
`;

export const UserName = styled.div``;

export const UserLink = styled(Link)`
  display: block;
  padding: 1rem 1rem 1.5rem;
  cursor: pointer;
`;

export const AuthLink = styled(Link)`
  color: white;
  font-weight: 500;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const PopoverContner = styled.div`
  width: 15rem;
`;
