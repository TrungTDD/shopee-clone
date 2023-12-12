import { Link } from 'react-router-dom';
import { Button } from 'src/assets/styles/utils';
import { ButtonWrapper } from 'src/components/SocialButton/socialButton.style';
import styled from 'styled-components';

export const Body = styled.div`
  background-color: #ee4d2d;
`;

export const Container = styled.div`
  display: flex;
`;

export const Banner = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  background-image: url(https://down-vn.img.susercontent.com/file/sg-11134004-7rbl4-lokx9dgir7pd13);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const FormWrapper = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  padding: 2rem;
`;

export const FormLogin = styled.form`
  background-color: white;
  padding: 3rem;
  border-radius: 2px;
  overflow: hidden;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 3.6rem;
`;

export const FormController = styled.div`
  margin-bottom: 2.4rem;
`;

export const FormButton = styled.div`
  margin-bottom: 4.8rem;
  ${Button} {
    width: 100%;
  }
`;

export const FormSocialButton = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 4.8rem;
  ${ButtonWrapper} {
    flex: 1;
  }
`;

export const Footer = styled.div`
  color: rgba(0, 0, 0, 0.3);
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleFooter = styled(Link)`
  color: #ee4d2d;
  font-weight: 500;
`;
