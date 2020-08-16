
import React from 'react'
import { graphql } from 'gatsby'

const AdvertTemplate = ({ data }) => (
  <h1>{data.strapiAdvert.title}</h1>
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