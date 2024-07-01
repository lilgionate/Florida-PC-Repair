import React from 'react';
import './MicrosoftSurfaceRep.scss';

import MicrosoftSpill from '../../assets/Surface-waterspill.jpg';
import MicrosoftBattery from '../../assets/surface-pro-battery.webp';
import MicrosoftScreen from '../../assets/surface-pro-screen.webp';
import MicrosoftData from '../../assets/data-recovery.webp';

const RepairCard = ({ title, imageUrl, issue, causes, solution, parts, repairTime, link }) => {
  return (
    <div className="Microsoft-price-repair-card">
      <div className="Microsoft-price-repair-card-content">
        <img src={imageUrl} alt={title} className="Microsoft-price-repair-card-image" />
        <div className="Microsoft-price-repair-content">
          <h2 className="Microsoft-price-repair-card-title">{title}</h2>
          <p className="Microsoft-price-repair-card-text">
            {issue} {causes} {solution} {parts} {repairTime}
          </p>
          <a href={link} className="Microsoft-price-repair-card-button">Learn More</a>
        </div>
      </div>
    </div>
  );
};

const RepairCards = () => {
  return (
    <div className="Microsoft-price-repair-cards-container">
       <RepairCard
        title="Microsoft Surface Screen Replacement"
        imageUrl={MicrosoftScreen}
        issue="Issue: Cracked front glass and / or broken LCD"
        causes="Causes: Drop, fall, impact, defective screen / digitizer"
        solution="Solution: Replace Microsoft Surface LCD screen"
        parts="Parts:"
        link=""
      />
      <RepairCard
        title="Microsoft Surface Battery Replacement"
        imageUrl={MicrosoftBattery }
        issue="Battery not lasting like it used to? Not charging? No power light? 
        No worries! Our Surface experts are experienced at replacing Microsoft 
        Surface batteries."
        link=""
      />
      <RepairCard
        title="Microsoft Surface Water Spill Repair"
        imageUrl={MicrosoftSpill}
        issue="Issue: Microsoft Surface is not functioning well"
        causes="Causes: Water or other liquid spill"
        solution="Solution: Fix Microsoft Surface or recover files"
        parts="Parts: Only original and"
        link=""
      />
      <RepairCard
        title="Microsoft Surface Data Recovery"
        imageUrl={MicrosoftData}
        issue="Issue: Microsoft Surface doesn’t turn on or not functioning correctly"
        causes="Causes: Drop, fall, impact, defective screen / digitizer"
        solution="Solution: Recover files"
        parts="Parts: Only new"
        link=""
      />
    </div>
  );
};

export default RepairCards;
