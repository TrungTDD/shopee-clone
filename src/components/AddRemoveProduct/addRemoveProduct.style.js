import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const InputQuantity = styled.input`
  -webkit-appearance: none;
  width: 6rem;
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: transparent;
  border-right: transparent;
  outline: none;
  text-align: center;
`;

export const BaseInputButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  background-color: transparent;
  cursor: pointer;
  svg {
    width: 1rem;
  }
`;

export const RemoveItemButton = styled(BaseInputButton)``;

export const AddItemButton = styled(BaseInputButton)``;
