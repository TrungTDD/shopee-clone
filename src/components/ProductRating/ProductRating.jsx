import React from 'react';
import * as S from './productRating.style';

export default function ProductRating({ rating = 1.5 }) {
  function calculateRating(index) {
    if (rating <= 0) {
      return '0%';
    } else {
      if (rating >= index + 1) {
        return '100%';
      } else {
        const percent = (1 - (index + 1 - rating)) * 100;
        return `${percent}%`;
      }
    }
  }

  return (
    <S.ProductRating>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <S.ProductStarWrapper key={index}>
              <S.ProductStartPercent style={{ width: calculateRating(index) }}>
                <svg
                  enableBackground="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x={0}
                  y={0}
                  className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
                >
                  <polygon
                    points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                  />
                </svg>
              </S.ProductStartPercent>
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x={0}
                y={0}
                className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid"
              >
                <polygon
                  points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                />
              </svg>
            </S.ProductStarWrapper>
          );
        })}
    </S.ProductRating>
  );
}
