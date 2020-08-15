import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
      {data.allStrapiAdvert.edges.map(advert => (
        <li key={advert.node.id}>
          <Img fixed={advert.node.thumbnail.childImageSharp.fixed} width="350" />
          <span>{advert.node.title}</span>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export const query = graphql`
  {
    allStrapiAdvert {
      edges {
        node {
          id
          slug
          title
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
  }
`

export default IndexPage
