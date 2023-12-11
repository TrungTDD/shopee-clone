import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
`;

export const HeaderBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const LogoBrand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 2rem;
  svg {
    fill: rgb(238, 77, 45);
    width: 12rem;
    height: 12rem;
    margin-top: -10px;
  }
`;

export const LogoTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 400;
`;

export const TitleSupport = styled(Link)`
  color: #ee4d2d;
`
