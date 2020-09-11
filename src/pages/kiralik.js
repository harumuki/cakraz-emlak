import React from 'react'
import { graphql } from 'gatsby'
import Title from '../components/title'
import Layout from '../components/layout'
import Container from '../components/container'
import Advert from '../components/advert'
import Error from '../components/error'
import Stack from '../components/stack'

const RentPage = ({ data }) => {
  return (
    <Layout title="Kiralık İlanlar">
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
        ) : (
          <Error
            content="Yakında tekrar kontrol edin"
            title="Hiç kiralık ilan yok"
          />
        )}
      </Container>
    </Layout>
  )
}

export default RentPage

export const query = graphql`
  {
    allStrapiAdvert(
      filter: { type: { eq: "kiralik" }, published: { eq: true } }
    ) {
      edges {
        node {
          ...Advert
        }
      }
    }
  }
`
