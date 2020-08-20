import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '../Container'
import Logo from '../Logo'
import ContactItem from '../ContactItem'
import { Location, Phone, Email } from '../icons'
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
      <Container flex classNames={styles.container}>
        <div className={styles.logo}>
          <Logo solid />
        </div>
        <div className={styles.info}>
          <ContactItem
            link={'tel:' + data.strapiHomepage.phone}
            title="Telefon"
            value={data.strapiHomepage.phone}
          >
            <Phone />
          </ContactItem>
          <ContactItem
            link="/iletisim"
            title="Adres"
            value={data.strapiHomepage.location}
          >
            <Location />
          </ContactItem>
          <ContactItem
            link={'mailto:'+data.strapiHomepage.email}
            title="Email"
            value={data.strapiHomepage.email}
          >
            <Email />
          </ContactItem>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
