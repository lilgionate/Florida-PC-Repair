import PropTypes from 'prop-types';

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

Arrows.propTypes = {
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
};

export default Arrows;
