import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import * as S from './productList.style';


export default function ProductList({ products }) {
  return (
    <S.ProductItems>
      {products &&
        products.map((value, index) => {
          return (
            <ProductItem
              key={index}
              id={value._id}
              image={value.image}
              name={value.name}
              originalPrice={value.price_before_discount}
              discountPrice={value.price}
              rating={value.rating}
              sold={value.sold}
            />
          );
        })}
    </S.ProductItems>
  );
}
