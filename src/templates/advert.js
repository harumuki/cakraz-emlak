
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const AdvertTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiAdvert.title}</h1>
  </Layout>
)

export default AdvertTemplate

export const query = graphql`
  query AdvertTemplate($id: String!) {
    strapiAdvert(id: {eq: $id}) {
    id
    slug
    title
    description
    location
    price
    type
    roomcount
    size
    buildage
    floorcount
    floorcurrent
    bathcount
    furnished
    incomplex
    heating
    }
  }
`