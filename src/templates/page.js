import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Title from '../components/Title'

import styles from './page.module.css'

const PageTemplate = () => (
  <StaticQuery
    query={graphql`
      {
        allStrapiPage(filter: { id: { eq: "$id" } }) {
          edges {
            node {
              id
              description
              slug
              title
            }
          }
        }
      }
    `}
    render={data => (
      <Layout title={data.strapiPage.title}>
        <Container>
          <Title className={styles.title}>{data.strapiPage.title}</Title>
          <p className={styles.paragraph}>{data.strapiPage.description}</p>
        </Container>
      </Layout>
    )}
  ></StaticQuery>
)

export default PageTemplate
