import React from 'react';
import './ComputerWarrantyPage.scss';

import Tech1 from '../../assets/Frame-18.png';
import Tech2 from '../../assets/Frame-17.png';
import Tech3 from '../../assets/Frame-16.png';

const RemoteServiceCard = () => {
  return (
    <div className="tech-pricing-card-container">
      <div className="tech-pricing-card">
        <div className="tech-pricing-card-header">
          <img src={Tech1} alt="remote per issue" className="tech-pricing-img" />
          <h3 className="tech-pricing-title">Tech</h3>
          <p className="tech-pricing-des">Device Protection</p>
        </div>
        <div className="tech-pricing-card-content">
          <div className="tech-pricing-price-container">
            <span className="tech-pricing-price"><span className='it-price-dollar'>$</span>15</span>
            <span className="tech-pricing-sub">per month / per device</span>
          </div>
          <div className="tech-pricing-feature-list">
            <li className="tech-pricing-feature-item">
              <i className="tech-pricing-icon fa-solid fa-circle-check"></i>
              <span>Unlimited hardware repairs + OS fixes</span>
            </li>
            <div className="tech-pricing-divider"></div>
            <li className="tech-pricing-feature-item">
              <i className="tech-pricing-icon fa-solid fa-circle-check"></i>
              <span>Unlimited cleanings, tune-ups, diagnostics</span>
            </li>
            <div className="tech-pricing-divider"></div>
            <li className="tech-pricing-feature-item">
              <i className="tech-pricing-icon fa-solid fa-circle-check"></i>
              <span>Covers drops, spills, accidents, defects</span>
            </li>
          </div>
          <div className="tech-pricing-text-center">
            <button className="tech-pricing-button">Choose Plan</button>
            <p className="tech-pricing-sub-text">*Extras: part costs, data recovery, Outlook/email fixes</p>
          </div>
        </div>
      </div>

      <div className="tech-pricing-card">
        <div className="tech-pricing-card-header">
          <img src={Tech2} alt="remote per year" className="tech-pricing-img" />
          <h3 className="tech-pricing-title">Tech+</h3>
          <p className="tech-pricing-des">Device Protection + Remote Assistance</p>
        </div>
        <div className="tech-pricing-card-content">
        <div className="tech-pricing-price-container">
            <span className="tech-pricing-price"><span className='tech-price-dollar'>$</span>35</span>
            <span className="tech-pricing-sub">per month / per device</span>
          </div>
          <div className="tech-pricing-feature-list">
            <li className="tech-pricing-feature-item">
              <i className="tech-pricing-icon fa-solid fa-circle-check"></i>
              <span>Includes all in Tech<span className="tech-plus"> plus</span></span>
            </li>
            <div className="tech-pricing-divider"></div>
            <li className="tech-pricing-feature-item">
              <i className="tech-pricing-icon fa-solid fa-circle-check"></i>
              <span>1-Click Remote support help + diagnostics and recommendations</span>
            </li>
            <div className="tech-pricing-divider"></div>
            <li className="tech-pricing-feature-item">
              <i className="tech-pricing-icon fa-solid fa-circle-check"></i>
              <span>Full device coverage: hardware + remote</span>
            </li>
          </div>
          <div className="tech-pricing-text-center">
            <button className="tech-pricing-button">Choose Plan</button>
            <p className="tech-pricing-sub-text">*Up to 12 remote sessions per year</p>
          </div>
        </div>
      </div>
      <div className="tech-pricing-card">
        <div className="tech-pricing-card-header">
          <img src={Tech3} alt="remote per year" className="tech-pricing-img" />
          <h3 className="tech-pricing-title">Tech+ Shield</h3>
          <p className="tech-pricing-des">Hardware + Remote Assistance + Cyber Security</p>
        </div>
        <div className="tech-pricing-card-content">
        <div className="tech-pricing-price-container">
            <span className="tech-pricing-price"><span className='tech-price-dollar'>$</span>50</span>
            <span className="tech-pricing-sub">per month / per device</span>
          </div>
          <div className="tech-pricing-feature-list">
            <li className="tech-pricing-feature-item">
              <i className="tech-pricing-icon fa-solid fa-circle-check"></i>
              <span>Includes all in Tech+<span className="tech-plus"> plus</span></span>
            </li>
            <div className="tech-pricing-divider"></div>
            <li className="tech-pricing-feature-item">
              <i className="tech-pricing-icon fa-solid fa-circle-check"></i>
              <span>Unlimited virus, spyware, malware removals</span>
            </li>
            <div className="tech-pricing-divider"></div>
            <li className="tech-pricing-feature-item">
              <i className="tech-pricing-icon fa-solid fa-circle-check"></i>
              <span>Anti-virus, firewall, security monitoring</span>
            </li>
          </div>
          <div className="tech-pricing-text-center">
            <button className="tech-pricing-button">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteServiceCard;