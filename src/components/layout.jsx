import React from "react";
import Nav from "./nav";
import Footer from '../components/footer';
import { Analytics } from '@vercel/analytics/react';


function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Analytics />
      <Footer />
    </>

  )
}

export default Layout

