import React from 'react';
import Footer from 'src/components/Footer/Footer';
import HeaderCart from 'src/components/HeaderCart/HeaderCart';

export default function CartLayout({ children }) {
  return (
    <>
      <HeaderCart />
      {children}
      <Footer />
    </>
  );
}
