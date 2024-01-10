import React from 'react';
import * as S from './pagination.style';
import { useNavigate } from 'react-router-dom';
import { path } from 'src/constants/path';
import qs from 'query-string';
import usePagination from '@mui/material/usePagination/usePagination';

export default function Pagination({ filters, pagination }) {
  const navigate = useNavigate();
  const { items } = usePagination({
    count: pagination.page_size || 0,
    page: pagination.page || 1
  });

  const handleClickPage = page => {
    const _filters = {
      ...filters,
      page: page
    };

    let query = path.home + `?${qs.stringify(_filters)}`;
    navigate(query);
  };

  const handleClickDirectionButton = page => {
    const _filters = {
      ...filters,
      page: page
    };

    let query = path.home + `?${qs.stringify(_filters)}`;
    navigate(query);
  };

  return (
    <S.Pagination>
      {items.map(({ page, type, selected }, idx) => {
        let child = null;
        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
          child = <S.PageButton>...</S.PageButton>;
        } else if (type === 'previous') {
          child = (
            <S.PrevButton disabled={page === 0} onClick={() => handleClickDirectionButton(page)}>
              <svg
                enableBackground="new 0 0 11 11"
                viewBox="0 0 11 11"
                x={0}
                y={0}
                className="shopee-svg-icon icon-arrow-left"
              >
                <g>
                  <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z" />
                </g>
              </svg>
            </S.PrevButton>
          );
        } else if (type === 'next') {
          child = (
            <S.NextButton disabled={page >= pagination.page_size} onClick={() => handleClickDirectionButton(page)}>
              <svg
                enableBackground="new 0 0 11 11"
                viewBox="0 0 11 11"
                x={0}
                y={0}
                className="shopee-svg-icon icon-arrow-right"
              >
                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
              </svg>
            </S.NextButton>
          );
        } else if (type === 'page') {
          child = (
            <S.PageButton onClick={() => handleClickPage(page)} className={selected ? 'active' : null}>
              {page}
            </S.PageButton>
          );
        }

        return child;
      })}
    </S.Pagination>
  );
}
