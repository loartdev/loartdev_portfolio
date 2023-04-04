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


        <div className=" w-[95vw] max-w-[1000px] md:w-3/4 lg:w-2/3 mx-auto mb-12">
          <Gallery rowMargin={0} images={images} />
          {data.strapiArtwork.ModelView.map(model => (
            <>
              <iframe className="w-full h-96 mt-12 rounded-xl" title={model.Title}
                frameborder="0" allowfullscreen mozallowfullscreen="true"
                webkitallowfullscreen="true" allow="autoplay; fullscreen"
                xr-spatial-tracking execution-while-out-of-viewport
                execution-while-not-rendered web-share
                src={model.ModelUrl} />
              <a href={model.UrlToModel} className="text-theme-accent font-bold" target="_blank" rel="nofollow"> {model.Title} </a> by
              <a href={model.UrlToModel} className="text-theme-accent font-bold" target="_blank" rel="nofollow"> LoArt & Dev </a> on
              <a href={model.UrlToModel} className="text-theme-accent font-bold" target="_blank" rel="nofollow">Sketchfab</a>
            </>
          ))
          }

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
    ModelView {
      ModelUrl
      Title
      UrlToModel
    }
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
            height: 300
            width: 300
            formats: [AUTO, WEBP, AVIF]
            placeholder: DOMINANT_COLOR
            transformOptions: {cropFocus: CENTER}
          )
          full: gatsbyImageData(
            layout: FULL_WIDTH
            formats: [AUTO, WEBP, AVIF]
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