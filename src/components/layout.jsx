import React from "react";
import Nav from "./nav";
import SEO from "./seo";
import Footer from '../components/footer';

function Layout({ title, children }) {
  return (
    <>
      <SEO title={title} />
      <Nav />
      {children}
      <Footer />
    </>

  )
}

export default Layout

