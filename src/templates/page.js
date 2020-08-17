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
        strapiPage(id: { eq: "$id" }) {
          title
          slug
          id
          description
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
