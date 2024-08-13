import PropTypes from 'prop-types';

function Dots({ activeIndex, onClick, sliderImage }) {
    return (
        <div className="all-dots">
            {sliderImage.map((slide, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                    onClick={() => onClick(index)}
                ></span>
            ))}
        </div>
    );
}

Dots.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    sliderImage: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            button: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Dots;
