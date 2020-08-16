import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import cx from 'classnames'
import { SliderNext, SliderPrevious } from '../components/icons'

import '@brainhubeu/react-carousel/lib/style.css'
import styles from './advert.module.css'

const AdvertTemplate = ({ data }) => (
  <Layout title={data.strapiAdvert.title}>
    <Container>
      <Carousel
        className={styles.carousel}
        itemWidth={1280}
        arrows={true}
        centered={true}
        arrowLeft={<SliderPrevious className={cx(styles.arrow)} />}
        arrowRight={<SliderNext className={cx(styles.arrow)} />}
        arrowLeftDisabled={
          <SliderPrevious className={cx(styles.arrow, styles.arrowDisabled)} />
        }
        arrowRightDisabled={
          <SliderNext className={cx(styles.arrow, styles.arrowDisabled)} />
        }
        addArrowClickHandler={true}
        keepDirectionWhenDragging={true}
        draggable={true}
      >
        {data.strapiAdvert.images.length > 1 &&
          data.strapiAdvert.images.map(image => (
            <img key={image.url} src={image.url} className={styles.image} />
          ))}
      </Carousel>
      <Dots className={styles.thumbnails} thumbnails={data.strapiAdvert.images.length > 1 &&
          data.strapiAdvert.images.map(image => (
            <img src={image.url} width={100} />
          ))} />
      <h1>{data.strapiAdvert.title}</h1>
    </Container>
  </Layout>
)

export default AdvertTemplate

export const query = graphql`
  query AdvertTemplate($id: String!) {
    strapiAdvert(id: { eq: $id }) {
      id
      slug
      title
      description
      location
      price
      type
      roomcount
      size
      buildage
      floorcount
      floorcurrent
      bathcount
      furnished
      incomplex
      heating
      images {
        url
      }
    }
  }
`
