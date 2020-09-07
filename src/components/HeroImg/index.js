import React from 'react'
import Img from 'gatsby-image'

import styles from './hero-img.module.css'

const HeroImg = ({ image }) => (
  <div className={styles.heroImg}>
    <Img fluid={image} style={{ height: '100%' }} />
  </div>
)

export default HeroImg
