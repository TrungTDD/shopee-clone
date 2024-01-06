import React, { useState } from 'react';
import * as S from './productSliderImage.styled';
import { range } from 'lodash';

export default function ProductSliderImages({ images }) {
  const [curImageIdx, setCurImageIdx] = useState(0);
  const [curSliderIdx, setCurSliderIdx] = useState(0);
  const [lastSliderIdx, setLastSliderIdx] = useState(images.length >= 5 ? 5 : images.length);

  const handleClickPrevSlider = () => {
    if (curSliderIdx === 0) {
      return;
    }

    if (curSliderIdx > 0) {
      setCurSliderIdx(prev => {
        return prev - 1;
      });

      setLastSliderIdx(prev => {
        return prev - 1;
      });
    }
  };

  const handleClickNextSlider = () => {
    if (lastSliderIdx < images.length) {
      setCurSliderIdx(prev => {
        return prev + 1;
      });

      setLastSliderIdx(prev => {
        return prev + 1;
      });
    }
  };

  const onChoose = idx => {
    setCurImageIdx(idx);
  };

  return (
    <S.Container>
      <S.ProductMainImage>
        <img src={images[curImageIdx]} alt="" />
      </S.ProductMainImage>
      <S.ProductImageCarousel>
        <S.ProductImageButtonPrev onClick={handleClickPrevSlider}>
          <svg
            enable-background="new 0 0 13 20"
            viewBox="0 0 13 20"
            x="0"
            y="0"
            class="shopee-svg-icon icon-arrow-left-bold"
          >
            <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
          </svg>
        </S.ProductImageButtonPrev>
        <S.ProductImageButtonNext onClick={handleClickNextSlider}>
          <svg
            enable-background="new 0 0 13 21"
            viewBox="0 0 13 21"
            x="0"
            y="0"
            class="shopee-svg-icon icon-arrow-right-bold"
          >
            <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
          </svg>
        </S.ProductImageButtonNext>
        {range(curSliderIdx, lastSliderIdx).map((value, idx) => {
          return (
            <S.ProductImage key={value} active={curImageIdx === value} onMouseEnter={() => onChoose(value)}>
              <img src={images[value]} alt="" />
            </S.ProductImage>
          );
        })}
      </S.ProductImageCarousel>
    </S.Container>
  );
}
