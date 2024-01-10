import styled, { keyframes } from "styled-components";

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
  z-index: 1000;
  border: 1px solid rgba(0, 0, 0, 0.1);
  top: 100%;
  right: 0;
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
