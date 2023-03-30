// Dependencies
import React from 'react';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export default function ArtCarousel() {
  // Get the latest Artworks
  const getImages = useStaticQuery(graphql`
    {
      allStrapiArtwork(filter: {locale: {eq: "en"}}, limit: 8) {
        edges {
          node {
            Slug
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(formats: [AUTO, WEBP], placeholder: DOMINANT_COLOR)
                }
              }
            }
          }
        }
      }
    }
  `)
  const images = []
  getImages.allStrapiArtwork.edges.forEach(function (image) {
    const artwork = {
      slug: image.node.Slug,
      image: image.node.image[0].localFile.childImageSharp.gatsbyImageData,
    }
    images.push(artwork)
  })

  return (
    <ScrollingCarousel>
      {images.map((artwork) => (
        <div key={artwork.slug} className='h-48 flex content-center m-4 rounded-xl w-1/4 max-w-96 overflow-hidden' >
          <GatsbyImage image={getImage(artwork.image)} className='' />
        </div>
      ))}
    </ScrollingCarousel>
  )

}