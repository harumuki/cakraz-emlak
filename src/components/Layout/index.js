import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    {
      strapiHomepage {
        title
        description
        keywords
      }
    }
  `)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? title + ' | ' : ''}{data.strapiHomepage.title}</title>
        <meta name="description" content={data.strapiHomepage.description} />
        <meta name="keywords" content={data.strapiHomepage.keywords} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
