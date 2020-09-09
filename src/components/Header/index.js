import React from 'react'
import Container from '../Container'
import Logo from '../Logo'
import Navigation from '../Navigation'

import styles from './header.module.css'

const Header = () => (
  <header className={styles.header}>
    <Container flex>
      <Logo />
      <Navigation />
    </Container>
  </header>
)

export default Header
