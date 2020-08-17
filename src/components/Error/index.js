import React from 'react'
import Title from '../Title'

import styles from './error.module.css'

const Error = ({ code, title, content }) => {
  return (
    <div className={styles.error}>
      <span>{code}</span>
      <Title>{title}</Title>
      <p>{content}</p>
    </div>
  )
}

export default Error