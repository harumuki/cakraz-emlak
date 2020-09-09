import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Cakraz } from '../icons'

import styles from './logo.module.css'

const Logo = ({ solid }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Link to="/">
      {solid ? (
        <Cakraz />
      ) : (
        <Img fluid={data.file.childImageSharp.fluid} className={styles.logo} />
      )}
    </Link>
  )
}

export default Logo
