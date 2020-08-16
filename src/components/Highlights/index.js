import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '../Container'
import Title from '../Title'
import Advert from '../Advert'

import styles from './highlights.module.css'

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
        <div className={styles.highlightsWrapper}>
          {data.adverts && data.adverts.edges.map(advert => (
            <Advert key={advert.node.slug} advertData={advert.node} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Highlights