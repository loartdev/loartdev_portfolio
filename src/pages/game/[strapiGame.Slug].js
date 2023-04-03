import React from "react"
import { graphql } from "gatsby"

export default function GamePage() {
  return "this is a page"
}


export const query = graphql`
  query($slug: String) {
  strapiGame(Slug: {eq: $slug}) {
    Description {
      data {
        Description
      }
    }
    Title
    artworks {
      Slug
      title
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    authors {
      Name
      ProfilePiture {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    Screenshots {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`