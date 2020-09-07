
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Title from '../components/Title'
import HeroImg from '../components/HeroImg'
import Reactmarkdown from 'react-markdown'

import styles from './page.module.css'

const PageTemplate = ({ data }) => (
  <Layout title={data.strapiPage.title}>
    <HeroImg image={data.strapiPage.heroimg.localFile.childImageSharp.fluid} />
    <Container>
      <Title className={styles.title}>{data.strapiPage.title}</Title>
      <Reactmarkdown source={data.strapiPage.description} />
    </Container>
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplate($id: String!) {
    strapiPage(id: {eq: $id}) {
      id
      slug
      title
      description
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