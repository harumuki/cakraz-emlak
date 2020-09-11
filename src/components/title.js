import React from 'react'
import cx from 'classnames'

import styles from '../styles/title.module.css'

const Title = ({ children, tag, className }) => {
  const TagName = tag ? tag : 'h1'
  return (
    <TagName className={cx(TagName === 'h1' && styles.hero, className)}>
      {children}
    </TagName>
  )
}

export default Title
