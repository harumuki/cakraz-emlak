/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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
      images: [File]
    }
  `
  createTypes(typeDefs)
}