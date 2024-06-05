import React from 'react';
import './CyberSecurityPage.scss';

import SecurityListItem from './CyberProtectionPlanList';


const CyberSecurityProtection = () => {

  return (
    <div className="cyber-protection-plan-container">
      <h1 className="cyber-protection-title">Florida PC Support - Cyber Security Protection Plan</h1>
      <p className="cyber-protection-body">
        Security Protection Plan for your Computer or Device.
      </p>
        <p className="cyber-protection-body">
            Protect your computer from viruses, spyware, browser redirects, and malicious threats.
        </p>
      <h1 className="cyber-protection-price">Only $25 per month for the year</h1>
      
      <div className='cyber-security-container'>
      <div className="cyber-security-flex-item">
        <ul className="cyber-security-list">
          <SecurityListItem text="Don’t worry about paying every time you have a virus" />
          <SecurityListItem text="Includes security protection setup" />
          <SecurityListItem text="Receive unlimited remote security support" />
          <SecurityListItem text="Receive constant monitoring / protection" />
          <SecurityListItem text="Includes: anti-virus, firewall, VPN, patch management, browser extension security, and content filtering" />
          <SecurityListItem text="You are locked in at the low $25/month rate for future years even when rates increase." />
          <SecurityListItem text="Includes computers, phones, tablets, and other devices" />
        </ul>
      </div>
      <div className="cyber-security-flex-item cyber-security-bg-white">
        <h2 className="cyber-security-title">All security protection services are covered within the policy</h2>
        <ul className="cyber-security-list">
          <li><a href="#" className="cyber-security-link">Virus Removals</a></li>
          <li><a href="#" className="cyber-security-link">Software Vulnerability Protection</a></li>
          <li><a href="#" className="cyber-security-link">Hacker Prevention</a></li>
          <li><a href="#" className="cyber-security-link">VPN Security</a></li>
          <li><a href="#" className="cyber-security-link">Patch Management</a></li>
          <li><a href="#" className="cyber-security-link">Content Filtering</a></li>
          <li><a href="#" className="cyber-security-link">Remote Support</a></li>
          <li><a href="#" className="cyber-security-link">Monthly Reports</a></li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default CyberSecurityProtection;

