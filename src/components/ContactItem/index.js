import React from 'react'
import { Link } from 'gatsby'

import styles from './contact-item.module.css'

const ContactItem = ({ children, title, value, link }) => {
  return title !== 'Adres' ? (
    <a href={link}>
      <div className={styles.item}>
        {children}
        <div className={styles.info}>
          <span>{title}</span>
          <span>{value}</span>
        </div>
      </div>
    </a>
  ) : (
    <Link to={link}>
      <div className={styles.item}>
        {children}
        <div className={styles.info}>
          <span>{title}</span>
          <span>{value}</span>
        </div>
      </div>
    </Link>
  )
}

export default ContactItem
