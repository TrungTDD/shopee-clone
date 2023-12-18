import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const Header = styled.header`
  background: linear-gradient(-180deg, #f53d2d, #f63);
`;

export const Container = styled.div``;

export const PopoverEnterAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Drawer = styled.div`
  position: absolute;
  will-change: transform;
  animation: ${PopoverEnterAnimation} 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  opacity: 1;
  z-index: 400;
  border: 1px solid rgba(0, 0, 0, 0.1);
  top: 100%;
  right: 0;
  width: 15rem;
  :before {
    position: absolute;
    top: -40px;
    left: 0;
    content: '';
    height: 10px;
    opacity: 0;
    width: 100%;
  }
`;

export const PopoverArrow = styled.div`
  border-bottom: 10px solid rgba(255 255 255);
  border-right: 14px solid transparent;
  border-left: 14px solid transparent;
  top: -10px;
  right: 6px;
  position: absolute;
  width: 0px;
  height: 0px;
`;

export const PopoverContent = styled.div`
  background-color: white;
`;

export const UserLink = styled(Link)`
  display: block;
  padding: 1rem 1rem 1.5rem;
  cursor: pointer;
`;

export const AuthLink = styled(Link)`
  color: white;
  font-weight: 500;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;
