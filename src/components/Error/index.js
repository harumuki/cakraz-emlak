import React from 'react'
import Title from '../Title'

import styles from './error.module.css'

const Error = ({ title, content }) => {
  return (
    <div className={styles.error}>
      <Title>{title}</Title>
      <p>{content}</p>
    </div>
  )
}

export default Error
