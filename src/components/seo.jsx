import { graphql } from "gatsby";
import React from "react";
import { useStaticQuery } from "gatsby";

function SEO({ title, bg, children }) {

  return (
    <>
      <title>{title} | LoArt & Dev</title>
      {children}
    </>
  )
}

export default SEO

export function Head() {
  const logo = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "logo.svg"}) {
        publicURL
      }
    }   
  `)
  return (
    <>
      <meta name="title" content="LoArt & Dev - The Ultimate Showcase of Simon Lopez's 3D Art, Game Design, and Web Development Mastery" />
      <meta name="description" content="LoArt & Dev: Simon Lopez's exceptional showcase of 3D art, game design, web development, and cat obsession. A must-see for anyone who appreciates feline-inspired creativity!" />
      <meta name="keywords" content="developer, web design, game design, game development, games, websites, 3D, 2D, Art, 3D Art, animation, web app, web development, cats, feline, obsession, creative, mastery, showcase" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="10 days" />
      <meta name="author" content="Simon Lopez Jaramillo" />
      <link id="" rel="icon" href={logo.file.publicURL} />
      <SEO />
    </>
  )
}