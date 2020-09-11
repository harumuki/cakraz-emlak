import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import useWindowSize from '../hooks/useWindowSize'
import { Hamburger, Times } from './icons'

import styles from '../styles/navigation.module.css'

const Extra = ({ pages }) => {
  return pages.map(page => (
    <Link key={page.node.slug} to={`/${page.node.slug}`}>
      {page.node.title}
    </Link>
  ))
}

const Button = ({toggle, setToggle }) => {
  const size = useWindowSize()
  return size.width <= 960 && (
    <button className={styles.icon} onClick={() => setToggle(!toggle)}>
      {toggle ? <Times /> : <Hamburger />}
    </button>
  )
}

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

  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Button toggle={toggle} setToggle={setToggle} />

      <nav className={cx(styles.navigation, toggle && styles.active)}>
        <Link to="/">Anasayfa</Link>
        <Link to="/satilik">Satılık</Link>
        <Link to="/kiralik">Kiralık</Link>
        <Extra pages={data.allStrapiPage.edges} />
        <Link to="/iletisim">İletişim</Link>
      </nav>
    </>
  )
}

export default Navigation
