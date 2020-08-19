import React from 'react'
import cx from 'classnames'

import styles from './TextBox.module.css'

const TextBox = ({ title, children, className }) => {
  return (
    <div class={cx(styles.wrapper, className)}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.table}>
        {children}
      </div>
    </div>
  )
}

export default TextBox