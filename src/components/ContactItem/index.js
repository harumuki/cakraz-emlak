import React from 'react'
import { Phone, Location, Email } from '../icons'

import styles from './contact-item.module.css'

const ContactItem = ({icon, title, value}) => {
  return (
    <div className={styles.item}>
      {
        icon === 'Phone' ? <Phone className={styles.icon} /> : icon === 'Location' ? <Location className={styles.icon} /> : icon === 'Email' ? <Email className={styles.icon} /> : <div/>
      }
      <div className={styles.info}>
        <span>{title}</span>
        <span>{value}</span>
      </div>
    </div>
  )
}

export default ContactItem