import React from 'react';
import * as S from './inputText.style';

export default function InputText({ ...props }) {
  return (
    <S.FormControl>
      <input {...props}/>
    </S.FormControl>
  );
}
