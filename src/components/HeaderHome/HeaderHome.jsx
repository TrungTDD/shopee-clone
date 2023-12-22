import React, { useState } from 'react';
import * as S from './headerHome.style';
import { useSelector } from 'react-redux';
import Popover from '../Popover/Popover';
import usePopover from 'src/hooks/usePopover';
import SearchBar from '../SearchBar/SearchBar';
import useAuthenticated from 'src/hooks/useAuthenticated';
import NavBar from '../NavBar/NavBar';

export default function HeaderHome() {
  const isAuthenticated = useAuthenticated();

  return (
    <S.Header>
      <S.Container className="container">
        <NavBar isAuthenticated={isAuthenticated} />
        <SearchBar />
      </S.Container>
    </S.Header>
  );
}
