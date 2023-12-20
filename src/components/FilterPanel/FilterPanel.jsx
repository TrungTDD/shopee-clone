import * as S from './filterPanel.style';

export default function FilterPanel() {
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
          <li>
            <S.CategoryTitle to="">Áo thun</S.CategoryTitle>
          </li>
          <li>
            <S.CategoryTitle to="">Đồng hồ</S.CategoryTitle>
          </li>
          <li>
            <S.CategoryTitle to="">Điện thoại</S.CategoryTitle>
          </li>
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
              dataSlot="icon"
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
          <S.FormController>
            <S.FormInput>
              <S.FormInputPrice />
              <S.FormLine />
              <S.FormInputPrice />
            </S.FormInput>
            <S.PriceErrorMessage>Vui lòng điền khoảng giá phù hợp</S.PriceErrorMessage>
            <S.FormButton>Áp dụng</S.FormButton>
          </S.FormController>
        </S.FormFilterPrice>
      </S.Filter>

      <S.RemoverFilter>Xoá Tất Cả</S.RemoverFilter>
    </>
  );
}
