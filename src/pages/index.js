import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const IndexPage = ({ data }) => {
  const adverts = data.adverts.edges
  return (
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  )
}

export const query = graphql`
  {
    adverts: allStrapiAdvert {
      edges {
        node {
          id
          slug
          title
          location
          price
          thumbnail {
            childImageSharp {
              fixed(width: 600) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    homepage: strapiHomepage {
      title
      phone
      location
      email
      heroimg {
        childImageSharp {
          fixed(width: 1400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

export default IndexPage
