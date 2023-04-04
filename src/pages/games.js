import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { GameMasonryLayout } from "../components/masonry/masonry-layout"

const GamesPage = () => {
  const artworks = useStaticQuery(graphql`
{
  allStrapiGame(filter: {locale: {eq: "en"}}) {
    edges {
      node {
        Slug
        Title
        Screenshots {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP, AVIF], placeholder: DOMINANT_COLOR, width: 350, quality: 70)
            }
          }
        }
        authors {
          Name
          ProfilePiture {
            localFile {
              childImageSharp {
                gatsbyImageData(formats: [AUTO, WEBP, AVIF], placeholder: DOMINANT_COLOR, width: 50, quality: 70)
              }
            }
          }
        }
        ShortDescription
      }
    }
  }
}
  `)
  //console.log(artworks);
  const images = []
  artworks.allStrapiGame.edges.forEach(function (img) {
    const imm = {
      id: img.node.Slug,
      title: img.node.Title,
      desc: img.node.ShortDescription,
      src: img.node.Screenshots[0].localFile.childImageSharp.gatsbyImageData,
    }
    images.push(imm)
  })
  return (
    <Layout>
      <div className="m-8 mt-24 min-h-screen h-auto">
        <GameMasonryLayout images={images} />
      </div>
    </Layout>
  )
}

export default GamesPage