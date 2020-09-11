import React from 'react'
import cx from 'classnames'

import styles from '../styles/textbox.module.css'

const TextBox = ({ title, children, className }) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.table}>{children}</div>
    </div>
  )
}

export default TextBox
