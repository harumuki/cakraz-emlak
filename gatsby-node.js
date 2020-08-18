/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
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

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getAdverts = makeRequest(graphql, `
    {
      allStrapiAdvert(filter: {published: {eq: true}}) {
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
      allStrapiPage(filter: {published: {eq: true}}) {
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