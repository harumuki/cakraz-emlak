import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Carousel from '../components/Carousel'
import { AdvertTitle, AdvertTable } from '../components/AdvertDetail'
import TextBox from '../components/TextBox'

const AdvertTemplate = ({ data }) => (
  <Layout title={data.strapiAdvert.title}>
    <Container>
      <AdvertTitle advert={data.strapiAdvert} />
      {data.strapiAdvert.images.length > 0 && (
        <Carousel images={data.strapiAdvert.images} />
      )}
      <AdvertTable advert={data.strapiAdvert} />
      <TextBox title="İlan Açıklaması">
        <p>{data.strapiAdvert.description}</p>
      </TextBox>
    </Container>
  </Layout>
)

export default AdvertTemplate

export const query = graphql`
  query AdvertTemplate($id: String!) {
    strapiAdvert(id: { eq: $id }) {
      id
      slug
      title
      created_at(locale: "tr", formatString: "DD MMMM YYYY")
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
      images {
        url
        localFile {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
