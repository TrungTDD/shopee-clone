import React from 'react';
import * as S from './inputText.style';
import { forwardRef } from 'react';

export const InputText = forwardRef((props, ref) => {
  return (
    <S.FormControl>
      <input ref={ref} {...props}/>
    </S.FormControl>
  );
});

export default InputText;
