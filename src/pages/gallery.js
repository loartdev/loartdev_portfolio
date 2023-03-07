import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import MasonryLayout from "../components/masonry/masonry-layout"

const GalleryPage = () => {
  const artworks = useStaticQuery(graphql`
  {
    allContentfulArtwork(filter: {node_locale: {eq: "es-CO"}}, limit: 14) {
        edges {
          node {
            images {
              gatsbyImageData(formats: AUTO, placeholder: DOMINANT_COLOR)
            }
            slug
            title
            author {
              foto {
                gatsbyImageData(formats: AUTO, placeholder: TRACED_SVG, width: 100)
              }
            }
          }
        }
      }
    }
  `)

  const images = []
  artworks.allContentfulArtwork.edges.forEach(function (img) {
    const imm = {
      id: img.node.slug,
      src: img.node.images[0].gatsbyImageData,
      user: {
        src: img.node.author.foto.gatsbyImageData,
        name: "Simón López",
        job: ""
      }
    }
    images.push(imm)
  })
  return (
    <Layout>
      <MasonryLayout images={images} />
    </Layout>
  )
}

export default GalleryPage