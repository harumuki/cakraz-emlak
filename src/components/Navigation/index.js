import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import useWindowSize from '../../hooks/useWindowSize'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Hamburger, Times } from '../icons'
import CONSTS from '../../consts'
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
      {size.width <= CONSTS.MOBILE_SIZE && (
        <div className={styles.icon}>
          {console.log(toggle)}
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
          styles.hidden,
          toggle && styles.active,
          size.width > CONSTS.MOBILE_SIZE && styles.active
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
