import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Advert from '../Advert'
import Stack from '../Stack'
import Title from '../Title'

const SearchResults = ({ type, location }) => {
  const data = useStaticQuery(graphql`
    {
      adverts: allStrapiAdvert {
        edges {
          node {
            id
            slug
            title
            price
            location
            type
            created_at(locale: "tr", formatString: "DD MMMM YYYY")
            thumbnail {
              localFile {
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
    }
  `)

  const [filteredAdverts, setFilteredAdverts] = useState([])

  useEffect(() => {
    setFilteredAdverts([])

    data.adverts.edges.map(edge => {
      if (edge.node.location === location && edge.node.type === type) {
        setFilteredAdverts(prevState => [...prevState, edge])
      }
    })
  }, [data.adverts.edges, location, type])

  return (
    <div style={{ marginBottom: 150 }}>
      <Title>Arama Sonuçları</Title>
      <Stack>
        {filteredAdverts.map(edge => (
          <Advert advertData={edge.node} />
        ))}
      </Stack>
    </div>
  )
}

export default SearchResults
