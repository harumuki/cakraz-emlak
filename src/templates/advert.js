import React from 'react'
import { graphql } from 'gatsby'
import Reactmarkdown from 'react-markdown'
import Layout from '../components/layout'
import Container from '../components/container'
import Carousel from '../components/carousel'
import AdvertTitle from '../components/advert-title'
import AdvertTable from '../components/advert-table'
import TextBox from '../components/textbox'

const AdvertTemplate = ({ data }) => (
  <Layout title={data.strapiAdvert.title} description={data.strapiAdvert.description}>
    <Container>
      <AdvertTitle advert={data.strapiAdvert} />
      {data.strapiAdvert.images.length > 0 && (
        <Carousel images={data.strapiAdvert.images} />
      )}
      <AdvertTable advert={data.strapiAdvert} />
      <TextBox title="İlan Açıklaması">
        <Reactmarkdown source={data.strapiAdvert.description} />
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
      status
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
