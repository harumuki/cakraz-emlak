import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from './container'
import Title from './title'
import Advert from './advert'
import Stack from './stack'
import Error from './error'

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
