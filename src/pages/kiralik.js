import React from 'react'
import { graphql } from 'gatsby'
import Title from '../components/Title'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Advert from '../components/Advert'
import Error from '../components/Error'
import Stack from '../components/Stack'

const RentPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        {data.allStrapiAdvert.edges.length > 0 ? (
          <>
            <Title>Kiralık</Title>
            <Stack>
              {data.allStrapiAdvert.edges.map(advert => (
                <Advert key={advert.node.id} advertData={advert.node} />
              ))}
            </Stack>
          </>
        ) : <Error content="Yakında tekrar kontrol edin" title="Hiç kiralık ilan yok" /> }
      </Container>
    </Layout>
  )
}

export default RentPage

export const query = graphql`
  {
    allStrapiAdvert(filter: { type: { eq: "kiralik" }, published: { eq: true } }) {
      edges {
        node {
          created_at(locale: "tr", formatString: "DD MMMM YYYY")
          id
          price
          type
          title
          slug
          location
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
