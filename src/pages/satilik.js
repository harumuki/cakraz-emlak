import React from 'react'
import { graphql } from 'gatsby'
import Title from '../components/Title'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Advert from '../components/Advert'
import Error from '../components/Error'
import Stack from '../components/Stack'

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
        ) : <Error content="Yakında tekrar kontrol edin" title="Hiç satılık ilan yok" /> }
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
