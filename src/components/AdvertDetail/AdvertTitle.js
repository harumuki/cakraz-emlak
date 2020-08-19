import React from 'react'
import { Location } from '../icons'

import styles from './AdvertTitle.module.css'

const AdvertTitle = ({advert}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{advert.title}</h1>
      <span className={styles.price}>{advert.price}</span>
      <div className={styles.location}>
        <Location />
        <span>{advert.location}</span>
      </div>
    </div>
  )
}

export default AdvertTitle