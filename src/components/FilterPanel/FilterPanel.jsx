import { path } from 'src/constants/path';
import * as S from './filterPanel.style';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import qs from 'query-string';
import { getCategories } from 'src/pages/Home/home.slice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function FilterPanel({ filters }) {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    control,
    reset,
    getValues,
    formState: { errors },
    handleSubmit,
    clearErrors
  } = useForm({
    defaultValues: {
      maxPrice: filters.maxPrice || '',
      minPrice: filters.minPrice || ''
    },
    reValidateMode: 'onSubmit'
  });

  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then(result => setCategories(result.data));
  }, [dispatch]);

  const handleFilterPrice = data => {
    const { minPrice, maxPrice } = data;

    const _filter = {
      ...filters,
      minPrice: minPrice,
      maxPrice: maxPrice
    };

    const query = path.home + `?${qs.stringify(_filter)}`;
    navigate(query);
  };

  const clearAll = () => {
    reset();
    navigate(path.home);
  };

  const validPrice = () => {
    const minPrice = getValues('minPrice');
    const maxPrice = getValues('maxPrice');
    const message = 'Vui lòng điền khoản giá phù hợp';

    if (minPrice !== '' && maxPrice !== '') {
      return Number(minPrice) <= Number(maxPrice) || message;
    }

    return (minPrice !== '' && maxPrice !== '') || message;
  };

  return (
    <>
      <S.AllCategories>
        <S.CategoryHeading>
          <S.MenuIcon>
            <svg viewBox="0 0 12 10" className="shopee-svg-icon shopee-category-list__header-icon icon-all-cate">
              <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                <g transform="translate(-373 -208)">
                  <g transform="translate(155 191)">
                    <g transform="translate(218 17)">
                      <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                      <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                      <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </S.MenuIcon>
          <S.MenuTitle>Tất cả danh mục</S.MenuTitle>
        </S.CategoryHeading>

        <S.Categories>
          {categories.map((value, index) => {
            return (
              <S.CategoryItem key={index}>
                <NavLink
                  to={path.home + `?category=${value._id}`}
                  className={() => {
                    const queryId = qs.parse(location.search);
                    if (queryId.category === value._id) {
                      return 'active';
                    }
                    return '';
                  }}
                >
                  {value.name}
                </NavLink>
              </S.CategoryItem>
            );
          })}
        </S.Categories>
      </S.AllCategories>

      <S.Filter>
        <S.FilterHeading>
          <S.FilterIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              dataslot="icon"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>
          </S.FilterIcon>
          <S.FilterTitle>Bộ lọc tìm kiếm</S.FilterTitle>
        </S.FilterHeading>

        <S.FormFilterPrice>
          <S.FormTitle>Khoản giá</S.FormTitle>
          <S.FormController onSubmit={handleSubmit(handleFilterPrice)}>
            <S.FormInput>
              <Controller
                name="minPrice"
                control={control}
                values={getValues('minPrice')}
                rules={{ validate: validPrice }}
                render={({ field }) => {
                  return (
                    <S.FormInputPrice
                      onChange={value => {
                        clearErrors();
                        field.onChange(value);
                      }}
                      placeholder="Từ"
                    />
                  );
                }}
              />

              <S.FormLine />
              <Controller
                name="maxPrice"
                control={control}
                values={getValues('maxPrice')}
                render={({ field }) => {
                  return (
                    <S.FormInputPrice
                      onChange={value => {
                        clearErrors();
                        field.onChange(value);
                      }}
                      placeholder="Đến"
                    />
                  );
                }}
              />
            </S.FormInput>
            <S.PriceErrorMessage>{errors.minPrice && errors.minPrice.message}</S.PriceErrorMessage>
            <S.FormButton>Áp dụng</S.FormButton>
          </S.FormController>
        </S.FormFilterPrice>
      </S.Filter>

      <S.RemoverFilter onClick={clearAll}>Xoá Tất Cả</S.RemoverFilter>
    </>
  );
}
