import PropTypes from 'prop-types';

const Feature = ({ icon, title, description, buttonText }) => {
  return (
    <div className="data-hero-bottom-container">
      <div className="data-hero-bottom-title-container">
        <div className="data-icons">
          {icon}
        </div>
        <h2 className="data-hero-bottom-title">{title}</h2>
      </div>
      <p className="data-hero-bottom-des">{description}</p>
      <button className="data-hero-bottom-button">
        {buttonText}
      </button>
    </div>
  );
};

Feature.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Feature;
