import PropTypes from 'prop-types';
import './DataRecoveryServices.scss';

export const ProcessStep = ({ stepText, iconClass }) => (
    <div className="process-step">
        <i className={`fa ${iconClass} process-step-icon`} aria-hidden="true"></i>
        <p className="process-step-text">{stepText}</p>
    </div>
);

// Define prop types for the component
ProcessStep.propTypes = {
    stepText: PropTypes.string.isRequired,   // `stepText` should be a string and is required
    iconClass: PropTypes.string.isRequired,  // `iconClass` should be a string and is required
};

export default ProcessStep;
