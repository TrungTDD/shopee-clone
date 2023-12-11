import React from 'react';
import * as S from './socialButton.style';
import Facebook from '../../assets/imgs/facebook.svg';
export function SocialButton({ logo, title }) {
  return (
    <S.ButtonWrapper>
      <img src={Facebook} />
      {title}
    </S.ButtonWrapper>
  );
}
