import React from 'react';
import * as S from './pagination.style';
import { useNavigate } from 'react-router-dom';
import { path } from 'src/constants/path';
import qs from 'query-string';

export default function Pagination({ filters, pagination }) {
  const navigate = useNavigate();

  const handleClickPage = page => {
    const _filters = {
      ...filters,
      page: page
    };

    let query = path.home + `?${qs.stringify(_filters)}`;
    navigate(query);
  };

  return (
    <S.Pagination>
      <S.PrevButton>
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
      {Array(5)
        .fill(0)
        .map((value, index) => {
          const page = index + 1;
          const filterPage = filters.page;
          return (
            <S.PageButton
              onClick={() => handleClickPage(page)}
              className={page == filterPage ? 'active' : null}
              key={index}
            >
              {page}
            </S.PageButton>
          );
        })}

      <S.PageButton>...</S.PageButton>
      <S.NextButton>
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
    </S.Pagination>
  );
}
