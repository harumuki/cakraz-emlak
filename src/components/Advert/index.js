import React from 'react'
import Img from 'gatsby-image'

import styles from './advert.module.css'

const Advert = ({advertData}) => {
  return (
    <article className={styles.advert}>
      <div className={styles.hero}>
        <Img className={styles.heroImage} fluid={advertData.thumbnail.childImageSharp.fluid} />
        <span className={styles.date}>{advertData.created_at}</span>
      </div>
      <h3>{advertData.title}</h3>
      <div className={styles.footer}>
        <span>
          <i></i> {advertData.location}
        </span>
        <span className={styles.price}>{advertData.price}</span>
      </div>
    </article>
  )
}

export default Advert