import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Container from './container'
import Logo from './logo'
import { Location, Phone, Email } from './icons'
import styles from '../styles/footer.module.css'

const FooterItem = ({ children, title, value }) => {
  return (
    <div className={styles.item}>
      {children}
      <div className={styles.info}>
        <span>{title}</span>
        <span>{value}</span>
      </div>
    </div>
  )
}

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
          <a href={'tel:' + data.strapiHomepage.phone}>
            <FooterItem title="Telefon" value={data.strapiHomepage.phone}>
              <Phone />
            </FooterItem>
          </a>
          <Link to="/iletisim">
            <FooterItem title="Konum" value={data.strapiHomepage.location}>
              <Location />
            </FooterItem>
          </Link>
          <a href={'mailto:' + data.strapiHomepage.email}>
            <FooterItem title="Email" value={data.strapiHomepage.email}>
              <Email />
            </FooterItem>
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
