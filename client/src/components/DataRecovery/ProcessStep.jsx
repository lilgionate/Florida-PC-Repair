import './DataRecoveryServices.scss';

export const ProcessStep = ({ stepNumber, stepText, iconClass }) => (
    <div className="process-step">
        <i className={`fa ${iconClass} process-step-icon`} aria-hidden="true"></i>
        <p className="process-step-text">{stepText}</p>
    </div>
);
