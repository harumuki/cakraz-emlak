import React from 'react';
import Img from 'gatsby-image'
import cx from 'classnames';

import styles from "./HeroImg.module.css"

const HeroImg = ({image, height}) => (
  <Img fluid={image} style={{maxHeight: height}} imgStyle={{
    height: height,
  }}  />
)

export default HeroImg