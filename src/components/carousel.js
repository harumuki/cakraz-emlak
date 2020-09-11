import React, { useState } from 'react'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import cx from 'classnames'
import { SliderNext, SliderPrevious } from './icons'

import 'slick-carousel/slick/slick.css'

import styles from '../styles/carousel.module.css'

const Carousel = ({ images }) => {
  const [hero, setHero] = useState()
  const [thumbnails, setThumbnails] = useState()

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

  const heroSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    height: 480,
    asNavFor: thumbnails,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  const thumbnailsSettings = {
    focusOnSelect: true,
    arrows: false,
    asNavFor: hero,
    variableWidth: true,
    centerMode: true,
    infinite: true,
  }

  return (
    <>
      <Slider
        {...heroSettings}
        ref={hero => setHero(hero)}
        className={styles.carousel}
      >
        {images.map(node => (
          <Img
            key={node.url}
            fluid={node.localFile.childImageSharp.full}
            imgStyle={{ objectFit: 'contain' }}
            className={styles.carouselImg}
          />
        ))}
      </Slider>

      <Slider
        {...thumbnailsSettings}
        ref={thumbnails => setThumbnails(thumbnails)}
        className={styles.thumbnails}
      >
        {images.map(node => (
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
