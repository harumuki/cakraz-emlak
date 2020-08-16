import React from 'react'
import { Helmet } from "react-helmet"
import Header from '../Header'

const Layout = ({children, title}) => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? title + ' | ' : ''}Çakraz Emlak</title>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Header />
      {children}
    </main>
  )
}

export default Layout