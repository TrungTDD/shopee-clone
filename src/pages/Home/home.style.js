import { NavLink } from 'react-router-dom';
import { Button } from 'src/assets/styles/utils';
import BaseInputNumber from 'src/components/BaseInputNumber/BaseInputNumber';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 3.6rem;
  gap: 4rem;
`;

export const Side = styled.aside`
  flex: 0 0 15%;
  max-width: 15%;
`;
// MAIN SECTION

export const Main = styled.main`
  flex: 0 0 85%;
  max-width: 85%;
`;
