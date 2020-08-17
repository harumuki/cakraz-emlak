import React from 'react'
import { Phone, Location, Email } from '../icons'

import styles from './contact-item.module.css'

const ContactItem = ({icon, title, value}) => {
  return (
    <a href={title === 'Telefon' ? `tel:` + value : title === 'Email' ? `mailto:` + value : '/#'}>
      <div className={styles.item}>
        {
          icon === 'Phone' ? <Phone className={styles.icon} /> : icon === 'Location' ? <Location className={styles.icon} /> : icon === 'Email' ? <Email className={styles.icon} /> : <div/>
        }
        <div className={styles.info}>
          <span>{title}</span>
          <span>{value}</span>
        </div>
      </div>
    </a>
  )
}

export default ContactItem