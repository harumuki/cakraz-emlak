import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Title from '../components/Title'
import ContactItem from '../components/ContactItem'
import { Location, Phone, Email } from '../components/icons'

import styles from './iletisim.module.css'

const Contact = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Title>İletişim Bilgileri</Title>
        <div className={styles.wrapper}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23857.61130429793!2d32.32060738623677!3d41.62977767151765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409b72335ea8fb4d%3A0x7820a074d3b17daf!2zQmFydMSxbiwgQmFydMSxbiBNZXJrZXovQmFydMSxbg!5e0!3m2!1sen!2str!4v1597965006468!5m2!1sen!2str"
              width="600"
              height="450"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
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
              value={data.strapiHomepage.full_address}
            >
              <Location />
            </ContactItem>
            <ContactItem
              link={'mailto:' + data.strapiHomepage.email}
              title="Email"
              value={data.strapiHomepage.email}
            >
              <Email />
            </ContactItem>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    strapiHomepage {
      email
      full_address
      location
      phone
    }
  }
`

export default Contact
