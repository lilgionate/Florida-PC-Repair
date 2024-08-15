import PropTypes from 'prop-types';
import './RemoteITPage.scss';

const EasySteps = () => {
  return (
    <div className="easy-steps-container">
      <h2 className="easy-steps-title">3 easy steps</h2>
      <div className="easy-steps-grid">
        <StepCard stepNumber="1" stepText="Make sure you're on the computer that needs to be fixed" />
        <StepCard stepNumber="2" stepText="Choose a remote plan & schedule a time" />
        <StepCard stepNumber="3" stepText="Download remote software & provide code for access to fix" />
      </div>
    </div>
  );
};

const StepCard = ({ stepNumber, stepText }) => {
  return (
    <div className="easy-step-card">
      <h3 className="easy-step-card-title">STEP {stepNumber}</h3>
      <p className="easy-step-card-text">{stepText}</p>
    </div>
  );
};

StepCard.propTypes = {
  stepNumber: PropTypes.string.isRequired,
  stepText: PropTypes.string.isRequired,
};

export default EasySteps;
