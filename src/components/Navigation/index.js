import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import styles from './navigation.module.css'

const Navigation = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiPage {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  return (
    <nav className={styles.navigation}>
      <Link to="/">Anasayfa</Link>

      {data.allStrapiPage.edges.length > 0 && data.allStrapiPage.edges.map(page => (
        <Link key={page.node.slug} to={`/${page.node.slug}`}>{page.node.title}</Link>
      ))}
    </nav>
  )
}

export default Navigation
