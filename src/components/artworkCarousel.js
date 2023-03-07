// Dependencies
import React from 'react';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export default function ArtCarousel() {
  // Get the latest Artworks
  const getImages = useStaticQuery(graphql`
    {
      allContentfulArtwork(filter: {node_locale: {eq: "es-CO"}}, limit: 8) {
        edges {
          node {
            images {
              gatsbyImageData(formats: AUTO, placeholder: DOMINANT_COLOR)
            }
            slug
          }
        }
      }
    }
  `)
  const images = []
  getImages.allContentfulArtwork.edges.forEach(function (image) {
    const artwork = {
      slug: image.node.slug,
      image: image.node.images[0].gatsbyImageData,
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