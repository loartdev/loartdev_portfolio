import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { ArtMasonryLayout } from "../components/masonry/masonry-layout"
import Slideshow from "../components/slideshow";

const GalleryPage = () => {
  const artworks = useStaticQuery(graphql`
{
  allStrapiArtwork(filter: {locale: {eq: "en"}}) {
    edges {
      node {
        Slug
        author {
          Name
          ProfilePiture {
            localFile {
              absolutePath
              childImageSharp {
                gatsbyImageData(formats: [AUTO, WEBP], placeholder: DOMINANT_COLOR, width: 50, quality: 80)
              }
            }
          }
        }
        image {
          localFile {
            absolutePath
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP], placeholder: DOMINANT_COLOR, width: 350, quality: 100)
            }
          }
        }
        title
      }
    }
  }
}
  `)
  console.log(artworks);
  const images = []
  artworks.allStrapiArtwork.edges.forEach(function (img) {
    const imm = {
      id: img.node.Slug,
      title: img.node.title,
      src: img.node.image[0].localFile.childImageSharp.gatsbyImageData,
      user: {
        src: img.node.author.ProfilePiture.localFile.childImageSharp.gatsbyImageData,
        name: img.node.author.Name,
        job: ""
      }
    }
    images.push(imm)
  })
  return (
    <Layout>
      <div className="m-8 mt-24 min-h-screen h-auto">
        <ArtMasonryLayout images={images} />
      </div>
    </Layout>
  )
}

export default GalleryPage