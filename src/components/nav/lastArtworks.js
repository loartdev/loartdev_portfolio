import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const ArtworksLinks = () => {
  // Get artworks
  const artworks = useStaticQuery(graphql`
    {
      allContentfulArtwork(
        limit: 8
        filter: {node_locale: {eq: "en-US"}}
        sort: {updatedAt: DESC}
      ) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)
  console.log(artworks);
  return (
    <>{
      artworks.allContentfulArtwork.edges.map((art, index) => (
        <Link key={"a012-" + index} to={art.node.slug == null ? '' : art.node.slug}>
          <div className='flex space-x-4 hover:text-theme-accent'>
            {art.node.title}
          </div>
        </Link>
      ))
    }
    </>
  )
}

export default ArtworksLinks