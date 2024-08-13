import PropTypes from 'prop-types';

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img src={slide.image} alt={slide.title} className="slider-image" />
          <div className="slider-content">
            <h2 className="slider-title">{slide.title}</h2>
            <p className="slider-text">{slide.text}</p>
            <button className="slider-btn">{slide.button} Learn More</button>
          </div>
        </div>
      ))}
    </section>
  );
}

SliderContent.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  sliderImage: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      button: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SliderContent;
