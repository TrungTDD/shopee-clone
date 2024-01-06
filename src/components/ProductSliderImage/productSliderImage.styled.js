import styled from 'styled-components';

export const Container = styled.div``;

export const ProductMainImage = styled.div`
  display: flex;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ProductImageCarousel = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const BaseProductImageButton = styled.button`
  svg {
    width: 1rem;
    fill: white;
  }
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.2);
  border: transparent;
  padding: 0.5rem 0.2rem;
  cursor: pointer;
`;

export const ProductImageButtonNext = styled(BaseProductImageButton)`
  position: absolute;
  right: 0;
`;

export const ProductImageButtonPrev = styled(BaseProductImageButton)`
  position: absolute;
  left: 0;
`;

export const ProductImage = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 92px;
  height: 92px;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: 2px solid ${({ active }) => (active ? '#ee4d2d' : 'transparent')};
  }
`;
