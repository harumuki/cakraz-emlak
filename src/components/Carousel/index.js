import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from 'pure-react-carousel'
import Img from 'gatsby-image'
import cx from 'classnames'
import { SliderNext, SliderPrevious } from '../icons'

import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from './carousel.module.css'

const Carousel = ({ images }) => {
  return (
    <>
      <CarouselProvider
        className={styles.carousel}
        naturalSlideWidth={1310}
        naturalSlideHeight={754}
        totalSlides={images.length}
        infinite={true}
      >
        <div className={styles.hero}>
          <Slider className={styles.slider}>
            {images.map((image, index) => (
              <Slide index={index} key={image.url}>
                <Img fluid={image.imageFile.childImageSharp.fluid} className={styles.image} />
              </Slide>
            ))}
          </Slider>
          <ButtonBack className={cx(styles.button, styles.buttonBack)}>
            <SliderPrevious />
          </ButtonBack>
          <ButtonNext className={cx(styles.button, styles.buttonNext)}>
            <SliderNext />
          </ButtonNext>
        </div>
        <div className={styles.thumbnails}>
          {images.map((image, index) => {
            return (
              <Dot slide={index} className={styles.thumbnail}>
                <img src={image.url} />
              </Dot>
            )
          })}
        </div>
      </CarouselProvider>
    </>
  )
}

export default Carousel
