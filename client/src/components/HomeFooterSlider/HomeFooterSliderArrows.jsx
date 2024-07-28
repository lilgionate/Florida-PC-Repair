import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="slider-arrows">
      <span className="slider-arrow-left" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i>
      </span>
      <span className="slider-arrow-right" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </span>
    </div>
  );
}

export default Arrows;