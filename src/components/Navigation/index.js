import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import styles from './navigation.module.css'

const Navigation = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiPage(filter: { published: { eq: true } }) {
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
      <Link to="/satilik">Satılık</Link>
      <Link to="/kiralik">Kiralık</Link>

      {data.allStrapiPage.edges.length > 0 && data.allStrapiPage.edges.map(page => (
        <Link key={page.node.slug} to={`/${page.node.slug}`}>{page.node.title}</Link>
      ))}
    </nav>
  )
}

export default Navigation
