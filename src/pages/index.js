import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeroImg from '../components/HeroImg'
import Highlights from '../components/Highlights'
import Searchbox from '../components/Searchbox/Searchbox'

const IndexPage = ({data}) => {
  return (
    <Layout>
      <HeroImg image={data.homepage.heroimg.localFile.childImageSharp.fluid} height={550} />
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
