import React from 'react';
import AuthLayout from 'src/layouts/AuthLayout';
import * as S from './login.style';
import { Button } from 'src/assets/styles/utils';
import { Link } from 'react-router-dom';
import InputText from 'src/components/InputText/InputText';
import { SocialButton } from 'src/components/SocialButton/SocialButton';
import Facebook from '../../../assets/imgs/facebook.svg';
import Google from '../../../assets/imgs/google.svg';
import { Controller, useForm } from 'react-hook-form';
import { rules } from 'src/constants/rules';
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../auth.slice';
import { unwrapResult } from '@reduxjs/toolkit';
import { path } from 'src/constants/path';

export default function Login() {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleRegister = async data => {
    const body = {
      email: data.email,
      password: data.password
    };

    try {
      const response = await dispatch(login(body));
      unwrapResult(response);
      navigation(path.home);
    } catch (error) {
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: 'custom',
            message: error.data[key]
          });
        }
      }
    }
  };

  return (
    <AuthLayout>
      <S.Body>
        <S.Container className="container">
          <S.Banner />
          <S.FormWrapper>
            <S.FormLogin noValidate onSubmit={handleSubmit(handleRegister)}>
              <S.Title>Đăng nhập</S.Title>
              <S.FormController>
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
              </S.FormController>
              <S.FormController>
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
              </S.FormController>
              <S.FormButton>
                <Button>Đăng nhập</Button>
              </S.FormButton>
              <S.FormSocialButton>
                <SocialButton logo={Facebook} title="Facebook" />
                <SocialButton logo={Google} title="Goggle" />
              </S.FormSocialButton>
              <S.Footer>
                <span>Bạn mới đến Shoppe? </span>
                <S.TitleFooter to="/register">Đăng Ký</S.TitleFooter>
              </S.Footer>
            </S.FormLogin>
          </S.FormWrapper>
        </S.Container>
      </S.Body>
    </AuthLayout>
  );
}
