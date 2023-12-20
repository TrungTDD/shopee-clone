import * as S from './navBar.style';
import usePopover from 'src/hooks/usePopover';
import Popover from '../Popover/Popover';
import { useDispatch } from 'react-redux';
import { authActions } from 'src/pages/Auth/auth.slice';

export default function NavBar({ isAuthenticated }) {
  const { showPopover, handleShowPopover, handleHidePopover } = usePopover();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <S.Navbar>
        <S.CustomerSection>
          <li>Kênh người bán</li>
          <li>Trở thành người bán Shoppe</li>
          <li>Tải ứng dụng</li>
          <li>Kết nối</li>
        </S.CustomerSection>
        <S.AuthSection>
          {isAuthenticated ? (
            <S.User onMouseEnter={handleShowPopover} onMouseLeave={handleHidePopover}>
              <S.UserName>Trung</S.UserName>
              <Popover showPopover={showPopover}>
                <S.UserLink to="">Tài khoản của tôi</S.UserLink>
                <S.UserLink to="">Đơn mua</S.UserLink>
                <S.UserLink onClick={handleLogout}>Đăng xuất</S.UserLink>
              </Popover>
            </S.User>
          ) : (
            <>
              <li>
                <S.AuthLink to="/login">Đăng nhập</S.AuthLink>
              </li>
              <li>
                <S.AuthLink to="/register">Đăng ký</S.AuthLink>
              </li>
            </>
          )}
        </S.AuthSection>
      </S.Navbar>
    </>
  );
}
