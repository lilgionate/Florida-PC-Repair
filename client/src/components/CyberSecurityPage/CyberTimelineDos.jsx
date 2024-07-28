import React from 'react';
import './CyberSecurityPage.scss';

const Step = ({ title, subtitle, description }) => {
  return (
    <div className="step-container-two">
      <div className="step-icon-two">
        <i className="fa-solid fa-check"></i>
      </div>
      <div className="step-content-container-two">
        <div className="step-content-two">
          <h3 className="step-title-two">{title}</h3>
          <h4 className="step-subtitle-dos">{subtitle}</h4>
          {description.map((desc, index) => (
            <p key={index} className="step-description-two">{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step;