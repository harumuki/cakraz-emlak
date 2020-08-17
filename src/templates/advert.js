import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Carousel from '../components/Carousel'

const AdvertTemplate = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allStrapiAdvert(filter: { id: { eq: "$id" } }) {
            edges {
              node {
                id
                slug
                title
                type
                size
                roomcount
                price
                location
                images {
                  url
                }
                heating
                furnished
                floorcurrent
                floorcount
                description
                created_at
                buildage
                bathcount
              }
            }
          }
        }
      `}
      render={data => (
        <Layout title={data.strapiAdvert.title}>
          <Container>
            {data.strapiAdvert.images.length > 0 && (
              <Carousel images={data.strapiAdvert.images} />
            )}
            <h1>{data.strapiAdvert.title}</h1>
          </Container>
        </Layout>
      )}
    ></StaticQuery>
  )
}

export default AdvertTemplate
