import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import HeroImg from '../components/hero-img'
import Highlights from '../components/highlights'
import Searchbox from '../components/searchbox'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <HeroImg image={data.homepage.heroimg.localFile.childImageSharp.fluid} />
      <Searchbox />
      <Highlights />
    </Layout>
  )
}

export const query = graphql`
  {
    homepage: strapiHomepage {
      heroimg {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
