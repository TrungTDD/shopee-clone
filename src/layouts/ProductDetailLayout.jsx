import React from 'react';
import Footer from 'src/components/Footer/Footer';
import HeaderHome from 'src/components/HeaderHome/HeaderHome';

export default function ProductDetailLayout({ children }) {
  return (
    <>
      <HeaderHome />
      {children}
      <Footer />
    </>
  );
}
