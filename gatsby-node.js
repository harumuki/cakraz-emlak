/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type StrapiAdvert implements Node {
      id: String
      slug: String
      title: String
      description: String
      location: String
      price: String
      type: String
      roomcount: String
      size: String
      buildage: Int
      floorcount: String
      floorcurrent: String
      bathcount: Int
      furnished: Boolean
      incomplex: Boolean
      heating: String
      thumbnail: File
      images: Images
      created_at: Date
    }
    type StrapiPage implements Node {
      id: String
      title: String
      slug: String
      description: String
    }
    type StrapiHomepage implements Node {
      title: String
      phone: String
      location: String
      email: String
      heroimg: File
    }
    type Images implements Node {
      imageFile: [File]
    }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getAdverts = makeRequest(graphql, `
    {
      allStrapiAdvert {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiAdvert.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/advert.js`),
        context: {
          id: node.id,
          slug: node.slug
        },
      })
    })
  });

  const getPages = makeRequest(graphql, `
    {
      allStrapiPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiPage.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/page.js`),
        context: {
          slug: node.slug,
          id: node.id,
        },
      })
    })
  });
  
  return Promise.all([getAdverts, getPages])
};

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    StrapiAdvertImages: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.url}`,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}