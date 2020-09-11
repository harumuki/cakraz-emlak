import React from 'react'
import Container from './container'
import Logo from './logo'
import Navigation from './navigation'

import styles from '../styles/header.module.css'

const Header = () => (
  <header className={styles.header}>
    <Container flex>
      <Logo />
      <Navigation />
    </Container>
  </header>
)

export default Header
