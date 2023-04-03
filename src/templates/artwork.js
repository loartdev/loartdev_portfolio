import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { SinglePageHero } from "../components/hero"
import Gallery from "@browniebroke/gatsby-image-gallery"
import { Seo } from "../components/seo"

export default function GamePage({ data }) {
  const images = data.strapiArtwork.image.map(({ localFile }) => localFile.childImageSharp)
  return (
    <>
      <Layout>
        <SinglePageHero slug={data.strapiArtwork.Slug} title={data.strapiArtwork.title} desc={data.strapiArtwork.Description.data.Description} />
        <div className="mx-12">
          <Gallery images={images} />
        </div>
      </Layout>
    </>
  )
}

export const Head = ({ data }) => (
  <Seo
    title={data.strapiArtwork.seo.metaTitle}
    description={data.strapiArtwork.seo.metaDescription}
    pathname={"art/" + data.strapiArtwork.Slug}
    robots={data.strapiArtwork.seo.metaRobots}
    keywords={data.strapiArtwork.seo.keywords}
    image={data.strapiArtwork.image[0].localFile.childImageSharp.full.images.fallback.src} />
)

export const query = graphql`
  query($slug: String) {
  strapiArtwork(Slug: {eq: $slug}) {
    Slug
    author {
      Name
      ProfilePiture {
        localFile {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              placeholder: DOMINANT_COLOR
              width: 50
              quality: 80
            )
          }
        }
      }
    }
    image {
      localFile {
        childImageSharp {
          thumb: gatsbyImageData(
            width: 270
            height: 270
            formats: [AUTO, WEBP]
            placeholder: DOMINANT_COLOR
          )
          full: gatsbyImageData(
            layout: FULL_WIDTH
            formats: [AUTO, WEBP]
            placeholder: DOMINANT_COLOR 
          )
        }
      }
    }
    title
    seo {
      canonicalURL
      metaTitle
      metaRobots
      metaDescription
      keywords
    }
    Description {
      data {
        Description
      }
    }
    game {
      Title
      Slug
    }
  }
}
`