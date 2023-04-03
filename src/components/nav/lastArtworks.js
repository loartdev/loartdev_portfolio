import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const ArtworksLinks = () => {
  // Get artworks
  const artworks = useStaticQuery(graphql`
    {
       allStrapiArtwork(
        limit: 8
        filter: {locale: {eq: "en"}}
        sort: {updatedAt: DESC}
      ) {
        edges {
          node {
            Slug
            title
          }
        }
      }
    }
  `)
  //console.log(artworks);
  return (
    <>{
      artworks.allStrapiArtwork.edges.map((art, index) => (
        <Link key={"a012-" + index} to={"/art/" + art.node.Slug}>
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