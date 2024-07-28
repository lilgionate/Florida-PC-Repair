import React from 'react';
import './OnSiteTechPage.scss';

import OutSourcing from '../../assets/outsourcing.jpg';
import HouseCalls from '../../assets/HouseCalls.jpg';
import Maintenance from '../../assets/Maintenance.jpg';
import Recruitment from '../../assets/Recruitment.jpg';
import BulkRepairs from '../../assets/BulkRepairs.jpg';
import NetworkCabling from '../../assets/NetworkCabling.jpg';

const ITSpecialties = () => {
  return (
    <div className="it-specialties-container">
      <h2 className="it-specialties-heading">Our IT Specialties</h2>
      <div className="it-specialties-grid">
        <div className="it-specialist-card">
          <img className="it-specialist-image" src={OutSourcing} alt="Office IT Outsourcing" />
          <h3 className="it-specialist-title">Office IT Outsourcing</h3>
        </div>
        <div className="it-specialist-card">
          <img className="it-specialist-image" src={HouseCalls} alt="House calls" />
          <h3 className="it-specialist-title">House calls</h3>
        </div>
        <div className="it-specialist-card">
          <img className="it-specialist-image" src={Maintenance} alt="Periodic Maintenance" />
          <h3 className="it-specialist-title">Periodic Maintenance</h3>
        </div>
        <div className="it-specialist-card">
          <img className="it-specialist-image" src={Recruitment} alt="Periodic Maintenance" />
          <h3 className="it-specialist-title">Tech Recruitment</h3>
        </div>
        <div className="it-specialist-card">
          <img className="it-specialist-image" src={BulkRepairs} alt="Periodic Maintenance" />
          <h3 className="it-specialist-title">Bulk Repairs</h3>
        </div>
        <div className="it-specialist-card">
          <img className="it-specialist-image" src={NetworkCabling} alt="Periodic Maintenance" />
          <h3 className="it-specialist-title">Network Cabling</h3>
        </div>
      </div>
    </div>
  );
};

export default ITSpecialties;
