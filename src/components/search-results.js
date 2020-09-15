import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Advert from './advert'
import Stack from './stack'
import Title from './title'

const SearchResults = ({ type, location, setShowResults }) => {
  const data = useStaticQuery(graphql`
    {
      adverts: allStrapiAdvert {
        edges {
          node {
            ...Advert
          }
        }
      }
    }
  `)

  const [filteredAdverts, setFilteredAdverts] = useState([])
  const resultsRef = useRef(null)

  useEffect(() => {
    setFilteredAdverts(
      data.adverts.edges.filter(
        edge => edge.node.location === location && edge.node.type === type
      )
    )

    if (setFilteredAdverts.length) {
      resultsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }, [data.adverts.edges, location, type, setShowResults])

  return (
    <div style={{ marginBottom: 150, paddingTop: 50 }} ref={resultsRef}>
      <Title>Arama Sonuçları</Title>
      <Stack>
        {filteredAdverts.map(edge => (
          <Advert key={edge.node.id} advertData={edge.node} />
        ))}
      </Stack>
    </div>
  )
}

export default SearchResults
