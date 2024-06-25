import React from 'react';
import './PhoneTabletRepairs.scss';

import Iphone from '../../assets/iphone.avif';
import Ipad from '../../assets/ipad.avif';
import SurfacePro from '../../assets/surface.avif';
import Others from '../../assets/others.webp';

const RepairCard = ({ title, description, imageUrl, isSpecial }) => {
  return (
    <div className="phone-card">
      <div className="phone-card-image-container">
        <img src={imageUrl} alt={title} className="phone-card-image" />
      </div>
      <div className="phone-card-content">
        <h3 className="phone-card-title">{title}</h3>
        <p className="phone-card-text">{description}</p>
        {isSpecial ? (
          <button className="phone-card-button">Schedule a Free Diagnostic</button>
        ) : (
          <button className="phone-card-button">Learn More</button>
        )}
      </div>
    </div>
  );
};

const RepairCardsContainer = () => {
  return (
    <div className="phone-card-container">
      <h2 className="phone-header">Servicing Apple devices, Microsoft tablets, and more</h2>
      <RepairCard
        title="iPhone Repair"
        description="Trustworthy Out-of-Warranty iPhone Repair"
        imageUrl={Iphone}
      />
      <RepairCard
        title="iPad Repair"
        description="Cracked iPad Screen?"
        imageUrl={Ipad}
      />
      <RepairCard
        title="Microsoft Surface"
        description="All Repairs are Proudly Done In-House"
        imageUrl={SurfacePro}
      />
      <RepairCard
        title="Other Devices"
        description="If you have any other devices not listed here, simply bring it to our repair center for a free diagnostic"
        imageUrl={Others}
        isSpecial
      />
    </div>
  );
};

export default RepairCardsContainer;
