import React from 'react';
import Img from 'gatsby-image'

const HeroImg = ({image, height}) => (
  <Img fluid={image} style={{maxHeight: height}} imgStyle={{
    height: height,
  }}  />
)

export default HeroImg