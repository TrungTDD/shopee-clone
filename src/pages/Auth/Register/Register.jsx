import React from 'react';
import { useDispatch } from 'react-redux';
import AuthLayout from 'src/layouts/AuthLayout';
import * as S from './Register.style';
import InputText from 'src/components/InputText/InputText';
import { Button } from 'src/assets/styles/utils';
import { SocialButton } from 'src/components/SocialButton/SocialButton';
import Facebook from '../../../assets/imgs/facebook.svg';
import Google from '../../../assets/imgs/google.svg';
import { useForm, Controller } from 'react-hook-form';
import { rules } from '../../../constants/rules';
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage';
import http from 'src/utils/http';
import { register } from '../auth.slice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { path } from 'src/constants/path';

export default function Register() {
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async data => {
    const body = {
      email: data.email,
      password: data.password
    };

    try {
      const res = await dispatch(register(body));
      unwrapResult(res); // need this one to unwrap the result
      navigate(path.home);
    } catch (error) {
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          });
        }
      }
    }
  };

  return (
    <AuthLayout title="Bạn cần giúp đỡ?">
      <S.Body>
        <div className="container">
          <S.MainSection>
            <S.Form noValidate onSubmit={handleSubmit(handleRegister)}>
              <S.FormTitle>Đăng ký</S.FormTitle>
              <S.FormInput>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText placeholder="Email" type="text" name="email" onChange={field.onChange} />
                  )}
                  value={getValues('email')}
                />

                <ErrorMessage errors={errors} name="email" />
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <InputText placeholder="Password" type="password" name="password" onChange={field.onChange} />
                  )}
                  value={getValues('password')}
                />
                <ErrorMessage errors={errors} name="password" />
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
