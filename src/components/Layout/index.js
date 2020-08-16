import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? title + ' | ' : ''}Çakraz Emlak</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
