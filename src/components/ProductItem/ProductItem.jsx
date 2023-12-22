import React from 'react';
import * as S from './productItem.style';
import { Link } from 'react-router-dom';
import ProductRating from '../ProductRating/ProductRating';

export default function ProductItem() {
  return (
    <S.Product>
      <Link to="">
        <S.ProductItem>
          <S.ProductImage>
            <img alt="" src="https://down-vn.img.susercontent.com/file/dbedb6bd789d1d968cf36b6e19d2ec5e_tn" />
          </S.ProductImage>
          <S.ProductInfo>
            <S.ProductTitle>FREESHIP ÁO KHOÁC BÒ CROTOP KAKI SIÊU CHẤT FORM THỤNG</S.ProductTitle>
            <S.ProductPriceSection>
              <S.ProductOriginalPrice>đ 439.000</S.ProductOriginalPrice>
              <S.ProductDiscountPrice>đ 239.000</S.ProductDiscountPrice>
            </S.ProductPriceSection>
            <S.ProductMetaInfo>
              <ProductRating />
              <S.ProductSold>
                <span>16.7k</span>
                <span>Đã bán</span>
              </S.ProductSold>
            </S.ProductMetaInfo>
          </S.ProductInfo>
        </S.ProductItem>
      </Link>
    </S.Product>
  );
}
