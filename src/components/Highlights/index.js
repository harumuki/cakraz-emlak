import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '../Container'
import Title from '../Title'
import Advert from '../Advert'
import Stack from '../Stack'

const Highlights = () => {
  const data = useStaticQuery(graphql`
    {
      adverts: allStrapiAdvert(limit: 3) {
        edges {
          node {
            id
            slug
            title
            price
            location
            created_at
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
  `)
  return (
    <section>
      <Container>
        <Title>Öne Çıkan İlanlar</Title>
        <Stack>
          {data.adverts && data.adverts.edges.map(advert => (
            <Advert key={advert.node.slug} advertData={advert.node} />
          ))}
        </Stack>
      </Container>
    </section>
  )
}

export default Highlights