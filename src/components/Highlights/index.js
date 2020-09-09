import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '../Container'
import Title from '../Title'
import Advert from '../Advert'
import Stack from '../Stack'
import Error from '../Error'

const Highlights = () => {
  const data = useStaticQuery(graphql`
    {
      adverts: allStrapiAdvert(
        filter: { published: { eq: true }, highlight: { eq: true } }
      ) {
        edges {
          node {
            ...Advert
          }
        }
      }
    }
  `)
  return data.adverts.edges.length > 0 ? (
    <section>
      <Container>
        <Title>Öne Çıkan İlanlar</Title>
        <Stack>
          {data.adverts &&
            data.adverts.edges.map(advert => (
              <Advert key={advert.node.slug} advertData={advert.node} />
            ))}
        </Stack>
      </Container>
    </section>
  ) : (
    <Error title="Hiç ilan yok" content="Daha sonra tekrar kontrol edin." />
  )
}

export default Highlights
