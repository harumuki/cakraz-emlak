import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Highlights from '../components/Highlights'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Highlights />
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
