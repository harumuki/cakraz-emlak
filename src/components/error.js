import React from 'react'
import Title from './title'

import styles from '../styles/error.module.css'

const Error = ({ title, content }) => {
  return (
    <div className={styles.error}>
      <Title>{title}</Title>
      <p>{content}</p>
    </div>
  )
}

export default Error
