import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Location } from '../icons'
import ThumbnailPlaceholder from '../ThumbnailPlaceholder'

import styles from './advert.module.css'

const Advert = ({ advertData }) => {
  return (
    <Link to={`/${advertData.slug}`} alt={advertData.title}>
      <article className={styles.advert}>
        <div className={styles.hero}>
          {advertData?.thumbnail?.localFile?.childImageSharp ? (
            <Img
              className={styles.heroImage}
              fluid={advertData.thumbnail.localFile.childImageSharp.fluid}
              alt={advertData.alt}
            />
          ) : (
              <ThumbnailPlaceholder
                className={styles.heroImage}
                alt={advertData.title}
              />
            )}
          <div className={styles.badges}>
            <span>{advertData.created_at}</span>
            <span>{advertData.type === 'satilik' ? 'Satılık' : 'Kiralık'}</span>
          </div>
        </div>
        <h3>{advertData.title}</h3>
        <div className={styles.footer}>
          <span className={styles.location}>
            <Location className={styles.icon} />
            <span>{advertData.location}</span>
          </span>
          <span className={styles.price}>{advertData.price}</span>
        </div>
      </article>
    </Link>
  )
}

export const query = graphql`
  fragment Advert on StrapiAdvert {
    id
    slug
    title
    price
    location
    type
    created_at(locale: "tr", formatString: "DD MMMM YYYY")
    highlight
    thumbnail {
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Advert
