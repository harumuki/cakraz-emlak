
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Title from '../components/Title'

import styles from './page.module.css'

const PageTemplate = ({ data }) => (
  <Layout title={data.strapiPage.title}>
    <Container>
      <Title className={styles.title}>{data.strapiPage.title}</Title>
      <p className={styles.paragraph}>
        {data.strapiPage.description}
      </p>
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
    }
  }
`