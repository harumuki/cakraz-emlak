import React, { useState } from 'react'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import cx from 'classnames'
import { SliderNext, SliderPrevious } from './icons'

import 'slick-carousel/slick/slick.css'

import styles from '../styles/carousel.module.css'

const Carousel = ({ images }) => {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()

  const PrevArrow = ({ className, style, onClick }) => (
    <button className={cx(styles.arrowPrev, className)} onClick={onClick}>
      <SliderPrevious />
    </button>
  )

  const NextArrow = ({ className, style, onClick }) => (
    <button className={cx(styles.arrowNext, className)} onClick={onClick}>
      <SliderNext />
    </button>
  )

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    height: 480,
    asNavFor: nav2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  const thumbs = {
    focusOnSelect: true,
    arrows: false,
    asNavFor: nav1,
    variableWidth: true,
    centerMode: true,
    infinite: true,
  }

  return (
    <>
      <Slider
        {...settings}
        ref={slider1 => setNav1(slider1)}
        className={styles.carousel}
      >
        {images.map((node, index) => (
          <Img
            key={node.url}
            fluid={node.localFile.childImageSharp.full}
            imgStyle={{ objectFit: 'contain' }}
            className={styles.carouselImg}
          />
        ))}
      </Slider>

      <Slider
        {...thumbs}
        ref={slider2 => setNav2(slider2)}
        className={styles.thumbnails}
      >
        {images.map((node, index) => (
          <Img
            key={node.url}
            fluid={node.localFile.childImageSharp.thumb}
            className={styles.thumb}
          />
        ))}
      </Slider>
    </>
  )
}

export default Carousel
