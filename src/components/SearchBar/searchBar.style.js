import styled from 'styled-components';

export const SearchBar = styled.div`
  display: grid;
  grid-template-columns: 10fr 40fr 8fr;
  padding: 1rem 0rem;
  align-items: center;
`;

export const Banner = styled.div`
  svg {
    fill: #fff;
    width: 14rem;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormSearch = styled.form`
  display: flex;
  position: relative;
`;

export const InputSearch = styled.input`
  width: 100%;
  padding: 1.2rem;
  border-radius: 2px;
  border: 0px solid rgba(0, 0, 0, 0.4);

  &:focus {
    outline: none;
  }
`;

export const ButtonSearch = styled.button`
  background-color: #fa5533;
  padding: 0.5rem 2rem;
  border: 2px;
  position: absolute;
  right: 3px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    background-color: rgba(250, 85, 51, 0.8);
  }

  svg {
    fill: white;
    width: 1.4rem;
  }
`;

export const Recommend = styled.div`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 200;
  display: flex;
  gap: 1rem;
`;

export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 3.5rem;
    height: 3.5rem;
    fill: white;
  }
`;

export const CartContainer = styled.div`
  position: relative;
`;

export const CartIcon = styled.div``;

export const CartBadge = styled.div`
  position: absolute;
  right: -10px;
  top: 0;
  background-color: white;
  border-radius: 12px;
  padding: 0.1rem 0.8rem;
  font-size: 1.2rem;
  color: rgba(250, 85, 51, 0.8);
`;

export const PopoverContent = styled.div`
  width: 35rem;
  padding: 1rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  margin-top: 1.2rem;
`;

export const ProductImage = styled.div`
  img {
    width: 40px;
  }
`;

export const ProductTitle = styled.div`
  font-size: 1.2rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const ProductPrice = styled.div``;

export const PopoverFooter = styled.div`
  margin-top: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartStatus = styled.div`
  font-size: 1.2rem;
`;

export const CartButton = styled.button`
  padding: 0.8rem 1.2rem;
  background-color: #F05B33;
  color: #fff;
  border: transparent;
  border-radius: 2px;
`;
