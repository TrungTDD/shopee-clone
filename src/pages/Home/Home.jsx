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
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [filters, setFilters] = useState({});
  const queryString = useQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    const _filter = {
      ...queryString,
      page: queryString.page || 1,
      limit: queryString.limit || 30,
      sort_by: queryString.sort_by || 'view'
    };

    setFilters(_filter);

    const params = {
      page: _filter.page,
      limit: _filter.limit,
      category: _filter.category,
      price_max: _filter.maxPrice,
      price_min: _filter.minPrice,
      sort_by: _filter.sort_by,
      order: _filter.order,
      name: _filter.name
    };

    dispatch(getProducts({ params }))
      .then(unwrapResult)
      .then(result => {
        setProducts(result.data.products);
        setPagination(result.data.pagination);
      });
  }, [dispatch, queryString]);

  return (
    <HomeLayout>
      <S.Container className="container">
        <S.Side>
          <FilterPanel filters={filters} />
        </S.Side>
        <S.Main>
          <SortPanel filters={filters} pagination={pagination} />
          <ProductList products={products} />
          <S.PaginationSection>
            <Pagination pagination={pagination} filters={filters} />
          </S.PaginationSection>
        </S.Main>
      </S.Container>
    </HomeLayout>
  );
}
