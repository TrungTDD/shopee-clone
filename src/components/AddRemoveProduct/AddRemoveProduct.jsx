import React from 'react';
import * as S from './addRemoveProduct.style';

export default function AddRemoveProduct() {
  return (
    <S.Container>
      <S.RemoveItemButton>
        <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon">
          <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
        </svg>
      </S.RemoveItemButton>
      <S.InputQuantity type="number"></S.InputQuantity>
      <S.AddItemButton>
        <svg
          enableBackground="new 0 0 10 10"
          viewBox="0 0 10 10"
          x={0}
          y={0}
          className="shopee-svg-icon icon-plus-sign"
        >
          <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
        </svg>
      </S.AddItemButton>
    </S.Container>
  );
}
