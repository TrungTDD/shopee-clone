import React from 'react';
import HomeLayout from 'src/layouts/HomeLayout';
import * as S from './home.style';
import FilterPanel from 'src/components/FilterPanel/FilterPanel';
import SortPanel from 'src/components/SortPanel/SortPanel';
import ProductItem from 'src/components/ProductItem/ProductItem';
import Pagination from 'src/components/Pagination/Pagination';

export default function Home() {
  return (
    <HomeLayout>
      <S.Container className="container">
        <S.Side>
          <FilterPanel />
        </S.Side>
        <S.Main>
          <SortPanel />
          <S.ProductItems>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </S.ProductItems>
          <S.PaginationSection>
            <Pagination />
          </S.PaginationSection>
        </S.Main>
      </S.Container>
    </HomeLayout>
  );
}
