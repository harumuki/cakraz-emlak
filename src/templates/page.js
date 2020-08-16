
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Title from '../components/Title'
const PageTemplate = ({ data }) => (
  <Layout title={data.strapiPage.title}>
    <Title>{data.strapiPage.title}</Title>
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