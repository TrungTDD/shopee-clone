import React, { useState } from 'react';
import * as S from './addRemoveProduct.style';

export default function AddRemoveProduct({ onChange, maxQuantity, quantity }) {
  const handleChangeInput = event => {
    let value = event.target.value;

    if (value >= maxQuantity) {
      value = maxQuantity;
    } else if (value < 1) {
      value = 1;
    }
    onChange && onChange(value);
  };

  const handleAddItem = () => {
    if (quantity < maxQuantity) {
      onChange && onChange(quantity + 1);
    }
  };

  const handleRemoveItem = () => {
    if (quantity > 1) {
      onChange && onChange(quantity - 1);
    }
  };

  return (
    <S.Container>
      <S.RemoveItemButton onClick={handleRemoveItem}>
        <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon">
          <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
        </svg>
      </S.RemoveItemButton>
      <S.InputQuantity
        type="number"
        step={1}
        value={quantity}
        max={maxQuantity}
        min={1}
        onChange={event => handleChangeInput(event)}
      ></S.InputQuantity>
      <S.AddItemButton onClick={handleAddItem}>
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
