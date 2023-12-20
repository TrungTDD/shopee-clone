import React from 'react';
import * as S from './inputText.style';

export const InputText = props => {
  return (
    <S.FormControl>
      <input {...props} />
    </S.FormControl>
  );
};

export default InputText;
