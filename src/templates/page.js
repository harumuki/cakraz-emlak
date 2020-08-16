
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const PageTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPage.title}</h1>
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