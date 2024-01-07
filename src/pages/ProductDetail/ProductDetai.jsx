import React, { useEffect, useState } from 'react';
import * as S from './productDetail.style';
import ProductDetailLayout from 'src/layouts/ProductDetailLayout';
import { addToCart, getProductDetail } from './productDetail.slice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import { generateProductId } from 'src/utils/helpes';
import ProductRating from 'src/components/ProductRating/ProductRating';
import AddRemoveProduct from 'src/components/AddRemoveProduct/AddRemoveProduct';
import ProductSliderImages from 'src/components/ProductSliderImage/ProductSliderImages';
import purchaseApi from 'src/api/purchase.api';
import { toast } from 'react-toastify';

export default function ProductDetail() {
  const dispatch = useDispatch();
  const params = useParams();

  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const productId = generateProductId(params.productId);
    dispatch(getProductDetail(productId))
      .then(unwrapResult)
      .then(result => {
        console.log(result.data);
        setProduct(result.data);
      });
  }, [dispatch, params.productId]);

  const handleChangeQuantity = quantity => {
    setQuantity(quantity);
  };

  const handleAddToCart = event => {
    event.preventDefault();
    const body = {
      product_id: product._id,
      buy_count: quantity
    };
    console.log(body);
    dispatch(addToCart(body))
      .then(unwrapResult)
      .then(res => {
        toast.success(res.message, {
          position: 'top-center',
          autoClose: 4000
        });
      })
      .catch(err => {
        toast.error(err.message, {
          position: 'top-center',
          autoClose: 4000
        });
      });
  };

  return (
    <ProductDetailLayout>
      {product && (
        <S.ProductDetailContainer className="container">
          <S.MainSection>
            <S.ProductImages>
              <ProductSliderImages mainImage={product.image} images={product.images} />
            </S.ProductImages>
            <S.ProductInfo>
              <S.ProductTitle>{product.name}</S.ProductTitle>
              <S.ProductMetaInfo>
                <S.ProductRatingSection>
                  <S.ProductRatingLabel>{product.rating}</S.ProductRatingLabel>
                  <ProductRating rating={product.rating} />
                </S.ProductRatingSection>

                <S.ProductSold>
                  {product.sold}k <p>Đã bán</p>
                </S.ProductSold>
              </S.ProductMetaInfo>
              <S.ProductPrice>
                <S.ProductOriginalPrice>đ{product.price_before_discount}</S.ProductOriginalPrice>
                <S.ProductDiscountPrice>đ{product.price}</S.ProductDiscountPrice>
                <S.ProductDiscountLabel>50% giảm</S.ProductDiscountLabel>
              </S.ProductPrice>
              <S.AddProductItemSection>
                <p>Số lượng</p>
                <AddRemoveProduct onChange={handleChangeQuantity} maxQuantity={product.quantity} quantity={quantity} />
                <p>{product.quantity} sản phẩm còn lại</p>
              </S.AddProductItemSection>
              <S.AddCartButton onClick={handleAddToCart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
                <span>Thêm vào giỏ hàng</span>
              </S.AddCartButton>
            </S.ProductInfo>
          </S.MainSection>
        </S.ProductDetailContainer>
      )}
    </ProductDetailLayout>
  );
}
