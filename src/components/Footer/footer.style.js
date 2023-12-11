import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  margin-top: 3.2rem;
  color: rgba(0, 0, 0, 0.65);
`;

export const FooterInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.8rem;
  margin-top: 4.8rem;
  padding-bottom: 3.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InfoHeading = styled.h5`
  text-transform: uppercase;
  color: #000;
  margin-bottom: 1.4rem;
`;

export const ImgSection = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.4rem;

  li {
    display: inline-block;
    padding: 0.4rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0.125rem;
    width: 6rem;
    height: 3rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const FollowSection = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.2rem;

    &:hover {
      color: #ee4d2e;
    }
  }
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    font-size: 1.2rem;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
      color: #ee4d2e;
    }
  }
`;

export const Footer1 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5.6rem;
`;

export const Language = styled.div`
  display: flex;
  span {
    padding: 0 0.3125rem;
    cursor: pointer;
    &:not(:last-child) {
      border-right: 1px solid rgba(0, 0, 0, 0.3);
    }

    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Policy = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5.6rem;
`;

export const PolicyText = styled.div`
  span {
    font-size: 1.2rem;
    padding: 0 2rem;
    cursor: pointer;
    &:not(:last-child) {
      border-right: 1px solid rgba(0, 0, 0, 0.3);
    }

    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Footer2 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  align-items: center;
  gap: 1rem;
`;
