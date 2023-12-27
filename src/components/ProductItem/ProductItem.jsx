import React from 'react';
import * as S from './productItem.style';
import { Link } from 'react-router-dom';
import ProductRating from '../ProductRating/ProductRating';
import { path } from 'src/constants/path';
import { generateNameId } from 'src/utils/helpes';

export default function ProductItem({ id, image, name, originalPrice, discountPrice, rating, sold }) {
  return (
    <S.Product>
      <Link to={path.products + '/' + generateNameId(name, id)}>
        <S.ProductItem>
          <S.ProductImage>
            <img alt="" src={image} />
          </S.ProductImage>
          <S.ProductInfo>
            <S.ProductTitle>{name}</S.ProductTitle>
            <S.ProductPriceSection>
              <S.ProductOriginalPrice>đ {originalPrice}</S.ProductOriginalPrice>
              <S.ProductDiscountPrice>đ {discountPrice}</S.ProductDiscountPrice>
            </S.ProductPriceSection>
            <S.ProductMetaInfo>
              <ProductRating rating={rating} />
              <S.ProductSold>
                <span>{sold}k</span>
                <span>Đã bán</span>
              </S.ProductSold>
            </S.ProductMetaInfo>
          </S.ProductInfo>
        </S.ProductItem>
      </Link>
    </S.Product>
  );
}
