import React from 'react';
import './OurServices.scss';

import BrokenScreen from '../../assets/BrokenLaptopScreen.jpg';
import WindowsDataRecovery from '../../assets/DataRecovery-1.jpg';
import PCWontStart from '../../assets/PCWontStart-1.jpg';
import SlowPCIssue from '../../assets/SlowPCIssues.jpg';
import PCHardDriveRep from '../../assets/PCHardDriveRepair.jpg';
import LaptopSpill from '../../assets/LaptopSpillRepair.jpg';

const WindowsServices = () => {
  return (
    <div className="windows-services-container">
      <div className="windows-services-header">
        <h2 className="windows-services-title">Fixing all Windows / PC issues</h2>
        <p className="windows-services-subtitle">Repairing laptops, desktops, PCs, custom gaming machines, all-in-ones, and tablets.</p>
      </div>
      <div className="windows-services-cards">
        <WindowsServicesCard image={BrokenScreen} alt="MacBook Won't Power Up" title="MacBook Won't Power Up" />
        <WindowsServicesCard image={WindowsDataRecovery} title="MacBook Screen Replacement" />
        <WindowsServicesCard image={PCWontStart} title="MacBook Spill Repair" />
        <WindowsServicesCard image={SlowPCIssue} title="MacBook Won't Power Up" />
        <WindowsServicesCard image={PCHardDriveRep} title="MacBook Screen Replacement" />
        <WindowsServicesCard image={LaptopSpill} alt="MacBook Spill Repair" title="MacBook Spill Repair" />
      </div>
    </div>
  );
};

const WindowsServicesCard = ({ image, alt, title }) => {
  return (
    <div className="windows-services-card">
      <img src={image} alt={alt} className="windows-services-card-image" />
      <p className="windows-services-card-title">{title}</p>
    </div>
  );
};

export default WindowsServices;
