import React from 'react';
import * as S from './footer.style';
import { textCSKH, aboutShoppe } from 'src/constants/textConstants';

export default function Footer() {
  return (
    <div>
      <S.Footer>
        <div className="container">
          <S.FooterInfo>
            <S.InfoSection>
              <S.InfoHeading>Chăm sóc khách hàng</S.InfoHeading>
              <S.TextInfo>
                {textCSKH.map(text => {
                  return <a href="">{text}</a>;
                })}
              </S.TextInfo>
            </S.InfoSection>

            <S.InfoSection>
              <S.InfoHeading>Về Shoppe</S.InfoHeading>
              <S.TextInfo>
                {aboutShoppe.map(text => {
                  return <a href="">{text}</a>;
                })}
              </S.TextInfo>
            </S.InfoSection>

            <S.InfoSection>
              <S.InfoHeading>Thanh toán</S.InfoHeading>
              <S.ImgSection>
                <li>
                  <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />
                </li>
                <li>
                  <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />
                </li>
                <li>
                  <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />
                </li>
                <li>
                  <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />
                </li>
                <li>
                  <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />
                </li>
                <li>
                  <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />
                </li>
              </S.ImgSection>
              <S.InfoHeading>Đơn vị vận chuyển</S.InfoHeading>
              <S.ImgSection>
                <li>
                  <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />
                </li>
                <li>
                  <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />
                </li>
                <li>
                  <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />
                </li>
                <li>
                  <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />
                </li>
                <li>
                  <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />
                </li>
                <li>
                  <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />
                </li>
              </S.ImgSection>
            </S.InfoSection>

            <S.InfoSection>
              <S.InfoHeading>Theo dõi chúng tôi trên</S.InfoHeading>
              <S.FollowSection>
                <li>
                  <img
                    class="_6ZyW8Y"
                    src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5"
                  />
                  <a href="">Facebook</a>
                </li>
                <li>
                  <img
                    class="_6ZyW8Y"
                    src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5"
                  />
                  <a href="">Facebook</a>
                </li>
                <li>
                  <img
                    class="_6ZyW8Y"
                    src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5"
                  />
                  <a href="">Facebook</a>
                </li>
              </S.FollowSection>
            </S.InfoSection>

            <S.InfoSection>
              <S.InfoHeading>Tải ứng dụng Shoppe ngay trên</S.InfoHeading>
            </S.InfoSection>
          </S.FooterInfo>

          <S.Footer1>
            <div>© 2023 Shopee. Tất cả các quyền được bảo lưu.</div>
            <S.Language>
              Quốc gia & Khu vực:
              <span>Việt Nam</span>
              <span>Tiếng Anh</span>
            </S.Language>
          </S.Footer1>
          <S.Policy>
            <S.PolicyText>
              <span>CHÍNH SÁCH BẢO MẬT</span>
              <span>QUY CHẾ HOẠT ĐỘNG</span>
              <span>CHÍNH SÁCH VẬN CHUYỂN</span>
              <span>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span>
            </S.PolicyText>
          </S.Policy>
          <S.Footer2>
            <span>
              Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
              phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
            </span>
            <span>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</span>
            <span>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</span>
            <span>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</span>
          </S.Footer2>
        </div>
      </S.Footer>
    </div>
  );
}
