import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '../Container'

import styles from './Searchbox.module.css'

const Locations = () => {
  const data = useStaticQuery(graphql`
    {
      locations: allStrapiAdvert(filter: { published: { eq: true } }) {
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
  return (
    <div className={styles.select}>
      <label for="location">Konum</label>
      <select id="location" defaultValue={'Default'}>
        <option value="Default" disabled hidden>
          Konum Seçiniz
        </option>
        {data.locations.group.map(group => {
          return (
            <option key={group.edges[0].node.id}>
              {group.edges[0].node.location}
            </option>
          )
        })}
      </select>
    </div>
  )
}

const Types = () => {
  return (
    <div className={styles.select}>
      <label for="type">Tip</label>
      <select id="type" defaultValue={'Kiralık'}>
        <option value="kiralik">Kiralık</option>
        <option value="satilik">Satılık</option>
      </select>
    </div>
  )
}

const Searchbox = () => {
  return (
    <Container>
      <div className={styles.searchbox}>
        <Types />
        <Locations />
        <button type="button" className={styles.button}>Ara</button>
      </div>
    </Container>
  )
}

export default Searchbox
