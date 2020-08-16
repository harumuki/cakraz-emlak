import React from 'react'
import cx from 'classnames'

import styles from './title.module.css'

const Title = ({ children, tag }) => {
  const TagName = tag ? tag : 'h1'
  return <TagName className={cx(TagName === 'h1' && styles.hero)}>{children}</TagName>
}


export default Title
