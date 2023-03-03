/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `LoArt & Dev`,
    description: "LoArt & Dev: Simon Lopez's exceptional showcase of 3D art, game design, web development, and cat obsession.A must- see for anyone who appreciates feline- inspired creativity!",
    twitterUsername: '@LoArtDev',
    image: `logo.svg`,
    imageSite: `siteScreen.png`,
    siteUrl: process.env.WEB_URL,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-tailwindcss'
  ],
};
