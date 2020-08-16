
import React from 'react'
import { graphql } from 'gatsby'

const PageTemplate = ({ data }) => (
  <h1>{data.strapiPage.title}</h1>
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