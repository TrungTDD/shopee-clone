import { ProductStartPercent } from 'src/components/ProductRating/productRating.style';
import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  margin-top: 3.2rem;
`;

export const MainSection = styled.div`
  background-color: white;
  display: flex;
  padding: 1rem;
  gap: 3rem;
`;

export const ProductImages = styled.div`
  flex: 0 1 40%;
  max-width: 40%;
`;

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

export const ProductInfo = styled.div`
  flex: 0 1 60%;
  max-width: 60%;
`;

export const ProductTitle = styled.div`
  font-size: 2rem;
`;

export const ProductMetaInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

export const ProductRatingSection = styled.div`
  display: flex;
  gap: 1rem;
  padding-right: 1rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  ${ProductStartPercent} svg {
    fill: #f54f33;
  }
`;

export const ProductRatingLabel = styled.div`
  color: #df6843;
  text-decoration: underline;
`;

export const ProductSold = styled.div`
  p {
    display: inline-block;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-top: 1.2rem;
  background-color: #fbfbfb;
  padding: 2rem;
`;

export const ProductOriginalPrice = styled.div`
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.3);
`;

export const ProductDiscountPrice = styled.div`
  color: #e9584e;
  font-size: 2.4rem;
`;

export const ProductDiscountLabel = styled.div`
  background-color: #e95642;
  color: white;
  text-transform: uppercase;
  padding: 0.2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 1px;
`;

export const AddProductItemSection = styled.div`
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const AddCartButton = styled.button`
  margin-top: 3.2rem;
  background-color: #ffeeea;
  border: 1px solid #ee4d2d;
  color: #ee4d2d;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  cursor: pointer;
  svg {
    fill: #ee4d2d;
  }

  &:hover {
    background-color: #fff4f1;
  }
`;

export const ProductDescription = styled.div``;
