import React from 'react';
import './ComputerWarrantyPage.scss';

import CPUUpgrade from '../../assets/cpuUpgrade.jpg';

const TechProtection = () => {
  return (
    <div className="all-in-one-container">
      <div className="md:w-1/2">
        <img src={CPUUpgrade} alt="Tech Support" className="all-in-one-image" />
      </div>
      <div className="all-in-one-content">
        <h2 className="all-in-one-title">All-in-one Tech Protection</h2>
        <p className="all-in-one-text">We are your full protection tech company that gives your instant insurance coverage without red tape.</p>
        <p className="all-in-one-text-sm">Basically, that means you get your stuff fixed right away without deductibles.</p>
        <button className="all-in-one-button">Choose a plan</button>
      </div>
    </div>
  );
};

export default TechProtection;