import React from 'react';
import './CyberSecurityPage.scss';

const Step = ({ stepNumber, title, title2, subtitle, subtitle2, description }) => {
  return (
    <div className="step-container-uno">
      <div className="step-icon-uno">
        <i className="fa-solid fa-calendar"></i>
      </div>
      <div className="step-content-container-uno">
        <div className="step-content-uno">
          <h3 className="step-number-uno">STEP {stepNumber}</h3>
          <h4 className="step-title-uno">{title}</h4>
          <p className="step-subtitle-uno">{subtitle}</p>
          {description.map((desc, index) => (
            <p key={index} className="step-description-uno">{desc}</p>
          ))}
          <h4 className="step-title-uno">{title2}</h4>
          <p className="step-subtitle-two-uno">{subtitle2}</p>
        </div>
      </div>
    </div>
  );
};

export default Step;