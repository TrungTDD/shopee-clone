import styled from 'styled-components';

export const Product = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  margin: 5px 0;
  padding: 0px 5px;
`;

export const ProductItem = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 0.2px 0.25rem 0 rgba(0, 0, 0, 0.05);
  transition: all ease 0.3s;
  &:hover {
    box-shadow: 0px 1rem 2rem 0 rgba(0, 0, 0, 0.1);
    transform: translateY(-0.0625rem);
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: contain;
    vertical-align: bottom;
  }
`;

export const ProductInfo = styled.div`
  padding: 0.5rem;
`;

export const ProductTitle = styled.div`
  display: inline-block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1.2rem;
  text-overflow: ellipsis;
  word-wrap: break-word;
  line-height: 1.4rem;
  margin-bottom: 1rem;
`;

export const ProductPriceSection = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ProductOriginalPrice = styled.div`
  flex-shrink: 1;
  max-width: 50%;
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ProductDiscountPrice = styled.div`
  flex-grow: 1;
  color: #ee4d2d;
  font-size: 1.4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ProductMetaInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ProductSold = styled.div`
  display: flex;
  gap: 0.5rem;
  span {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.5);
  }
`;
