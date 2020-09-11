exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allStrapiAdvert(filter: { published: { eq: true } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
      allStrapiPage(filter: { published: { eq: true } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const adverts = result.data.allStrapiAdvert.edges

  adverts.forEach(advert => {
    if (!advert || !advert.node.id || !advert.node.slug) {
      return
    }

    actions.createPage({
      path: `/${advert.node.slug}`,
      component: require.resolve('./src/templates/advert.js'),
      context: {
        id: advert.node.id,
        slug: advert.node.slug,
      },
    })
  })

  const pages = result.data.allStrapiPage.edges

  pages.forEach(page => {
    actions.createPage({
      path: `/${page.node.slug}`,
      component: require.resolve('./src/templates/page.js'),
      context: {
        id: page.node.id,
        slug: page.node.slug,
      },
    })
  })
}
