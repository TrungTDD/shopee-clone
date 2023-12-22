import styled from 'styled-components';

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProductStarWrapper = styled.div`
  position: relative;
  margin-right: 1px;
  svg {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }

  > svg {
    color: #d5d5d5;
  }
`;

export const ProductStartPercent = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  svg {
    color: #ffce3d;
    fill: #ffce3d;
  }
`;
