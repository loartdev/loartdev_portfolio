import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import MasonryLayout, { ArtMasonryLayout } from "../components/masonry/masonry-layout"
import Slideshow from "../components/slideshow";

const GalleryPage = () => {
  const artworks = useStaticQuery(graphql`
  {
    allContentfulArtwork(filter: {node_locale: {eq: "en-US"}}, limit: 14) {
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
      title: img.node.title,
      src: img.node.images[0].gatsbyImageData,
      user: {
        src: img.node.author.foto.gatsbyImageData,
        name: "Simon Lopez",
        job: ""
      }
    }
    images.push(imm)
  })
  return (
    <Layout>
      <div className="m-">
        <Slideshow images={images} />
      </div>
      <div className="m-8">
        <ArtMasonryLayout images={images} />
      </div>
    </Layout>
  )
}

export default GalleryPage