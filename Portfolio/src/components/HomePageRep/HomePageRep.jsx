import React from 'react'

import Builds from '../Builds/Builds';
import Repairs from '../Repairs/Repairs';
import Passion from '../OurPassion/OurPassion';
import Featured from '../Featured/FeaturedCarousel';
import Supported from '../Supported/SupportedCarousel';
import OurServices from '../OurServices/OurServices';

import Slider from '../ExpandingCards/ExpandingCards'; 
import '../ExpandingCards/Card.scss'; 

export default function HomePageRep() {
  return (
    <>
      <Slider />
      <Featured />
      <OurServices />
      <Repairs />  
      <Builds />
      <Supported />
      <Passion />
    </>
  )
}
