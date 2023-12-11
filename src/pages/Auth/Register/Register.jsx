import React, { useState, useRef, useEffect } from 'react';
import AuthLayout from 'src/layouts/AuthLayout';
import * as S from './Register.style';
import InputText from 'src/components/InputText/InputText';
import { Button } from 'src/assets/styles/utils';
import { SocialButton } from 'src/components/SocialButton/SocialButton';
import Facebook from '../../../assets/imgs/facebook.svg';
import Google from '../../../assets/imgs/google.svg';

const isValidNumber = number => {
  return number.length === 10;
};

export default function Register() {
  return (
    <AuthLayout title="Bạn cần giúp đỡ?">
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
                  <SocialButton logo={Facebook} title="Facebook"></SocialButton>
                  <SocialButton logo={Google} title="Google"></SocialButton>
                </S.SocialLogin>

                <S.PolicyText>
                  <span>Bằng việc đăng kí, bạn đã đồng ý với Shopee</span>
                </S.PolicyText>
              </S.FormFooter>
              <S.LoginSection>
                <span>Bạn đã có tài khoản? </span>
                <S.LoginText to="/login">Đăng nhập</S.LoginText>{' '}
              </S.LoginSection>
            </S.Form>
          </S.MainSection>
        </div>
      </S.Body>
    </AuthLayout>
  );
}
