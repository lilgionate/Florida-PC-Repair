import React from 'react';
import './IPadRepairs.scss';

import PhoneSpill from '../../assets/phone-water-spill.webp';
import PhoneBattery from '../../assets/iphone-battery.webp';
import PhoneScreen from '../../assets/brokenIphone.webp';
import PhoneData from '../../assets/Iphone-data-recovery.jpg';

const RepairCard = ({ title, imageUrl, issue, causes, solution, parts, repairTime, link }) => {
  return (
    <div className="IPhone-price-repair-card">
      <div className="IPhone-price-repair-card-content">
        <img src={imageUrl} alt={title} className="IPhone-price-repair-card-image" />
        <div className="IPhone-price-repair-content">
          <h2 className="IPhone-price-repair-card-title">{title}</h2>
          <p className="IPhone-price-repair-card-text">
            {issue} {causes} {solution} {parts} {repairTime}
          </p>
          <a href={link} className="IPhone-price-repair-card-button">Learn More</a>
        </div>
      </div>
    </div>
  );
};

const RepairCards = () => {
  return (
    <div className="IPhone-price-repair-cards-container">
       <RepairCard
        title="Screen Replacement"
        imageUrl={PhoneScreen}
        issue="Issue: Cracked front glass and / or broken LCD"
        causes="Causes: Drop, fall, impact, defective screen / digitizer"
        solution="Solution: Replace iPad full glass digitizer"
        parts="Parts:"
        link="/iphone-repair-services/screen-replacement/"
      />
      <RepairCard
        title="Battery Replacement"
        imageUrl={PhoneBattery}
        issue="Issue: Battery runs out fast or doesn’t work"
        causes="Causes: Constant usage and impact"
        solution="Solution: Replace battery"
        parts="Parts: Only original and brand new"
        repairTime="Repair time:"
        link="/iphone-repair-services/battery-replacement/"
      />
      <RepairCard
        title="Water Spill Repair"
        imageUrl={PhoneSpill}
        issue="Issue: Spilled liquid or dropped into water"
        causes="Causes: No power / no screen picture"
        solution="Solution: Diagnose and replaced affected parts"
        parts="Parts: Only original and"
        link="/iphone-repair-services/water-spill-repair/"
      />
      <RepairCard
        title="Data Recovery"
        imageUrl={PhoneData}
        issue="Issue: Recover files from a non-working iPad"
        causes="Causes: Drop, fall, impact, or usage over time"
        solution="Solution: Recover files to media or another iPad"
        parts="Parts:"
        link="/iphone-repair-services/data-recovery/"
      />
    </div>
  );
};

export default RepairCards;
