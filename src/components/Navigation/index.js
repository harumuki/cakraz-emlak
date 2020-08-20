import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import useWindowSize from '../../hooks/useWindowSize'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Hamburger, Times } from '../icons'

import styles from './navigation.module.css'

const Navigation = () => {
  const [toggle, setToggle] = useState(false)

  const size = useWindowSize()

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
    <>
      {size.width <= 960 && (
        <div className={styles.icon}>
          {!toggle && (
            <Hamburger onClick={() => setToggle(true)} />
          )}
          {toggle && (
            <Times onClick={() => setToggle(false)} />
          )}
        </div>
      )}
      <nav
        className={cx(
          styles.navigation,
          size.width <= 960 && !toggle && styles.hidden
        )}
      >
        <Link to="/">Anasayfa</Link>
        <Link to="/satilik">Satılık</Link>
        <Link to="/kiralik">Kiralık</Link>

        {data.allStrapiPage.edges.length > 0 &&
          data.allStrapiPage.edges.map(page => (
            <Link key={page.node.slug} to={`/${page.node.slug}`}>
              {page.node.title}
            </Link>
          ))}
      </nav>
    </>
  )
}

export default Navigation
