import React from 'react';
import * as S from './socialButton.style';
export function SocialButton({ logo, title }) {
  return (
    <S.ButtonWrapper>
      <img src={logo} />
      {title}
    </S.ButtonWrapper>
  );
}
