import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import cx from 'classnames'
import { SliderNext, SliderPrevious } from '../icons'

import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from './carousel.module.css'

const Carousel = ({ images }) => {
  return (
    <CarouselProvider
      className={styles.carousel}
      naturalSlideWidth={1340}
      naturalSlideHeight={754}
      totalSlides={images.length}
      infinite={true}
    >
      <Slider>
        {images.map(image => (
          <Slide key={image.publicURL}>
            <img src={image.publicURL} className={styles.image} />
          </Slide>
        ))}
      </Slider>
      <ButtonBack className={cx(styles.button, styles.buttonBack)}>
        <SliderPrevious />
      </ButtonBack>
      <ButtonNext className={cx(styles.button, styles.buttonNext)}>
        <SliderNext />
      </ButtonNext>
    </CarouselProvider>
  )
}

export default Carousel
