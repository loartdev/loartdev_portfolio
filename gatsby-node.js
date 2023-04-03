exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allStrapiArtwork(filter: {}, sort: {Slug: ASC}) {
        edges {
          node {
            Slug
          }
        }
      }
    }
  `)
  data.allStrapiArtwork.edges.forEach(edge => {
    const slug = edge.node.Slug
    actions.createPage({
      path: "/art/" + slug,
      component: require.resolve(`./src/templates/artwork.js`),
      context: { slug: slug },
    })
  })
}