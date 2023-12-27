import React, { useState } from 'react';
import HomeLayout from 'src/layouts/HomeLayout';
import * as S from './home.style';
import FilterPanel from 'src/components/FilterPanel/FilterPanel';
import SortPanel from 'src/components/SortPanel/SortPanel';
import ProductItem from 'src/components/ProductItem/ProductItem';
import Pagination from 'src/components/Pagination/Pagination';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './home.slice';
import { unwrapResult } from '@reduxjs/toolkit';

export default function Home() {
  const [products, setProducts] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
      .then(unwrapResult)
      .then(result => {
        console.log(result.data.products);
        setProducts(result.data.products);
      });
  }, [dispatch]);

  return (
    <HomeLayout>
      <S.Container className="container">
        <S.Side>
          <FilterPanel />
        </S.Side>
        <S.Main>
          <SortPanel />
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
          <S.PaginationSection>
            <Pagination />
          </S.PaginationSection>
        </S.Main>
      </S.Container>
    </HomeLayout>
  );
}
