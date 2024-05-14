import React from 'react';
import './Hero-Bottom.scss'; 

import bgImage from '../../assets/hero-bottom.jpg';

const HeroBottom = () => {
  return (
    <div className="hero-bottom-container">
      <div className="hero-bottom-background" >
        <img className='hero-bottom-img' src={bgImage} alt="" />
        <div className="hero-bottom-content">
          <h1 className="hero-bottom-title">Need Your Computer Repaired?</h1>
          <button className="hero-bottom-button">
            Get a Free Diagnostic
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
