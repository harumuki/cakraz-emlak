import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Location } from '../icons'

import styles from './advert.module.css'

const Advert = ({advertData}) => {
  return (
    <Link to={`/${advertData.slug}`}>
      <article className={styles.advert}>
        <div className={styles.hero}>
          <Img className={styles.heroImage} fluid={advertData.thumbnail.childImageSharp.fluid} />
          <span className={styles.date}>{advertData.created_at}</span>
        </div>
        <h3>{advertData.title}</h3>
        <div className={styles.footer}>
          <span className={styles.location}>
            <Location className={styles.icon} />
            <span>{advertData.location}</span>
          </span>
          <span className={styles.price}>{advertData.price}</span>
        </div>
      </article>
    </Link>
  )
}

export default Advert