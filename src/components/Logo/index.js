import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './logo.module.css'

const Logo = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Link to="/"><Img fluid={data.file.childImageSharp.fluid} className={styles.logo} /></Link>}
  ></StaticQuery>
)


export default Logo
