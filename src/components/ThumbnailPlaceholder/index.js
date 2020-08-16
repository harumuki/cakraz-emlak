import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import cx from 'classnames'

import styles from './thumbnail-palceholder.module.css'

const ThumbnailPlaceholder = ({className, alt}) => {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        fluid(traceSVG: {blackOnWhite: true}) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)
  return (
    <div className={cx(styles.placeholder, className)}>
      <Img className={styles.image} fluid={data.file.childImageSharp.fluid} alt={alt} />
    </div>
  )
}

export default ThumbnailPlaceholder