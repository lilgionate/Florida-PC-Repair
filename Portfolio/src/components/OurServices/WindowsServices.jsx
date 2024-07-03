import React from 'react';
import './OurServices.scss';

const WindowsServices = () => {
  return (
    <div className="windows-services-container">
      <div className="windows-services-header">
        <h2 className="windows-services-title">Fixing all Windows / PC issues</h2>
        <p className="windows-services-subtitle">Repairing laptops, desktops, PCs, custom gaming machines, all-in-ones, and tablets.</p>
      </div>
      <div className="windows-services-cards">
        <WindowsServicesCard image="https://placehold.co/300x200" alt="MacBook Won't Power Up" title="MacBook Won't Power Up" />
        <WindowsServicesCard image="https://placehold.co/300x200" alt="MacBook Screen Replacement" title="MacBook Screen Replacement" />
        <WindowsServicesCard image="https://placehold.co/300x200" alt="MacBook Spill Repair" title="MacBook Spill Repair" />
        <WindowsServicesCard image="https://placehold.co/300x200" alt="MacBook Won't Power Up" title="MacBook Won't Power Up" />
        <WindowsServicesCard image="https://placehold.co/300x200" alt="MacBook Screen Replacement" title="MacBook Screen Replacement" />
        <WindowsServicesCard image="https://placehold.co/300x200" alt="MacBook Spill Repair" title="MacBook Spill Repair" />
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
