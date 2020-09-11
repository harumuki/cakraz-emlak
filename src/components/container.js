import React from 'react'
import cx from 'classnames'

import styles from '../styles/container.module.css'

const Container = ({ children, flex, classNames }) => (
  <div
    className={cx(
      styles.container,
      flex && styles.flex,
      classNames && classNames
    )}
  >
    {children}
  </div>
)

export default Container
