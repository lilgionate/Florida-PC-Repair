import React from 'react';
import './IPadRepairs.scss';

import IpadSpill from '../../assets/iPad-Water-Spill.webp';
import IpadBattery from '../../assets/ipad-battery-replacement.jpg';
import IpadScreen from '../../assets/ipad-pro-screen-replacement.jpg';
import PhoneData from '../../assets/ipad-data-recovery.jpg';

const RepairCard = ({ title, imageUrl, issue, causes, solution, parts, repairTime, link }) => {
  return (
    <div className="IPad-price-repair-card">
      <div className="IPad-price-repair-card-content">
        <img src={imageUrl} alt={title} className="IPad-price-repair-card-image" />
        <div className="IPad-price-repair-content">
          <h2 className="IPad-price-repair-card-title">{title}</h2>
          <p className="IPad-price-repair-card-text">
            {issue} {causes} {solution} {parts} {repairTime}
          </p>
          <a href={link} className="IPad-price-repair-card-button">Learn More</a>
        </div>
      </div>
    </div>
  );
};

const RepairCards = () => {
  return (
    <div className="IPad-price-repair-cards-container">
       <RepairCard
        title="Screen Replacement"
        imageUrl={IpadScreen}
        issue="Issue: Cracked front glass and / or broken LCD"
        causes="Causes: Drop, fall, impact, defective screen / digitizer"
        solution="Solution: Replace iPad full glass digitizer"
        parts="Parts:"
        link="/ipad-repair-services/ipad-screen-replacement"
      />
      <RepairCard
        title="Battery Replacement"
        imageUrl={IpadBattery}
        issue="Issue: Battery runs out fast or doesn’t work"
        causes="Causes: Constant usage and impact"
        solution="Solution: Replace battery"
        parts="Parts: Only original and brand new"
        repairTime="Repair time:"
        link="/ipad-repair-services/ipad-battery-replacement"
      />
      <RepairCard
        title="Water Spill Repair"
        imageUrl={IpadSpill}
        issue="Issue: Spilled liquid or dropped into water"
        causes="Causes: No power / no screen picture"
        solution="Solution: Diagnose and replaced affected parts"
        parts="Parts: Only original and"
        link="/ipad-repair-services/ipad-water-spill-repair/"
      />
      <RepairCard
        title="Data Recovery"
        imageUrl={PhoneData}
        issue="Issue: Recover files from a non-working iPad"
        causes="Causes: Drop, fall, impact, or usage over time"
        solution="Solution: Recover files to media or another iPad"
        parts="Parts:"
        link="/ipad-repair-services/ipad-data-recovery/"
      />
    </div>
  );
};

export default RepairCards;
