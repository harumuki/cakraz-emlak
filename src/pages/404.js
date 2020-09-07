import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Error from '../components/Error'

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
