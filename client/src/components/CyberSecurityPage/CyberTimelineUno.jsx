import './CyberSecurityPage.scss';
import PropTypes from 'prop-types';

const Step = ({ title, subtitle, description }) => {
  return (
    <div className="step-container-uno">
      <div className="step-icon-uno">
        <i className="fa-solid fa-x"></i>
      </div>
      <div className="step-content-container-uno">
        <div className="step-content-uno">
          <h3 className="step-title-uno">{title}</h3>
          <h4 className="step-subtitle-uno">{subtitle}</h4>
          {description.map((desc, index) => (
            <p key={index} className="step-description-uno">{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

Step.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Step;
