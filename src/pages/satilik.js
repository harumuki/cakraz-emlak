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
    <Layout>
      <Container>
          {data.allStrapiAdvert.edges.length > 0 && <Title>Satılık</Title>}
        <Stack>
          {data.allStrapiAdvert && data.allStrapiAdvert.edges.length > 0 ? data.allStrapiAdvert.edges.map(advert => {
            return <Advert key={advert.node.id} advertData={advert.node} />
          }): <Error content="Yakında tekrar kontrol edin" title="Hiç satılık ilan yok" />}
        </Stack>
      </Container>
    </Layout>
  )
}

export default SalePage

export const query = graphql`
  {
    allStrapiAdvert(filter: { type: { eq: "satilik" } }) {
      edges {
        node {
          created_at
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
