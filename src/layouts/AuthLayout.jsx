import React from 'react';
import Footer from 'src/components/Footer/Footer';
import HeaderRegister from 'src/components/HeaderRegister/HeaderRegister';
import * as S from './authLayout.style';
import { Button } from '../assets/styles/utils';
import InputText from 'src/components/InputText/InputText';
import { SocialButton } from 'src/components/SocialButton/SocialButton';

export default function AuthLayout({ children, title }) {
  return (
    <>
      <HeaderRegister title={title} />
      <S.Body>
        <div className="container">
          <S.MainSection>
            <S.Form>
              <S.FormTitle>Đăng ký</S.FormTitle>
              <S.FormInput>
                <InputText placeholder="Số điện thoại" type="text" name="phone" />
              </S.FormInput>
              <S.FormButton>
                <Button>Tiếp theo</Button>
              </S.FormButton>
              <S.FormFooter>
                <S.SocialLogin>
                  <SocialButton title="Facebook"></SocialButton>
                  <SocialButton title="Facebook"></SocialButton>
                </S.SocialLogin>

                <S.PolicyText>
                  <span>Bằng việc đăng kí, bạn đã đồng ý với Shopee</span>
                </S.PolicyText>
              </S.FormFooter>
              <S.LoginSection>Bạn đã có tài khoản? Đăng nhập</S.LoginSection>
            </S.Form>
          </S.MainSection>
        </div>
      </S.Body>
      <Footer />
    </>
  );
}
