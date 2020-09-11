import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/container'
import Title from '../components/title'
import HeroImg from '../components/hero-img'
import Reactmarkdown from 'react-markdown'

import styles from '../styles/page.module.css'

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
    strapiPage(id: { eq: $id }) {
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
