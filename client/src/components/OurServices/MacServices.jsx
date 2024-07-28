import React from 'react';
import './OurServices.scss';

import MacNoPower from '../../assets/macbook-pro-black-screen-repair.jpg';
import MacBookScreenRep from '../../assets/macbook-screen-replacement.png';
import MacSpillDamage from '../../assets/SpillDamageRepair.jpg';
import MacBatteryRep from '../../assets/Macbook-battery-replacement.png';
import MacLogicBoard from '../../assets/logic-board-macbook-repair-service.jpg';
import MacDataRecovery from '../../assets/DataRecovery.jpg';

const MacRepairComponent = () => {
  return (
    <div className="mac-repair-container">
      <div className="mac-repair-header">
        <h2 className="mac-repair-title">Your Go-To Mac Repair Center</h2>
        <p className="mac-repair-subtitle">Directly repairing logic boards and all MacBook, iMac, and Mac Pro issues, saving you time and money.</p>
      </div>
      <div className="mac-repair-cards">
        <MacRepairCard image={MacNoPower} alt="MacBook Won't Power Up" title="MacBook Won't Power Up" />
        <MacRepairCard image={MacBookScreenRep} alt="MacBook Screen Replacement" title="MacBook Screen Replacement" />
        <MacRepairCard image={MacSpillDamage} alt="MacBook Spill Repair" title="MacBook Spill Repair" />
        <MacRepairCard image={MacBatteryRep} alt="MacBook Won't Power Up" title="MacBook Won't Power Up" />
        <MacRepairCard image={MacLogicBoard} alt="MacBook Screen Replacement" title="MacBook Screen Replacement" />
        <MacRepairCard image={MacDataRecovery} alt="MacBook Spill Repair" title="MacBook Spill Repair" />
      </div>
    </div>
  );
};

const MacRepairCard = ({ image, alt, title }) => {
  return (
    <div className="mac-repair-card">
      <img src={image} alt={alt} className="mac-repair-card-image" />
      <p className="mac-repair-card-title">{title}</p>
    </div>
  );
};

export default MacRepairComponent;
