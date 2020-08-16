import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '../Container'
import Logo from '../Logo'
import ContactItem from '../ContactItem'

import styles from './footer.module.css'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      strapiHomepage {
        phone
        location
        email
      }
    }
  `)
  return (
    <footer className={styles.footer}>
      <Container flex>
        <Logo />
        <div className={styles.info}>
          {data.strapiHomepage.phone && <ContactItem icon="Phone" title="Telefon" value={data.strapiHomepage.phone} />}
          {data.strapiHomepage.location && <ContactItem icon="Location" title="Adres" value={data.strapiHomepage.location} />}
          {data.strapiHomepage.email && <ContactItem icon="Email" title="Email" value={data.strapiHomepage.email} />}
        </div>
      </Container>
    </footer>
  )
}

export default Footer