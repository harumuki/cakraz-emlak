import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

const IndexPage = ({ data }) => {
  const adverts = data.allStrapiAdvert.edges
  console.log(adverts)
  return (
    adverts.length ? (
      <ul>
        {adverts.map(advert => (
          <Link to={advert.node.slug} key={advert.node.id}>
            <h5>{advert.node.title}</h5>
            {advert.node.thumbnail ? <Img fixed={advert.node.thumbnail.childImageSharp.fixed}/> : ''}
            <span>{advert.node.location}</span>
            <span>{advert.node.price}</span>
          </Link>
        ))}
      </ul>
    ) : <h1>Hiç ilan yok</h1>
  )
}

export const query = graphql`
  {
    allStrapiAdvert {
      edges {
        node {
          id
          slug
          title
          location
          price
          thumbnail {
            childImageSharp {
              fixed(width: 600) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
