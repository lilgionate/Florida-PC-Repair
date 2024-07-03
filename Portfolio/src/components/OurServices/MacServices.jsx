import React from 'react';
import './OurServices.scss';

const MacRepairComponent = () => {
  return (
    <div className="mac-repair-container">
      <div className="mac-repair-header">
        <h2 className="mac-repair-title">Your Go-To Mac Repair Center</h2>
        <p className="mac-repair-subtitle">Directly repairing logic boards and all MacBook, iMac, and Mac Pro issues, saving you time and money.</p>
      </div>
      <div className="mac-repair-cards">
        <MacRepairCard image="https://placehold.co/300x200" alt="MacBook Won't Power Up" title="MacBook Won't Power Up" />
        <MacRepairCard image="https://placehold.co/300x200" alt="MacBook Screen Replacement" title="MacBook Screen Replacement" />
        <MacRepairCard image="https://placehold.co/300x200" alt="MacBook Spill Repair" title="MacBook Spill Repair" />
        <MacRepairCard image="https://placehold.co/300x200" alt="MacBook Won't Power Up" title="MacBook Won't Power Up" />
        <MacRepairCard image="https://placehold.co/300x200" alt="MacBook Screen Replacement" title="MacBook Screen Replacement" />
        <MacRepairCard image="https://placehold.co/300x200" alt="MacBook Spill Repair" title="MacBook Spill Repair" />
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
