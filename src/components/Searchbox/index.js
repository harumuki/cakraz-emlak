import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Container from '../Container'
import styles from './Searchbox.module.css'
import SearchResults from '../SearchResults'

const Searchbox = () => {
  const data = useStaticQuery(graphql`
    {
      kiralik: allStrapiAdvert(
        filter: { published: { eq: true }, type: { eq: "kiralik" } }
      ) {
        group(field: location, limit: 1) {
          edges {
            node {
              id
              location
            }
          }
        }
      }
      satilik: allStrapiAdvert(
        filter: { published: { eq: true }, type: { eq: "satilik" } }
      ) {
        group(field: location, limit: 1) {
          edges {
            node {
              id
              location
            }
          }
        }
      }
    }
  `)

  const [type, setType] = useState('default')
  const [location, setLocation] = useState('default')
  const [showResults, setShowResults] = useState(false)

  const handleSearch = () => {
    if (type !== 'default' && location !== 'default') {
      setShowResults(true)
      console.log(type, location)
    }
  }

  const Types = ({ setType }) => {
    return (
      <div className={styles.select}>
        <label htmlFor="type">Tür</label>
        <select
          defaultValue={type}
          onBlur={e => e.target.value !== 'default' && setType(e.target.value)}
          id="type"
        >
          <option value="default">
            Seçiniz
          </option>
          <option value="kiralik">Kiralık</option>
          <option value="satilik">Satılık</option>
        </select>
      </div>
    )
  }

  const Locations = ({ type, location, setLocation }) => {
    return (
      <div className={styles.select}>
        <label htmlFor="type">Konum</label>
        <select
          defaultValue={location}
          onBlur={e => setLocation(e.target.value)}
        >
          <option value="default">
            Seçiniz
          </option>
          {type &&
            type !== 'default' &&
            data[type].group.map(group => (
              <option key={group.edges[0].node.id}>
                {group.edges[0].node.location}
              </option>
            ))}
        </select>
      </div>
    )
  }

  return (
    <Container>
      <div className={styles.searchbox}>
        <Types setType={setType} />
        <Locations type={type} location={location} setLocation={setLocation} />
        <button onClick={handleSearch} type="button" className={styles.button}>
          Ara
        </button>
      </div>

      {showResults && <SearchResults type={type} location={location} />}
    </Container>
  )
}

export default Searchbox
