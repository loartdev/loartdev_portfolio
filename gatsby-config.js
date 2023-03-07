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
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sitemap`,
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
    'gatsby-plugin-tailwindcss',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-3SK66T1MHQ", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/dev/**", "/admin/**"],
          // Defaults to https://www.googletagmanager.com
          //origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LoArt & Dev`,
        short_name: `LoArtDev`,
        start_url: `/`,
        background_color: `#0d0d0d`,
        theme_color: `#dbdbdb`,
        display: `standalone`,
      },
    },
  ],
};
