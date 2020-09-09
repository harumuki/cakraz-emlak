import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Title from '../components/Title'
import { Location } from '../components/icons'

import styles from './iletisim.module.css'

const Contact = ({ data }) => {
  return (
    <Layout title="İletişim">
      <Container>
        <Title className={styles.title}>İletişim Bilgileri</Title>
        <div className={styles.wrapper}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23857.61130429793!2d32.32060738623677!3d41.62977767151765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409b72335ea8fb4d%3A0x7820a074d3b17daf!2zQmFydMSxbiwgQmFydMSxbiBNZXJrZXovQmFydMSxbg!5e0!3m2!1sen!2str!4v1597965006468!5m2!1sen!2str"
              width="600"
              height="450"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              title="map"
            ></iframe>
          </div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <Location />
            </div>
            <div className={styles.content}>
              <p>{data.strapiHomepage.full_address}</p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    strapiHomepage {
      full_address
    }
  }
`

export default Contact
