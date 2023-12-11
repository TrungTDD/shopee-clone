import { Link } from 'react-router-dom';
import { Button } from 'src/assets/styles/utils';
import { ButtonWrapper } from 'src/components/SocialButton/socialButton.style';
import styled from 'styled-components';

export const Body = styled.div`
  background-color: rgb(238, 77, 45);
  height: auto;
`;

export const MainSection = styled.div`
  background-image: url(https://down-vn.img.susercontent.com/file/sg-11134004-7rbl4-lokx9dgir7pd13);
  height: 60rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Form = styled.form`
  background-color: #fff;
  margin: 6.8rem;
  grid-column: 2 / 3;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.span`
  font-size: 2rem;
  margin-bottom: 2rem;
  display: inline-block;
`;

export const FormInput = styled.div``;

export const FormButton = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 4.8rem;
  ${Button} {
    width: 100%;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialLogin = styled.div`
  display: flex;
  gap: 1.2rem;
  ${ButtonWrapper} {
    width: 50%;
  }
  margin-bottom: 2.4rem;
`;

export const PolicyText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const LoginSection = styled.div`
  text-align: center;
  margin-top: auto;

  span {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const LoginText = styled(Link)`
  color: rgb(238, 77, 45);
  font-weight: 600;
`;
