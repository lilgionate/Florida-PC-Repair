import React from 'react';
import './CyberSecurityPage.scss';

const Step = ({ stepNumber, title, title2, subtitle, subtitle2, description }) => {
  return (
    <div className="step-container-two">
      <div className="step-icon-two">
        <i className="fa-solid fa-calendar"></i>
      </div>
      <div className="step-content-container-two">
        <div className="step-content-two">
          <h3 className="step-number-two">STEP {stepNumber}</h3>
          <h4 className="step-title-two">{title}</h4>
          <p className="step-subtitle">{subtitle}</p>
          {description.map((desc, index) => (
            <p key={index} className="step-description-two">{desc}</p>
          ))}
          <h4 className="step-title-two">{title2}</h4>
          <p className="step-subtitle-two-dos">{subtitle2}</p>
        </div>
      </div>
    </div>
  );
};

export default Step;