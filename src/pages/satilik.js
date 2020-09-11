import React from 'react'
import { graphql } from 'gatsby'
import Title from '../components/title'
import Layout from '../components/layout'
import Container from '../components/container'
import Advert from '../components/advert'
import Error from '../components/error'
import Stack from '../components/stack'

const SalePage = ({ data }) => {
  return (
    <Layout title="Satılık İlanlar">
      <Container>
        {data.allStrapiAdvert.edges.length > 0 ? (
          <>
            <Title>Satılık</Title>
            <Stack>
              {data.allStrapiAdvert.edges.map(advert => (
                <Advert key={advert.node.id} advertData={advert.node} />
              ))}
            </Stack>
          </>
        ) : (
          <Error
            content="Yakında tekrar kontrol edin"
            title="Hiç satılık ilan yok"
          />
        )}
      </Container>
    </Layout>
  )
}

export default SalePage

export const query = graphql`
  {
    allStrapiAdvert(
      filter: { type: { eq: "satilik" }, published: { eq: true } }
    ) {
      edges {
        node {
          ...Advert
        }
      }
    }
  }
`
