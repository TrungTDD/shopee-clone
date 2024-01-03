import React, { useEffect, useState } from 'react';
import * as S from './SortPanel.style';
import { useNavigate } from 'react-router-dom';
import qs from 'query-string';
import classNames from 'classnames';
import { path } from 'src/constants/path';

export default function SortPanel({ filters, pagination }) {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('view');

  const handleSortBy = (type, order) => {
    setSortBy(type);
    const _filter = {
      ...filters,
      sort_by: type,
      order: order
    };
    navigate(path.home + `?${qs.stringify(_filter)}`);
  };

  const handleActiveOptionSort = type => {
    return classNames({ active: sortBy === type });
  };

  const handleSorByPriceValue = () => {
    const sortBy = filters.sort_by;
    const order = filters.order;
    if (sortBy !== 'price' && (order !== 'asc' || order !== 'desc')) {
      return '';
    }
    return `${sortBy}:${order}`;
  };

  const handleClickPrev = () => {
    if (pagination.page >= 1) {
      const page = pagination.page - 1;
      const _filters = {
        ...filters,
        page: page
      };
      navigate(path.home + `?${qs.stringify(_filters)}`);
    }

    return;
  };

  const handleClickNext = () => {
    if (pagination.page <= pagination.page_size) {
      const page = pagination.page + 1;
      const _filters = {
        ...filters,
        page: page
      };
      navigate(path.home + `?${qs.stringify(_filters)}`);
    }

    return;
  };

  useEffect(() => {
    setSortBy(filters.sort_by);
  }, [filters]);

  return (
    <S.Container>
      <S.FilterContainer>
        <S.FilterHeading>Sắp xếp theo</S.FilterHeading>
        <S.FilterButton onClick={() => handleSortBy('view')} className={handleActiveOptionSort('view')}>
          Phổ Biến
        </S.FilterButton>
        <S.FilterButton onClick={() => handleSortBy('createdAt')} className={handleActiveOptionSort('createdAt')}>
          Mới nhất
        </S.FilterButton>
        <S.FilterButton onClick={() => handleSortBy('sold')} className={handleActiveOptionSort('sold')}>
          Bán chạy
        </S.FilterButton>
        <S.SelectPrice
          onChange={event => {
            handleSortBy(...event.target.value.split(':'));
          }}
          className={handleActiveOptionSort('price')}
          value={handleSorByPriceValue()}
        >
          <option disabled value="">
            Giá
          </option>
          <option value="price:asc" className="active">
            Giá: Thấp đến cao
          </option>
          <option value="price:desc">Giá: Cao đến thấp</option>
        </S.SelectPrice>
      </S.FilterContainer>
      <S.FilterPagination>
        <S.PageController>
          <S.CurrentPageTitle>{pagination.page}</S.CurrentPageTitle>
          <S.AllPageTitle>/{pagination.page_size}</S.AllPageTitle>
        </S.PageController>

        <S.PageButton onClick={handleClickPrev} disabled={pagination.page === 1}>
          <svg viewBox="0 0 7 11" className="shopee-svg-icon icon-arrow-left-small">
            <path
              d="M4.694078 9.8185598L.2870824 5.4331785c-.1957415-.1947815-.1965198-.511363-.0017382-.7071046a.50867033.50867033 0 0 1 .000868-.0008702L4.7381375.2732784 4.73885.273991c.1411545-.127878.3284279-.205779.5338961-.205779.4393237 0 .7954659.3561422.7954659.7954659 0 .2054682-.077901.3927416-.205779.5338961l.0006632.0006632-.0226101.0226101a.80174653.80174653 0 0 1-.0105706.0105706L2.4680138 4.7933195c-.1562097.1562097-.1562097.4094757 0 .5656855a.45579485.45579485 0 0 0 .0006962.0006944l3.3930018 3.3763607-.0009482.0009529c.128869.1413647.2074484.3293723.2074484.5357331 0 .4393237-.3561422.7954659-.7954659.7954659-.2049545 0-.391805-.077512-.5328365-.2048207l-.0003877.0003896-.0097205-.0096728a.80042023.80042023 0 0 1-.0357234-.0355483z"
              fillRule="nonzero"
            />
          </svg>
        </S.PageButton>
        <S.PageButton onClick={handleClickNext} disabled={pagination.page === pagination.page_size}>
          <svg viewBox="0 0 7 11" className="shopee-svg-icon icon-arrow-right-small">
            <path
              d="M2.305922 9.81856l4.4069956-4.385381c.1957415-.194782.1965198-.511364.0017382-.707105a.26384055.26384055 0 0 0-.000868-.00087L2.2618625.273278 2.26115.273991C2.1199955.146113 1.9327221.068212 1.7272539.068212c-.4393237 0-.7954659.356142-.7954659.795466 0 .205468.077901.392741.205779.533896l-.0006632.000663.0226101.02261c.0034906.003557.0070143.00708.0105706.010571L4.5319862 4.79332c.1562097.156209.1562097.409475 0 .565685-.0002318.000232-.0004639.000463-.0006962.000694L1.1382882 8.73606l.0009482.000953c-.128869.141365-.2074484.329372-.2074484.535733 0 .439324.3561422.795466.7954659.795466.2049545 0 .391805-.077512.5328365-.204821l.0003877.00039.0097205-.009673c.012278-.011471.0241922-.023327.0357234-.035548z"
              fillRule="nonzero"
            />
          </svg>
        </S.PageButton>
      </S.FilterPagination>
    </S.Container>
  );
}
