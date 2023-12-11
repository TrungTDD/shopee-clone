import React from 'react';
import Footer from 'src/components/Footer/Footer';
import HeaderRegister from 'src/components/HeaderRegister/HeaderRegister';
import * as S from './authLayout.style';
import { Button } from '../assets/styles/utils';
import InputText from 'src/components/InputText/InputText';
import { SocialButton } from 'src/components/SocialButton/SocialButton';
import Facebook from '../assets/imgs/facebook.svg';
import { Link } from 'react-router-dom';
import Google from '../assets/imgs/google.svg';

export default function AuthLayout({ children, title }) {
  return (
    <>
      <HeaderRegister title={title} />
      {children}
      <Footer />
    </>
  );
}
