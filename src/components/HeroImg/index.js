import React from 'react';
import Img from 'gatsby-image'

const HeroImg = ({image, height}) => (
  <Img fluid={image} style={{maxHeight: height}} imgStyle={{
    maxHeight: height,
  }}  />
)

export default HeroImg