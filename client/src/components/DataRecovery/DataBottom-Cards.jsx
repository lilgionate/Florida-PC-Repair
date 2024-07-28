import React from 'react';


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

export default Feature;