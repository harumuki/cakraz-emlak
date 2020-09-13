import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'

const Layout = ({
  children,
  title,
  description,
  header = true,
  footer = true,
}) => {
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
        <title>
          {title ? title + ' | ' : ''}
          {data.strapiHomepage.title}
        </title>
        <meta
          name="description"
          content={description ? description : data.strapiHomepage.description}
        />
        <meta name="keywords" content={data.strapiHomepage.keywords} />
      </Helmet>
      {header && <Header />}
      <main>{children}</main>
      {footer && <Footer />}
    </>
  )
}

export default Layout
