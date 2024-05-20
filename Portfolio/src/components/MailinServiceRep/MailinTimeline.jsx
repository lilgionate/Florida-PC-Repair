import React from 'react';
import './MailinServiceRep.scss';

const Step = ({ stepNumber, title, subtitle, description }) => {
  return (
    <div className="step-container">
      <div className="step-icon">
        <i className="fa-solid fa-calendar"></i>
      </div>
      <div className="step-content-container">
        <div className="step-content">
          <h3 className="step-number">STEP {stepNumber}</h3>
          <h4 className="step-title">{title}</h4>
          <p className="step-subtitle">{subtitle}</p>
          {description.map((desc, index) => (
            <p key={index} className="step-description">{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step;
