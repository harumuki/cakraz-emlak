import React from 'react'
import cx from 'classnames'

import styles from './container.module.css'

const Container = ({ children, flex }) => (
  <div className={cx(styles.container, flex && styles.flex)}>{children}</div>
)

export default Container
