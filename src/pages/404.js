import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import Error from '../components/error'

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Error
        title="Aradığınız sayfayı bulamıyoruz."
        content="Aradığınız sayfa kaldırılmış, isim değiştirilmiş veya geçici olarak kullanılamıyor olabilir."
      />
    </Container>
  </Layout>
)

export default NotFoundPage
