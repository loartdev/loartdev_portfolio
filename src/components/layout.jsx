import React from "react";
import Nav from "./nav";
import Footer from '../components/footer';

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>

  )
}

export default Layout

