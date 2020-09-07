import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Types, Locations } from './index'
import Container from '../Container'

import styles from './Searchbox.module.css'
import Advert from '../Advert'
import Stack from '../Stack'
import Title from '../Title'

const Searchbox = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiAdvert(filter: { published: { eq: true } }) {
        edges {
          node {
            id
            title
            location
            type
            slug
            price
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

  const [location, setLocation] = useState()
  const [type, setType] = useState()
  const [search, setSearch] = useState(false)
  const [filteredData, setFilteredData] = useState([])

  const showResults = () => {
    setFilteredData([])
    if (location && type) {
      data.allStrapiAdvert.edges.map(edge => {
        if (edge.node.location === location && edge.node.type === type) {
          setFilteredData(prevFilteredData => [...prevFilteredData, edge])
        }else {
          return false
        }
        return true
      })
      return setSearch(true)
    } else {
      return false
    }
  }

  return (
    <Container>
      <div className={styles.searchbox}>
        <Types type={type} setType={setType} />
        <Locations location={location} setLocation={setLocation} />
        <button type="button" className={styles.button} onClick={showResults}>
          Ara
        </button>
      </div>
      {search && (
        <div style={{ marginBottom: 150 }}>
          <Title>Arama Sonuçları</Title>
          {filteredData.length > 0 ? (
            <Stack>
              {filteredData.map(edge => (
                <Advert key={edge.node.id} advertData={edge.node} />
              ))}
            </Stack>
          ) : (
            <p style={{ textAlign: 'center' }}>Hiç Sonuç Yok</p>
          )}

          {/* TODO: Temizle Butonu */}
        </div>
      )}
    </Container>
  )
}

export default Searchbox
