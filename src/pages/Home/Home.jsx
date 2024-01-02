import React, { useState } from 'react';
import HomeLayout from 'src/layouts/HomeLayout';
import * as S from './home.style';
import FilterPanel from 'src/components/FilterPanel/FilterPanel';
import SortPanel from 'src/components/SortPanel/SortPanel';
import Pagination from 'src/components/Pagination/Pagination';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './home.slice';
import { unwrapResult } from '@reduxjs/toolkit';
import ProductList from 'src/components/ProductList/ProductList';
import useQuery from 'src/hooks/useQuery';

export default function Home() {
  const [products, setProducts] = useState();
  const [filters, setFilters] = useState({});
  const queryString = useQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    const _filter = {
      ...queryString,
      page: queryString.page || 1,
      limit: queryString.limit || 30
    };

    setFilters(_filter);

    const params = {
      page: _filter.page,
      limit: _filter.limit,
      category: _filter.category,
      price_max: _filter.maxPrice,
      price_min: _filter.minPrice
    };

    console.log(params);
    dispatch(getProducts({ params }))
      .then(unwrapResult)
      .then(result => {
        setProducts(result.data.products);
      });
  }, [dispatch, queryString]);

  return (
    <HomeLayout>
      <S.Container className="container">
        <S.Side>
          <FilterPanel filters={filters} />
        </S.Side>
        <S.Main>
          <SortPanel />
          <ProductList products={products} />
          <S.PaginationSection>
            <Pagination filters={filters} />
          </S.PaginationSection>
        </S.Main>
      </S.Container>
    </HomeLayout>
  );
}
