import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './Searchbox.module.css'

export const Locations = ({ location, setLocation }) => {
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
      <label htmlFor="location">Konum</label>
      <select id="location" onBlur={e => setLocation(e.target.value)}>
        <option>Seçim yap</option>
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

export const Types = ({ type, setType }) => {
  return (
    <div className={styles.select}>
      <label htmlFor="type">Tip</label>
      <select id="type" onBlur={e => setType(e.target.value)}>
        <option>Seçim yap</option>
        <option value="kiralik">Kiralık</option>
        <option value="satilik">Satılık</option>
      </select>
    </div>
  )
}
